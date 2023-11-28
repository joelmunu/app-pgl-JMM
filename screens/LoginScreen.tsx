import { Pressable, StyleSheet, Text, View } from 'react-native'
import appColors from '../assets/styles/appColors'
import { TextInput } from 'react-native-gesture-handler'

const LoginScreen = () => {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.label}>Nombre de usuario:</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
      />
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
      />
      <Pressable
        style={styles.pressable}
        //onPress={}
        accessibilityLabel="Boton para iniciar sesion"
      >
        <Text style={styles.buttonText}>
          Iniciar sesión
        </Text>
      </Pressable>
    </View>
  )
}

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
  input: {
    borderColor: appColors.accentColor,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "80%",
    fontSize: 18
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
})