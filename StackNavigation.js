import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanScreen from './screens/ScanScreen';
import ScanDataScreen from './screens/ScanDataScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Scan" component={ScanScreen} />
            <Stack.Screen name="ScanData" component={ScanDataScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
