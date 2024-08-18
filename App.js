import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaceScreen from "./Screens/AllPlaceScreen";
import AddPlaceScreen from "./Screens/AddPlaceScreen";
import IconButton from "./Components/UI/IconButton";
import { Colors } from "./Constants/Colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:Colors.primary500,
          },
          headerTintColor:Colors.gray700,
          contentStyle:{
            backgroundColor:Colors.gray700
          }
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaceScreen}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  iconSize={24}
                  iconColor={tintColor}
                  iconName="add"
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
              title: "All Places",
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlaceScreen} options={{
            title:'Add New Place'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
