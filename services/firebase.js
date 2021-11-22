import firestore from '@react-native-firebase/firestore'

const data = {
    nombre: 'Oscar Daniel',
    apellidos: 'Ossa Gutierrez',
    hcl: '',
    edad: '20',
    entidad: '',
    procedencia: '',
    alergias: '1',
    ingreso:'',
    hora: '',
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