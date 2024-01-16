import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import appColors from '../assets/styles/appColors';
import { LoginContext } from '../contexts/LoginContext';
import { useContext } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const WelcomeScreen = ({navigation} : {
    navigation: NavigationProp<ParamListBase>}) => {

    const { username, isUserLogged } = useContext(LoginContext);

    const navigateToLogin = () => {
        navigation.navigate("Inicio de sesión");
    };

    const navigateToRegister = () => {
        navigation.navigate("Registro de usuario");
    };

    return isUserLogged ? (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.welcomeText}>Te damos la bienvenida, Invitado</Text>
                <Image
                    source={require("../assets/welcome.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigateToLogin()}
                    accessibilityLabel="Boton para acceder a la pantalla de inicio de sesion"
                >
                    <Text style={styles.buttonText}>
                        Inicio de sesión
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigateToRegister()}
                    accessibilityLabel="Boton para acceder a la pantalla de registro de usuario"
                >
                    <Text style={styles.buttonText}>
                        Registrarse
                    </Text>
                </Pressable>
            </View>
        </View>
    ) : (
        <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>Te damos la bienvenida, {username}</Text>
            <Image
                source={require("../assets/welcome.png")}
                style={styles.image}
            />
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 8
    },
    welcomeText: {
        color: appColors.titleColor,
        fontSize: 26,
        marginLeft: 10,
        marginTop: 16,
        width: '70%'
    },
    pressable: {
        backgroundColor: appColors.accentColor,
        borderRadius: 10,
        width: '50%',
        padding: 18,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 20,
        color: appColors.secondary,
        textAlign: 'center'
    },
    titleContainer: {
        flex: 2
    },
    pressableContainer: {
        flex: 3,
    },
    image: {
        alignSelf: 'flex-end',
        marginRight: 25,
    }
});