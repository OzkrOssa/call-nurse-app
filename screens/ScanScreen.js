import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button } from 'react-native'

const ScanScreen = () => {

    const navigation = useNavigation()
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
            <Text>Scan Screen</Text>
            <Button
                title="See ur Data QR"
                onPress={() => navigation.navigate('ScanData')}
            />
        </View>
    )
}

export default ScanScreen
