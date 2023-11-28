import { StyleSheet } from 'react-native'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import appColors from '../assets/styles/appColors';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();


const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: appColors.primary,
    },
    headerTintColor: appColors.titleColor,
    drawerItemStyle: {
      width: '90%',
    },
    drawerStyle: {
      backgroundColor: appColors.secondary
    }, 
    drawerActiveTintColor: appColors.titleColor,
    drawerActiveBackgroundColor: appColors.primary,
    drawerInactiveTintColor: appColors.titleColor,
    drawerInactiveBackgroundColor: '#b0b3a4',
    drawerType: 'slide',
  }

  return (
    <Drawer.Navigator initialRouteName='Inicio' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Inicio' component={WelcomeScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name='Inicio de sesión' component={LoginScreen} options={{ title: 'Inicio de sesión' }} />
    </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})