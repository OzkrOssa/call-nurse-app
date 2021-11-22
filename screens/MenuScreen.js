import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Image
        source={require('../assets/img/emergency.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>PRESIONE PARA EMERGENCIA.</Text>
      <Button
        title="EMERGENCIA"
        color="#c20114"
        onPress={() => Alert.alert('Solicitud EMERGENCIA enviada')}
      />
    </View>
    <Separator />
    <View style={styles.container}>
      <Image
        source={require('../assets/img/Primeros-auxilios.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Presione si desea asistencia de enfermería, canalizaciónes, curaciones o
        movilidad del paciente
      </Text>
      <Button
        title="Primeros Auxilios"
        color="#c7d6d5"
        onPress={() => Alert.alert('Solicitud Enviada')}
      />
    </View>
    <Separator />
    <View style={styles.container}>
      <Image
        source={require('../assets/img/biomedica.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Para soporte técnico de equipo biomédico presione este botón.
      </Text>
      <Button
        title="Soporte BIOMEDICA"
        color="#14213d"
        onPress={() => Alert.alert('Llamando a servicio Técnico')}
      />
    </View>
    <Separator />
    
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 3,
    marginHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    borderRadius: 70,
    resizeMode: 'cover',
    width: 180,
    height: 120,
    
  },
});

export default App;
