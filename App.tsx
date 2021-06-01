import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Screen from './src/screens/screen';

export default function App() {
    return (
      <SafeAreaProvider>
        <Screen />
      </SafeAreaProvider>
    );
}
