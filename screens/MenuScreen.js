import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import tw from 'twrnc';
import Asistencia from '../components/menu/Asistencia';
import Swiper from 'react-native-deck-swiper';

const MenuScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw.style('flex-1')}>
      <View style={tw.style('flex-row justify-around mt-10')}>
        {/* Menu */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
            <Text style={tw.style('text-lg font-semibold')}>Inicio</Text>
            {/*Componente Inicio*/}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={tw.style('text-lg font-semibold')}>Asistencia</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Contacto')}>
            <Text style={tw.style('text-lg font-semibold')}>Contacto</Text>
            {/*Componente Contacto*/}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Esta App')}>
            <Text style={tw.style('text-lg font-semibold')}>Esta app</Text>
            {/*Componente Esta app*/}
          </TouchableOpacity>
        </View>
        {/* End of Menu */}
      </View>

      <View style={tw.style('flex-1 -mt-6')}>
        <Swiper
          containerStyle={{backgroundColor: "transparent"}}
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={card => {
            return (
              <View style={tw.style('bg-blue-200 h-3/4 rounded-xl justify-center')}>
                <Text key={card} style={tw.style('text-2xl font-semibold bg-transparent text-center')}>{card}</Text>
              </View>
            );
          }}
          cardIndex={0}
          backgroundColor={'#FFFF'}
          stackSize={3}>
        </Swiper>
      </View>
    </View>
  );
};

export default MenuScreen;
