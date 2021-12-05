import firestore from '@react-native-firebase/firestore'
import {Alert} from 'react-native'

function addDataToFirebase (data){
    firestore()
        .collection('Pacientes')
        .add(data)
        .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
            Alert.alert('Datos enviados con exito', docRef.id)
        })
        .catch(function(error) {
            console.error('Error adding document: ', error);
        });
}

export {addDataToFirebase}