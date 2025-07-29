import React from "react";
import { FlatList, Text, View } from "react-native";

type Props = {
    Data: any[]
}

const TableOfItems = ({ Data }: Props) => {
    const renderItem = ({ item }: { item: any }) => (
        <View className=" flex-row justify-between p-4 border-b border-gray-300">
            <Text className="text-base text-gray-800">{item.id}</Text>
            <Text className="text-base text-gray-800">{item.name}</Text>
        </View>
    );
    return(
        <View>
                <View className="flex-row justify-between p-2 bg-gray-200">
        <Text className="font-bold">ID</Text>
        <Text className="font-bold">Name</Text>
        </View>
        <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />

        </View>

    )

}

export default TableOfItems