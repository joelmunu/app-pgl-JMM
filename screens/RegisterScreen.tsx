import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import appColors from '../assets/styles/appColors';
import { TextInput } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { userRegister } from '../services/UserService';
import { LoginContext } from '../contexts/LoginContext';

const RegisterScreen = () => {

    const [usernameInput, setUsernameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [registerError, setRegisterError] = useState(false);
    const { toggleIsUserLogged, setUsername } = useContext(LoginContext);

    const usernameHandle = (username: string) => {
        setUsernameInput(username);
    };

    const emailHandle = (email: string) => {
        setEmailInput(email);
    };

    const passwordHandle = (password: string) => {
        setPasswordInput(password);
    };

    const userRegistration = async () => {
        let user = {};
        user = {
            name: usernameInput,
            email: emailInput,
            password: passwordInput
        };
        let response = userRegister(user);

        if ((await response).httpCode == 201) {
            toggleIsUserLogged();
            setUsername(usernameInput);
            
            Alert.alert(`✅ Se ha creado el usuario ${usernameInput}`, 'Se te redigirá a la pantalla de inicio', [
                { text: 'Ok' },
            ]);

            setRegisterError(false);
        } else {
            Alert.alert('❌ Error en el registro', 'El usuario ya existe o falta algún campo', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            setRegisterError(true);
        }
    };

    return (
        <View>
            <View style={styles.loginContainer}>
                <Text style={registerError ? ({ ...styles.label, ...styles.labelError }) : (styles.label)}>Nombre de usuario:</Text>
                <TextInput
                    placeholder='Nombre de usuario'
                    style={registerError ? ({ ...styles.input, ...styles.inputError }) : (styles.input)}
                    onChangeText={usernameHandle}
                />
                <Text style={registerError ? ({ ...styles.label, ...styles.labelError }) : (styles.label)}>Email</Text>
                <TextInput
                    placeholder='Email'
                    style={registerError ? ({ ...styles.input, ...styles.inputError }) : (styles.input)}
                    onChangeText={emailHandle}
                />
                <Text style={registerError ? ({ ...styles.label, ...styles.labelError }) : (styles.label)}>Contraseña:</Text>
                <TextInput
                    placeholder='Contraseña'
                    style={registerError ? ({ ...styles.input, ...styles.inputError }) : (styles.input)}
                    secureTextEntry
                    onChangeText={passwordHandle}
                />
                <Pressable
                    style={styles.pressable}
                    onPress={userRegistration}
                    accessibilityLabel='Boton para crear un usuario'
                >
                    <Text style={styles.buttonText}>
                        Crear cuenta
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    label: {
        alignSelf: 'flex-start',
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 44,
        fontSize: 18,
        color: appColors.textColor,
        fontWeight: 'bold'
    },
    labelError: {
        color: appColors.errorColor
    },
    input: {
        borderColor: appColors.accentColor,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: "80%",
        fontSize: 18,
    },
    inputError: {
        borderColor: appColors.errorColor
    },
    pressable: {
        backgroundColor: appColors.accentColor,
        borderRadius: 10,
        width: '50%',
        padding: 18,
        alignSelf: 'center',
        marginTop: 45,
    },
    buttonText: {
        fontSize: 20,
        color: appColors.secondary,
        alignSelf: 'center'
    }
});