import firestore from '@react-native-firebase/firestore'

const data = {
    nombre: 'Oscar Daniel',
    apellido: 'Ossa Gutierrez',
    edad: '20',
    activo: 'true',
    cuarto: '1',
    cama: '1',
    alergia_medicamentos: ['Paracetamol', 'Aspirina'],
}

const addDataToFirebase = () => {
    firestore()
        .collection('Pacientes')
        .add(data)
        .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
            console.error('Error adding document: ', error);
        });
}

export {addDataToFirebase}