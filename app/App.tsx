import ClickAdd from "@/components/ClickAdd";
import TableOfItems from "@/components/TableOfItems";
import useToggle from "@/hooks/useToggle";
import React from "react";
import { Button, SafeAreaView, Text, View } from 'react-native';
import MyText from "../components/MyText";
const App=()=>{
  const [isvisible,setisvisible]=useToggle()
  return(

    <SafeAreaView className="bg-gray-300 flex-1">
      <View  className=" flex-1 justify-between mt-7 ">

      <View className="bg-gray-300 items-center p-6">

      <Text className="text-red-900 font-serif">Resource Management</Text>
      </View> 
      <View>
        <TableOfItems Data={[{id:1,name:'paul'},{id:2,name:'Ben'},{id:3,name:'Yena'}]}/>
      </View>
      <View className="w-1/3 p-2 bg-blue-400 rounded-lg  self-center " >

      <MyText/>
      </View>
      <View className=" w-1/3 self-center">
      <Button
      title="Toggle button"
      onPress={setisvisible}
      />
      </View>
{isvisible&&(

  <View className="w-1/3 rounded-md self-end">
        <ClickAdd InitialNumber={15}/>
      </View>
      )
}
      </View>
    </SafeAreaView>
  );
};
export default App;