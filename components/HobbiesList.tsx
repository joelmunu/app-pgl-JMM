import { StyleSheet, Text, View, ScrollView } from "react-native";
import appColors from "../assets/styles/appColors";

const HobbiesList = () => {
    return (
        <>
            <Text style={styles.titleStyle}>cosas que me gustan mucho:</Text>
                <ScrollView style={styles.scrollView}>
                    {[
                        "Informática 👨🏻‍💻",
                        "Ver series y pelis 🎬",
                        "Ver las competiciones Kings ⚽",
                        "Coches 🚗",
                        "Simuladores de conducción 🏎️",
                        "Agapornis 🐦",
                        "Aviación 🛩️",
                        "McDonald's 🍔",
                        "Ir al gimnsasio 🏋🏻‍♂️",
                        "Correr 🏃🏻‍♂️",
                        "Videojuegos 🎮"
                    ].map((item) => (
                        <Text key={item} style={styles.hobbiesStyle}>
                            {item}
                        </Text>
                    ))}
                </ScrollView>
        </>
    );
};

export default HobbiesList;

const styles = StyleSheet.create({
    hobbiesStyle: {
        borderColor: appColors.accentColor,
        borderWidth: 1,
        borderStyle: "dashed",
        color: appColors.textColor,
        textAlign: "center",
        fontSize: 16,
        backgroundColor: appColors.secondary,
        padding: 18
    },
    titleStyle: {
        color: appColors.titleColor,
        fontWeight: "900",
        textTransform: "capitalize",
        fontSize: 20,
        textAlign: "center",
    },
    scrollView: {
        width: "90%",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10
    },
});