// App.tsx
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TailwindProvider, useTailwind } from 'tailwindcss-react-native';

type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

function Main({ name, baseEnthusiasmLevel = 0 }: Props) {
  const tailwind = useTailwind();
  const [enthusiasmLevel, setEnthusiasmLevel] = useState(baseEnthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () => setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={tailwind('flex-1 items-center justify-center bg-gray-200 min-h-screen') as import('react-native').ViewStyle}>
      <Text style={tailwind('text-xl font-bold my-4') as import('react-native').TextStyle}>
        Hello {name}
        {getExclamationMarks(enthusiasmLevel)}
      </Text>
      <View style={tailwind('flex-row space-x-2') as import('react-native').ViewStyle}>
        <Button title="Increase" onPress={onIncrement} color="blue" />
        <Button title="Decrease" onPress={onDecrement} color="red" />
      </View>
    </View>
  );
  
}

export default Main


