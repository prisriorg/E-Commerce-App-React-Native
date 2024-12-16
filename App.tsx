import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
export default function App() {
  const [data, setData] = useState<{ id: number; title: string }[]>([]);
  const [colorList, setColorList] = useState<string[]>([
    "aqua",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "orange",
    "purple",
    "red",
    "silver",
    "teal",
    "yellow",
  ]);
  const loadData = async () => {
    const dad = data;
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data2 = await response.json();
    setData(data2);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item) => {
          const cc = Math.round(Math.random() * colorList.length - 1);
          const color = item.id % 2 === 0 ? "red" : "blue";
          return (
            <View
              key={item.id}
              style={{
                backgroundColor: colorList[cc],
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 8,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
              }}
            >
              <Text style={{ color: color, fontSize: 20, fontWeight: "bold" }}>
                {item.id}
              </Text>
              <Ionicons name={"warning"} size={40} />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 8,
          position: "absolute",
          bottom: 10,
        }}
        onPress={() => loadData()}
        >
        <Text style={{ color: "white" }}>Load Data</Text>
        </Pressable>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
