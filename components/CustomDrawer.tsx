import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import appColors from '../assets/styles/appColors';
import WelcomeScreen from '../screens/WelcomeScreen';

const Drawer = createDrawerNavigator();


const CustomDrawer = () => {
  const drawerNavigatorScreenOptions: DrawerNavigationOptions = {
    headerStyle: {
      backgroundColor: appColors.primary,
    },
    headerTintColor: appColors.titleColor,
    drawerItemStyle: {
      width: '100%',
    },
    drawerActiveTintColor: appColors.titleColor,
    drawerActiveBackgroundColor: appColors.primary,
    drawerInactiveTintColor: 'lightgray',
    drawerInactiveBackgroundColor: appColors.secondary,
    drawerType: 'slide',
  }

  return (
    <Drawer.Navigator initialRouteName='Inicio' screenOptions={drawerNavigatorScreenOptions}>
      <Drawer.Screen name='Inicio' component={WelcomeScreen} options={{ title: 'Inicio' }} />
    </Drawer.Navigator>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})