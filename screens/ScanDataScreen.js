import {useNavigation} from '@react-navigation/core';
import React,{useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import firestore from '@react-native-firebase/firestore';



const ScanDataScreen = ({scanAgain, result}) => {
  const navigation = useNavigation();
  const data = JSON.parse(result);

  useEffect(() => {
    firestore()
  .collection('Pacientes')
  .add({
    name: 'adad',
    age: 30,
  })
  .then(() => {
    console.log('User added!');
  });
  }, []);

  return (
    <View style={tw.style('flex-1 justify-center items-center')}>
      {/* Datos del QR Code   */}
      <View style={tw.style('m-2')}>
        <Text style={tw.style('text-center m-5 text-4xl')}>Datos</Text>
        <Text style={tw.style('text-center')}>Nombre: {data.nombre}</Text>
        <Text style={tw.style('text-center')}>Apellido: {data.apellido}</Text>
        <Text style={tw.style('text-center')}>Edad: {data.edad}</Text>
        <Text style={tw.style('text-center')}>Estado: {data.activo}</Text>
        <Text style={tw.style('text-center')}>
          Cuarto:{data.cuarto}, Cama: {data.cama}
        </Text>
        <Text style={tw.style('text-center')}>Alergias a medicamentos:</Text>
        {data.alergia_medicamentos.map(medicamento => (
          <Text style={tw.style('text-center')}>* {medicamento}</Text>
        ))}
      </View>
      {/*End Datos del QR Code   */}

      {/* Botones */}
      <View style={tw`flex-row p-16`}>
        <View style={tw.style('mr-9')}>
          <TouchableOpacity
            onPress={scanAgain}
            style={tw`bg-green-500 p-3 rounded-sm rounded-full`}>
            <View>
              <Text style={tw`text-center text-white`}>Scanea de Nuevo</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Menu',{result: result})}
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
