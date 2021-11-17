import React, { useState, Fragment} from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import useScan from '../hooks/useScan';

const ScanScreen = () => {

    const {setResult}= useScan()
    const [scan, setScan] = useState(false);
    const [scanResult, setScanResult] = useState(false);



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
            <View>
                <Fragment>
                    {!scan && !scanResult &&
                        <View>
                            <Text>Please move your camera {"\n"} over the QR Code</Text>
                            <TouchableOpacity onPress={activeQR}>
                                <View>
                                <Text>Scan QR Code</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }

                    {scanResult &&
                        <Fragment>
                            <Text>Result</Text>
                            <View>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={scanAgain}>
                                    <View>
                                        <Text>Click to scan again</Text>
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
                                   Please move your camera {"\n"} over the QR Code
                                </Text>
                            }
                        />
                    }
                </Fragment>
            </View>
        );
}
export default ScanScreen;

