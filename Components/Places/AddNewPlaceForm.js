import { useState } from "react";
import { View, Text, ScrollView, TextInput,StyleSheet } from "react-native";
import { Colors } from "../../Constants/Colors";
import ImagePicker from "../ImagePicker";


function AddNewPlaceForm() {
  const [enterdTitle, setEnteredTitle] = useState("");
  function titleChangeHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={titleChangeHandler} value={enterdTitle} />
      </View>
      <ImagePicker/>
    </ScrollView>
  );
}

export default AddNewPlaceForm;

const styles= StyleSheet.create({
    form:{
        flex:1,
        padding:24,
    },
    label:{
        fontWeight:'bold',
        marginBottom:4,
        color:Colors.primary500
    },
    input:{
        marginVertical:8,
        paddingVertical:8,
        paddingHorizontal:4,
        fontSize:16,
        borderBottomColor:Colors.primary700,
        backgroundColor:Colors.primary100,
        borderBottomWidth:2
    }
})