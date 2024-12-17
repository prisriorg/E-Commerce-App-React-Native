import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCardFull from "../../components/ItemCardFull";
import { useEffect, useState } from "react";

export default function Tab() {
  const [data, setData] = useState<
    {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      images: string[];
      thumbnail: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Fetching data...");
    // Fetch data from API
    fetch("https://dummyjson.com/products?limit=20", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data:any) => {
        setData(data.products);
        setLoading(false);
      });
      console.log("Data fetched!");
  }, []);
  return loading ? (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <SafeAreaView style={{flex:1}}> 
        
      <FlatList
        data={data}
        keyExtractor={(item) => "key" + item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              margin: 5,
            }}
          >
            <ItemCardFull
              image={item.thumbnail}
              name={item.title.slice(0, 30)}
              description={item.description.slice(0, 100)}
              price={item.price}
            />
          </View>
        )}
        contentContainerStyle={{
          padding: 10,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
