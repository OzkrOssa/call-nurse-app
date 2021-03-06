import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';



const ScanDataScreen = ({scanAgain, result}) => {

  const navigation = useNavigation();
  const data = JSON.parse(result)
  console.log(typeof data)

  return (
    <View style={tw.style('flex-1 justify-center items-center')}>
      {/* Datos del QR Code   */}
      <View>
          <Image
          source={require('../assets/img/check-r.png')}
          style={tw.style('w-40 h-40')}
          />
      </View>
      <View style={tw.style('m-2 text-justify flex-col')}>
        <Text style={tw.style('text-center m-5 text-3xl font-semibold')}>BIENVENIDO</Text>
        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Nombre: </Text>
          <Text style={tw.style('text-center')}>{data.nombre}</Text>
        </View>
        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Apellido: </Text>
          <Text style={tw.style('text-center')}>{data.apellido}</Text>
        </View>

        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Edad: </Text>
          <Text style={tw.style('text-center')}>{data.edad}</Text>
        </View>

        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Estado: </Text>
          <Text style={tw.style('text-center')}>{data.activo=='true' ? 'Activo' : 'Inactivo'}</Text>
        </View>

        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Habitacion: </Text>
          <Text style={tw.style('text-center')}>{data.cuarto}</Text>
        </View>
        
        
        {/* <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Alergias a medicamentos:</Text>
        </View> */}
        {/* <Text style={tw.style('text-center')}>{data.alergia_medicamentos}</Text> */}
        {/* data.alergia_medicamentos.map(medicamento => (
          <Text key={medicamento} style={tw.style('text-left mt-1')}> - {medicamento}</Text>
        )) */}
      </View>
      {/*End Datos del QR Code   */}

      {/* Botones */}
      <View style={tw`flex-row p-16`}>
        <View style={tw.style('mr-9')}>
          <TouchableOpacity
            onPress={scanAgain}
            style={tw`bg-green-500 p-3 rounded-sm rounded-full`}>
            <View>
              <Text style={tw`text-center text-white`}>Escanear de nuevo</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        //
          onPress={() => navigation.navigate('Menu',{ data:data })}
          style={tw`bg-blue-500 p-3 rounded-sm rounded-full`}>
          <View>
            <Text style={tw`text-center text-white mr-6 ml-6`}>Continuar</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* End Botones*/}
    </View>
  );
};

export default ScanDataScreen;
