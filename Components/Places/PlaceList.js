import { FlatList, View, StyleSheet,Text } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../Constants/Colors";

function PlaceList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Places added yet!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem data={item} />}
    />
  );
}

export default PlaceList;
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color:Colors.primary200
  },
});
