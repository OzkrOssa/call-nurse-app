import { useNavigation } from '@react-navigation/core';
import React, { useState, Fragment} from 'react';
import { TouchableOpacity, Text, Linking, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import tw from 'tailwind-rn'

const HomeScreen = ({navigation}) => {

    const [result, setResult] = useState(null)
    const [scan, setScan] = useState(false);
    const [scanResult, setScanResult] = useState(false);

    //const navigation = useNavigation();



    const onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);

        setResult(e)
        setScan(false);
        setScanResult(true);

        if (check === 'http') {
            Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } else {
            setResult(e)
            setScan(false);
            setScanResult(true);
        }
    }


    const activeQR = () => {
        setScan(true);
    }
    const scanAgain = () => {
        setScan(true);
        setScanResult(false);
    }


        return (
            <View style={tw('flex-1 justify-center items-center')}>
                <Fragment>
                    {!scan && !scanResult &&
                        <View>
                            <Text style={tw('p-3')}>Please move your camera over the QR Code</Text>
                            <TouchableOpacity
                                onPress={activeQR}
                                style={tw('bg-blue-500 p-3 rounded-sm rounded-full')}
                                >
                                
                                <Text style = {tw('text-center text-white')}>Scan QR Code</Text>
                                
                            </TouchableOpacity>
                        </View>
                    }

                    {scanResult &&
                        <Fragment>
                            <Text>Result</Text>
                            <View>
                                
                                <Text>Result : {result.data}</Text>
    
                                <TouchableOpacity 
                                    onPress={scanAgain}
                                    style={tw('bg-green-500 p-3 rounded-sm rounded-full')}    
                                    >
                                    <View>
                                        <Text>Click to scan again</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate("Menu",{result:result.data})}
                                    style={tw('bg-blue-500 p-3 rounded-sm rounded-full')}
                                    >
                                    <View>
                                        <Text
                                            style={tw('text-center text-white')}
                                        >Continue</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                    }
                    {scan &&
                        <QRCodeScanner
                            reactivate={true}
                            showMarker={true}
                            onRead={onSuccess}
                            topContent={
                                <Text>
                                   Please move your camera over the QR Code
                                </Text>
                            }
                        />
                    }
                </Fragment>
            </View>
        );
}
export default HomeScreen;

