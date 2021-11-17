import React from 'react'
import { View, Text } from 'react-native'
import useUserContext from '../hooks/userContext'

const ScanDataScreen = () => {
    const {result} = useUserContext()
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
            <Text>
                {result}
            </Text>
        </View>
    )
}

export default ScanDataScreen
