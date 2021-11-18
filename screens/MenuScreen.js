import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'

const MenuScreen = ({route}) => {
    const { result }= route.params
    return (
        <View style={tw('flex-1 justify-center items-center')} >
            <Text>
                {result}
            </Text>
        </View>
    )
}

export default MenuScreen
