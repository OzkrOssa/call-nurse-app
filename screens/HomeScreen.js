/* eslint-disable prettier/prettier */
import React, {useState, Fragment} from 'react';
import {Text, Linking } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import InitialScreen from '../components/InitialScreen';
import ScanDataScreen from './ScanDataScreen';

const HomeScreen = () => {
  const [result, setResult] = useState(null);
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);

  //const navigation = useNavigation();

  const onSuccess = e => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);

    setResult(e);
    setScan(false);
    setScanResult(true);

    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      setResult(e);
      setScan(false);
      setScanResult(true);
    }
  };

  const activeQR = () => {
    setScan(true);
  };
  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  return (
    <>

        {!scan && !scanResult && (

            <InitialScreen
                activeQR={activeQR}
            />
        )}

        {scanResult && (
            <ScanDataScreen
                scanAgain={scanAgain}
                result={result.data}
            />
        )}
        {scan && (
            <QRCodeScanner
                reactivate={true}
                showMarker={true}
                onRead={onSuccess}
                topContent={<Text>Please move your camera over the QR Code</Text>}
            />
        )}

    </>
  );
};
export default HomeScreen;
