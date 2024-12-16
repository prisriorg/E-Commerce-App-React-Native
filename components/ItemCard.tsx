import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
type ItemCardProps = {
  image: string;
  name: string;
  price: string | number;
};

export default function ItemCard({ image, name, price }: ItemCardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemPrice}>${price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    alignItems:'flex-start',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 25,
    marginBottom: 10,
  },
  textContainer: {
    // alignItems: 'left',
    paddingLeft: 15,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#777',
    marginBottom: 10,
  },
});
