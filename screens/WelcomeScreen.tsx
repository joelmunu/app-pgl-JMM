import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import appColors from '../assets/styles/appColors'

const WelcomeScreen = () => {
    return (
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
                    //onPress={}
                    accessibilityLabel="Boton para acceder a la pantalla de inicio de sesion"
                >
                    <Text style={styles.buttonText}>
                        Inicio de sesión
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 8
    },
    welcomeText: {
        color: appColors.titleColor,
        fontSize: 26,
        marginLeft: 10,
        marginTop: 16
    },
    pressable: {
        backgroundColor: appColors.accentColor,
        borderRadius: 10,
        width: '45%',
        padding: 18,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: appColors.secondary
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
        marginTop: -32,
    }
})