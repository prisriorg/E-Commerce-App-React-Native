import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type ItemCardProps = {
  image: string;
  name: string;
  description: string;
  price: string | number;
};

export default function ItemCardFull({
  image,
  description,
  name,
  price,
}: ItemCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        <Text style={styles.itemPrice}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    // shadowColor: "#000",
    // shadowRadius: 4,
    // elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    paddingLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#777",
  },
  itemDescription: {
    fontSize: 14,
    color: "#777",
  },
});
