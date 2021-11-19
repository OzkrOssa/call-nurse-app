import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const ScanDataScreen = ({scanAgain, result}) => {
  const navigation = useNavigation();
  const data = JSON.parse(result);
  console.log(data.members);
  return (
    <View style={tw.style('flex-1 justify-center items-center')}>
      {/* Datos del QR Code   */}
      <View style={tw.style('m-2')}>
        <Text style={tw.style('text-center m-5 text-4xl')}>Data</Text>
        <Text style={tw.style('text-center')}>{result}</Text>
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
          onPress={() => navigation.navigate('Menu', {result: result})}
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
