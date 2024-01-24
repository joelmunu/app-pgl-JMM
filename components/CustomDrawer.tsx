import { StyleSheet } from 'react-native';
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import appColors from '../assets/styles/appColors';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import LogoutScreen from '../screens/LogoutScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AudioRecordingScreen from '../screens/AudioRecordingScreen';

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
    drawerInactiveTintColor: appColors.textColor,
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: 'slide',
  };

  const { isUserLogged } = useContext(LoginContext);

  return isUserLogged ? (
    <Drawer.Navigator initialRouteName='Inicio' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Inicio' component={WelcomeScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name='Inicio de sesión' component={LoginScreen} options={{ title: 'Inicio de sesión' }} />
      <Drawer.Screen name='Registro de usuario' component={RegisterScreen} options={{ title: 'Registro de usuario' }} />
    </Drawer.Navigator>
  ) : (
    <Drawer.Navigator initialRouteName='Inicio' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Inicio' component={WelcomeScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name='Portfolio' component={PortfolioScreen} options={{ title: 'Portfolio' }} />
      <Drawer.Screen name='Grabadora de audio' component={AudioRecordingScreen} options={{ title: 'Grabadora de audio' }} />
      <Drawer.Screen name='Cerrar sesión' component={LogoutScreen} options={{ title: 'Cerrar sesión' }} />
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});