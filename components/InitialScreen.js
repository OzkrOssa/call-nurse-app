/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';

const InitialScreen = ({activeQR}) => {
  return (
    <View style={tw.style('flex-1 justify-center items-center')}>
      <View style={tw.style('flex-1 justify-center items-center')}>
        <Image
          source={require('../assets/img/call-nourse-nbg.png')}
        />
      </View>
      <Text style={tw`font-semibold text-2xl`}>Scanea el codigo de la cama</Text>
      <View style={tw`flex-row p-20`}>
        <View style={tw.style('')}>
          <TouchableOpacity
            onPress={activeQR}
            style={tw`bg-blue-500 p-5 rounded-sm rounded-full`}>
            <Text style={tw`text-center text-white text-base`}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InitialScreen;
