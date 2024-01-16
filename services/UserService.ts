const USER_API_URL = 'http://172.16.101.208:8888/users'; // ESCRIBE AQUÍ TU IP
const LOGIN_PATH = '/login';
const REGISTER_PATH = '/register';

type UserApiJsonResponse = {
    id: number;
    name: string;
    email: string;
    hashedPwd: string;
};

type ApiResponseType = {
    username: string;
    httpCode: number;
    cookie: string;
}

const getInitRequest = (httpVerb: string, body: {}): RequestInit => {
    const init: RequestInit = {
        method: httpVerb,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
    return init;
};

export const userRegister = async (user: {}): Promise<ApiResponseType> => {
    let apiResponse = {
        username: "",
        httpCode: 0,
        cookie: ""
    };

    const request: RequestInfo = `${USER_API_URL}${REGISTER_PATH}`;
    const response = await fetch(request, getInitRequest("POST", user));
    const json: UserApiJsonResponse = await response.json();

    if (json != null) {
        apiResponse.username = json.name;
    };

    const setCookieHeader = response.headers.get('Set-Cookie');
    if (setCookieHeader != null) {
        apiResponse.cookie = setCookieHeader.split(';')[0];
    };
    console.log(`Cookie de sesión: ${apiResponse.cookie}`); // Cookie de sesion que devuelve la API. Solo logre mostrarla

    apiResponse.httpCode = response.status;
    return apiResponse;
};

export const userLogin = async (user: {}): Promise<number> => {
    const request: RequestInfo = `${USER_API_URL}${LOGIN_PATH}`;
    const response = await fetch(request, getInitRequest("POST", user));

    let httpCode = response.status;
    return httpCode;
};