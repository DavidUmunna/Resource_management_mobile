import React, { useState } from "react"
import { Button, View } from "react-native"

type Props={
    InitialNumber:number
}

const ClickAdd=({InitialNumber}:Props)=>{
    const [Number,setNumber]=useState(InitialNumber)
    const handleClick=()=>{
       setNumber(Number+1)
    }
    return (
        <>
            <View className="bg-indigo-500 rounded-lg">
                <Button 
                    title={Number.toString()}
                    onPress={()=>handleClick()}
                />                
            </View>

        </>
    )
}

export default ClickAdd