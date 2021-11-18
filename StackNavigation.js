import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ScanDataScreen from './screens/ScanDataScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="ScanData" component={ScanDataScreen} />
            
        </Stack.Navigator>
    )
}

export default StackNavigation
