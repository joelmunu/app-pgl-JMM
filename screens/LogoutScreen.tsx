import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import appColors from '../assets/styles/appColors';
import { LoginContext } from '../contexts/LoginContext';
import { useContext } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const LogoutScreen = ({ navigation }: {
    navigation: NavigationProp<ParamListBase>
}) => {

    const { username, toggleIsUserLogged } = useContext(LoginContext);

    const logoutHandle = () => {
        toggleIsUserLogged(false);
        console.log('Log out completed')
        Alert.alert('Se ha cerrado la sesión ✅', 'Tendrá que iniciar sesión de nuevo para acceder a la app', [
            {
                text: 'Iniciar sesión',
                onPress: () => {
                    navigation.navigate("Inicio de sesión");
                },
                style: 'default',
            },
            {
                text: 'OK',
                onPress: () => {
                    navigation.navigate("Inicio");
                },
                style: 'default',
            },
        ]);
    };

    const logout = () => {
        Alert.alert(`⚠️ Se va a cerrar la sesión de ${username}`, 'Para acceder a los datos tendrá que iniciar sesión de nuevo', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Logout canceled'),
                style: 'cancel',
            },
            {
                text: 'Cerrar sesión',
                onPress: (logoutHandle),
                style: 'default',
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{ ...styles.logoutText, ...styles.warningText }}>⚠️ Atención: ⚠️</Text>
                <Text style={styles.logoutText}>Se cerrará la sesión de {username}</Text>
            </View>
            <View style={styles.pressableContainer}>
                <Pressable
                    style={styles.pressable}
                    onPress={logout}
                    accessibilityLabel="Boton para acceder a la pantalla de inicio de sesion"
                >
                    <Text style={styles.buttonText}>
                        Cerrar sesión
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LogoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 8
    },
    logoutText: {
        color: appColors.titleColor,
        fontSize: 26,
        marginLeft: 10,
        width: '90%'
    },
    warningText: {
        color: appColors.warningColor,
        marginTop: 16,
    },
    pressable: {
        backgroundColor: appColors.accentColor,
        borderRadius: 10,
        width: '50%',
        padding: 18,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        marginTop: 45,
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