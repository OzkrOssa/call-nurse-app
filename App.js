import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import { UserProvider } from './hooks/userContext';


const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
          <StackNavigation/>
      </UserProvider>
    </NavigationContainer>
  )
}

export default App
