import React from 'react'
import { View, Text } from 'react-native'
import useScan from '../hooks/useScan'

const ScanDataScreen = () => {
    const {result} = useScan()
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}} >
            <Text>
                {result}
            </Text>
        </View>
    )
}

export default ScanDataScreen
