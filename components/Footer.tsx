import { Dimensions, FlatList, Platform, Text, View } from "react-native";
import React, { Component } from "react";
import ItemCard from "./ItemCard";
import ItemCardFull from "./ItemCardFull";
import SliderCards from "./SliderCards";

export default function Footer() {
  type Item = {
    id: string;
    image: string;
    name: string;
    description: string;
    price: string | number;
  };
  const items: Item[] = [
    {
      id: "1",
      image: "https://via.placeholder.com/150",
      name: "Item 1",
      description: "hello the laver jdfgf fsj onnk ",
      price: 19.99,
    },
    {
      id: "2",
      image: "https://via.placeholder.com/150",
      name: "Item 2",
      description: "hello the",
      price: 29.99,
    },
    {
      id: "3",
      image: "https://via.placeholder.com/150",
      name: "Item 3",
      description: "hello the",
      price: 39.99,
    },
    {
      id: "4",
      image: "https://via.placeholder.com/150",
      name: "Item 4",
      description: "hello the new lounce",
      price: 49.99,
    },
    {
      id: "5",
      image: "https://via.placeholder.com/150",
      name: "Item 5",
      description: "hello the",
      price: 59.99,
    },
  ];
  return (
    <SliderCards />
    // <FlatList
    //   data={items}
    //   keyExtractor={(item) => item.id}
    //   renderItem={({ item }) => (
    //     <View style={{
    //         flex: 1,
    //         margin: 5,
    //       }}>
    //       <ItemCardFull
    //         image={item.image}
    //         name={item.name}
    //         description={item.description}
    //         price={item.price}
    //       />
    //     </View>
    //   )}
    //   contentContainerStyle={{
    //     padding: 10,
    //   }}
    // />
  );
}
