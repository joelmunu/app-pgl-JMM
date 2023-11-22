import { StyleSheet, Text, View } from 'react-native'
import appColors from '../assets/styles/appColors'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>PGL App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: appColors.primary,
        width: '100%',
        flex: 1
    },
    headerTitle: {
        color: appColors.titleColor,
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 10
    }
})