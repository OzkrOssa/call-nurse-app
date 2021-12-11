import React from 'react';
import {View, Text, TouchableOpacity,StyleSheet, Image} from 'react-native';
import tw from 'twrnc';
import Swiper from 'react-native-swiper';
import {addDataToFirebase} from '../services/firebase';

const MenuScreen = ({route}) => {
  const { data } = route.params;
  console.log(data)
  return (
    <View style={tw.style('flex-1')}>
      <View style={tw.style('flex-1')}>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={tw.style('flex-1 -mt-10 justify-center items-center')}>
            <Image
              source={require('../assets/img/emergency.png')}
              style={tw.style('h-40 w-40')}
            />
            <Text style={tw.style('text-gray-500')}>Precione para emergencia</Text>
            <TouchableOpacity
              style={tw.style('bg-blue-200 rounded-xl p-3 mt-8')}
              onPress={() => addDataToFirebase({...data,type:"Emergencia",time:new Date()})}>
              <Text style={tw.style('text-center text-gray-600')}>EMERGENCIA</Text> 
            </TouchableOpacity>
          </View>
          <View style={tw.style('flex-1 -mt-10 justify-center items-center p-3')}>
            <Image
              source={require('../assets/img/primero-auxilios.png')}
              style={tw.style('h-32 w-32')}
            />
            <Text style={tw.style('text-center p-4 text-gray-500')}>Precione si desea asistencia de enfermeria, canalizaciones curaciones o movilidad del paciente</Text>
            <TouchableOpacity
              style={tw.style('bg-blue-200 rounded-xl p-3 mt-8')}
              onPress={() => addDataToFirebase({...data,type:"Primeros Auxilios",time:new Date()})}>
              <Text style={tw.style('text-center text-gray-600')}>PRIMEROS AUXILIOS</Text>
            </TouchableOpacity>
          </View>
          <View style={tw.style('flex-1 -mt-10 justify-center items-center p-3')}>
            <Image
              source={require('../assets/img/biomedica.png')}
              style={tw.style('h-40 w-40')}
            />
            <Text style={tw.style('text-center p-4 text-gray-500')}>Soporte medico de equipo biomedico</Text>
            <TouchableOpacity
              style={tw.style('bg-blue-200 rounded-xl p-3 mt-8')}
              onPress={() => addDataToFirebase({...data,type:"Biomedico",time:new Date()})}
            >
              <Text style={tw.style('text-center text-gray-600')}>SOPORTE BIOMEDICO</Text>
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
