import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { categoriesData } from "./mockData/categories.data";
import { taskData } from "./mockData/task.data";

const App = () => {
  return (
    <SafeAreaView>
      <View className="p-3" style={{ gap: 20 }}>
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-3xl font-bold">Hello, Devs</Text>
            <Text className="font-normal">14 tasks devs</Text>
          </View>
          <TouchableOpacity className="bg-white rounded-full p-2">
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>
        {/**Search Bar */}
        <View className="flex flex-row justify-between">
          {/**TextInput Box  */}
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 10,
              padding: 5,
            }}
          />
          {/**FIlter Icon */}
          <View className="bg-[#F0522F] p-2 rounded-xl">
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
