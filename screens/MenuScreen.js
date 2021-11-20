import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

const MenuScreen = () => {
  return (
    <View>
      {/* Menu */}
      <View>
        <Text>Inicio</Text>
        {/*Componente Inicio*/}
      </View>
      <View>
        <Text>Asistencia</Text>
        {/*Componente Asistencia Swipen Menu*/}
      </View>
      <View>
        <Text>Contacto</Text>
        {/*Componente Contacto*/}
      </View>
      <View>
        <Text>Esta app</Text>
        {/*Componente Esta app*/}
      </View>
      {/* End of Menu */}
    </View>
  );
};

export default MenuScreen;
