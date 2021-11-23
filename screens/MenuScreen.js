import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import tw from 'twrnc';
import Asistencia from '../components/menu/Asistencia';
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
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
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
