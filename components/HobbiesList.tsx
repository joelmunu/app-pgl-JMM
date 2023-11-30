import { StyleSheet, Text, View, ScrollView } from "react-native";
import appColors from "../assets/styles/appColors";

const HobbiesList = () => {
    return (
        <View style={styles.hobbiesContainer}>
            <Text style={styles.titleStyle}>cosas que me gustan mucho:</Text>
            <ScrollView style={styles.scrollviewStyle}>
                <Text style={styles.hobbiesStyle}>Informática 👨🏻‍💻</Text>
                <Text style={styles.hobbiesStyle}>
                    Ver series y pelis 🎬
                </Text>
                <Text style={styles.hobbiesStyle}>Ver las competiciones Kings ⚽</Text>
                <Text style={styles.hobbiesStyle}>
                    Coches y simuladores de conducción 🚗
                </Text>
                <Text style={styles.hobbiesStyle}>Agapornis 🐦</Text>
                <Text style={styles.hobbiesStyle}>Aviación 🛩️</Text>
                <Text style={styles.hobbiesStyle}>McDonald's 🍔</Text>
                <Text style={styles.hobbiesStyle}>Ir al gimnsasio 🏋🏻‍♂️</Text>
                <Text style={styles.hobbiesStyle}>Correr 🏃🏻‍♂️</Text>
            </ScrollView>
        </View>
    );
};

export default HobbiesList;

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    hobbiesContainer: {
        marginTop: 10
    },
    hobbiesStyle: {
        borderColor: appColors.accentColor,
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 20,
        color: appColors.textColor,
        textAlign: "center",
        fontSize: 16,
        backgroundColor: appColors.secondary,
    },
    titleStyle: {
        color: appColors.titleColor,
        fontWeight: "900",
        textTransform: "capitalize",
        fontSize: 20,
        textAlign: "center",
    },
    scrollviewStyle: {
        padding: 10
    }
});