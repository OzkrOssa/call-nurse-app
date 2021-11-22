import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const MenuScreen = () => {

  const navigation = useNavigation();
  return (
    <View tw>
      <View style={tw.style('flex-row justify-around mt-10')}>
        {/* Menu */}
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Inicio')}
          >
            <Text style={tw.style('text-lg font-semibold')}>Inicio</Text>
            {/*Componente Inicio*/}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Asistencia')}
          >
            <Text style={tw.style('text-lg font-semibold')}>Asistencia</Text>
            {/*Componente Asistencia Swipen Menu*/}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Contacto')}
          >
            <Text style={tw.style('text-lg font-semibold')}>Contacto</Text>
            {/*Componente Contacto*/}
          </TouchableOpacity>
        </View>
        
        <View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Esta App')}
          >
          <Text style={tw.style('text-lg font-semibold')}>Esta app</Text>
          {/*Componente Esta app*/}
          </TouchableOpacity>
        </View>
        {/* End of Menu */}
      </View>
    </View>
  );
};

export default MenuScreen;
