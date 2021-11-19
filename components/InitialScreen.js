import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const InitialScreen = ({activeQR}) => {
  return (
    <View style={tw.style('flex-1 justify-center items-center')}>
      <Text style={tw`p-8`}>Please move your camera over the QR Code</Text>
      <View style={tw`flex-row p-7`}>
        <View style={tw.style('mr-9')}>
          <TouchableOpacity
            onPress={activeQR}
            style={tw`bg-blue-500 p-3 rounded-sm rounded-full`}>
            <Text style={tw`text-center text-white`}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={activeQR}
          style={tw`bg-blue-500 p-3 rounded-sm rounded-full`}>
          <Text style={tw`text-center text-white`}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitialScreen;
