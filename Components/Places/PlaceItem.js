import { View, Pressable, Text, Image, StyleSheet } from "react-native";

function PlaceItem({ data, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: data.imageUrl }} />
      <View>
        <Text>{data.title}</Text>
        <Text>{data.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({});
