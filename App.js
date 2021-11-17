import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import { ScanProvider } from './hooks/useScan';


const App = () => {
  return (
    <NavigationContainer>
      <ScanProvider>
          <StackNavigation/>
      </ScanProvider>
    </NavigationContainer>
  )
}

export default App
