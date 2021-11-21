import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'

const MenuScreen = ({route}) => {
    const { result }= route.params
    const data = JSON.parse(result)
    return (
        <View style={tw.style('flex-1 justify-center items-center')}>
            <View style={tw.style('m-2 text-justify flex-col')}>
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
          <Text style={tw.style('text-center')}>{data.edad ? 'Activo' : 'Inactivo'}</Text>
        </View>

        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Habitacion: </Text>
          <Text style={tw.style('text-center')}>{data.cuarto}</Text>
        </View>
      
        <View style={tw.style('flex-row')}>
          <Text style={tw.style('text-center font-bold')}>Alergias a medicamentos:</Text>
        </View>
        
        {data.alergia_medicamentos.map(medicamento => (
          <Text key={medicamento} style={tw.style('text-left mt-1')}> - {medicamento}</Text>
        ))}
      </View>
        </View>

    )
}

export default MenuScreen
