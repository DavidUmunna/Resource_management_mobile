import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';

const MyText=()=>{
    const [trigger,settrigger]=useState(false)
    const handleClick=()=>{
    Alert.alert("you clicked me what doe you want")
    
    }
    const triggeruseEffect=useCallback(()=>{
        settrigger(!trigger)
    },[trigger])
    useEffect(()=>{
      Alert.alert("the useEffect Hook was activated By this")
    },[trigger])
    return(
        <>
        <Text className='text-white font-bold' onPress={()=>handleClick()}>React Native world</Text>

        <Text className='text-white font-bold p-6 bg-red-700' onPress={()=>triggeruseEffect()}>React Native world</Text>
        </>
        

    )
}

export default MyText;