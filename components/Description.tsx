import { StyleSheet, Text, View, Image } from 'react-native';
import appColors from '../assets/styles/appColors';

const Description = () => {
    return (
        <View style={styles.descriptionStyle}>
            <Image
                style={styles.avatar}
                source={require("../assets/AfroPixel.png")}
            />
            <View style={styles.descriptionContainer}>
                <Text style={{...styles.titleStyle, ...styles.descriptionStyle}}>Descripción sobre mí</Text>
                <Text style={styles.textStyle}>
                    Mi nombre es Joel Munuera Marrero, actualmente me encuentro
                    estudiando 2º CFGS DAM en Salesianos la Cuesta.
                </Text>
            </View>
        </View>
    );
};

export default Description;

const styles = StyleSheet.create({
    descriptionStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5
    },
    avatar: {
        height: 90,
        width: 90,
        borderRadius: 100,
        marginTop: 11,
    },
    descriptionContainer: {
      margin: 10,
      marginTop: 25,
      backgroundColor: appColors.accentColor,
      padding: 10,
      borderRadius: 10,
      width: "70%",
    },
    titleStyle: {
      textAlign: "center",
      fontWeight: "700",
      fontSize: 20,
      color: appColors.primary,
    },
    textStyle: {
      color: appColors.secondary,
    },
});