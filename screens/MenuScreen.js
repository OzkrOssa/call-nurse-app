import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Alert, StyleSheet, Image} from 'react-native';
import tw from 'twrnc';
import Swiper from 'react-native-swiper';
const MenuScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw.style('flex-1')}>
      {/* <View style={tw.style('flex-1 -mt-6')}>
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
      </View> */}
      <View style={tw.style('flex-1')}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={tw.style('flex-1 -mt-10 justify-center items-center')}>
            <Image
              source={require('../assets/img/emergency.png')}
              style={tw.style('h-40 w-40')}
            />
            <Text>Precione para emergencia</Text>
            <TouchableOpacity
              style={tw.style('bg-blue-200 rounded-xl p-3 mt-8')}
              onPress={() => Alert.alert('Emergencias')}
            >
              <Text>EMERGENCIA</Text>
            </TouchableOpacity>
          </View>
          <View style={tw.style('flex-1 -mt-10 justify-center items-center p-3')}>
            <Image
              source={require('../assets/img/primero-auxilios.png')}
              style={tw.style('h-32 w-32')}
            />
            <Text style={tw.style('text-center p-4')}>Precione si desea asistencia de enfermeria, canalizaciones curaciones o movilidad del paciente</Text>
            <TouchableOpacity
              style={tw.style('bg-blue-200 rounded-xl p-3 mt-8')}
              onPress={() => Alert.alert('Primeros Auxilios')}
            >
              <Text>PRIMEROS AUXILIOS</Text>
            </TouchableOpacity>
          </View>
          <View style={tw.style('flex-1 -mt-10 justify-center items-center p-3')}>
            <Image
              source={require('../assets/img/biomedica.png')}
              style={tw.style('h-40 w-40')}
            />
            <Text style={tw.style('text-center p-4')}>Soporte medico de equipo biomedico</Text>
            <TouchableOpacity
              style={tw.style('bg-blue-200 rounded-xl p-3 mt-8')}
              onPress={() => Alert.alert('Soporte medico de equipo biomedico')}
            >
              <Text>SOPORTE BIOMEDICO</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
