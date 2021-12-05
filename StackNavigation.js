import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ScanDataScreen from './screens/ScanDataScreen';
import MenuScreen from './screens/MenuScreen';
import Inicio from './components/menu/Inicio';
import Asistencia from './components/menu/Asistencia';
import Contacto from './components/menu/Contacto';
import EstaApp from './components/menu/EstaApp';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="ScanData" component={ScanDataScreen} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Asistencia" component={Asistencia} />
      <Stack.Screen name="Contacto" component={Contacto} />
      <Stack.Screen name="Esta App" component={EstaApp} />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
