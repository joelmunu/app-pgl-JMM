import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import appColors from '../assets/styles/appColors';
import { TextInput } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';

const RegisterScreen = () => {

    const [usernameInput, setUsernameInput] = useState("");
    const [email, setEmail] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const usernameHandle = (username: string) => {
        setUsernameInput(username);
    };

    const emailHandle = (username: string) => {

    };

    const passwordHandle = (password: string) => {
        setPasswordInput(password);
    };

    return (
        <View>
            <View style={styles.loginContainer}>
                <Text style={styles.label}>Nombre de usuario:</Text>
                <TextInput
                    placeholder='Nombre de usuario'
                    style={styles.input}
                    onChangeText={usernameHandle}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={emailHandle}
                />
                <Text style={styles.label}>Contraseña:</Text>
                <TextInput
                    placeholder='Contraseña'
                    style={styles.input}
                    secureTextEntry
                    onChangeText={passwordHandle}
                />
                <Pressable
                    style={styles.pressable}
                    //onPress={register}
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