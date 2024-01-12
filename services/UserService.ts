const USER_API_URL = 'http://172.16.100.197:8888/users';
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
        httpCode: 0
    };

    const request: RequestInfo = `${ USER_API_URL }${REGISTER_PATH}`;
    const response = await fetch(request, getInitRequest("POST", user));
    const json: UserApiJsonResponse = await response.json();

    if (json != null) {
        apiResponse.username = json.name;
    }
    apiResponse.httpCode = response.status;
    console.log(apiResponse.httpCode)
    return apiResponse;
};