import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserInfoScreen from './UserInfoScreen';
import QrScreen from './QrScreen';
import appColors from '../assets/styles/appColors';

const Tab = createMaterialTopTabNavigator();

const PortfolioScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: appColors.secondary },
                tabBarActiveTintColor: appColors.titleColor,
                tabBarIndicatorStyle: {backgroundColor: appColors.accentColor},
            }}>
            <Tab.Screen name="Descripción" component={UserInfoScreen} />
            <Tab.Screen name="GitHub" component={QrScreen} />
        </Tab.Navigator>
    );
}

export default PortfolioScreen;