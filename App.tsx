import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import appColors from './assets/styles/appColors';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <CustomDrawer/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.secondary,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
