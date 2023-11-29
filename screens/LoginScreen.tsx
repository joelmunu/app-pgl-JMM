import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import appColors from '../assets/styles/appColors';
import { TextInput } from 'react-native-gesture-handler';
import { useContext, useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const LoginScreen = () => {

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(false);
  const { toggleIsUserLogged, setUsername } = useContext(LoginContext);

  const usernameHandle = (username: string) => {
    setUsernameInput(username);
  };

  const passwordHandle = (password: string) => {
    setPasswordInput(password);
  };

  const showFailedLoginAlert = () => {
    Alert.alert('Error al iniciar sesión', 'Nombre de usuario o contraseña incorrectos', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const login = () => {
    const userData = {
      username: 'Joel',
      password: '1234'
    };

    if (usernameInput == userData.username && passwordInput == userData.password) {
      toggleIsUserLogged();
      setUsername(usernameInput);
      console.log('Login completed');
      setLoginError(false);
    } else {
      console.log('Login failed');
      showFailedLoginAlert();
      setLoginError(true);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={loginError ? ({...styles.label, ...styles.labelError}) : (styles.label)}>Nombre de usuario:</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={loginError ? ({...styles.input, ...styles.inputError}) : (styles.input)}
        onChangeText={usernameHandle}
      />
      <Text style={loginError ? ({...styles.label, ...styles.labelError}) : (styles.label)}>Contraseña:</Text>
      <TextInput
        placeholder='Contraseña'
        style={loginError ? ({...styles.input, ...styles.inputError}) : (styles.input)}
        secureTextEntry
        onChangeText={passwordHandle}
      />
      <Pressable
        style={styles.pressable}
        onPress={login}
        accessibilityLabel='Boton para iniciar sesion'
      >
        <Text style={styles.buttonText}>
          Iniciar sesión
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 25,
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
    fontSize: 18
  },
  inputError: {
    borderColor: appColors.errorColor
  },
  pressable: {
    backgroundColor: appColors.accentColor,
    borderRadius: 10,
    width: '45%',
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