// App.tsx or App.js
import { TailwindProvider } from 'tailwindcss-react-native';
import MainApp from './App';
import React from 'react';

export default function App() {
  return (
    <TailwindProvider>
      <MainApp name="Chima" baseEnthusiasmLevel={1} />
    </TailwindProvider>
  );
}
