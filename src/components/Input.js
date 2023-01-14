import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Input = ({ city, setCity, onPress = () => {}, onPressLocation }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={city}
        style={styles.input}
        onChangeText={setCity}
        placeholder="Search City"
      ></TextInput>
      <Ionicons
        style={styles.iconSearch}
        name="search"
        size={35}
        onPress={onPress}
      />
      <Ionicons
        style={styles.iconGetLoc}
        name="location"
        size={40}
        onPress={onPressLocation}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "#eaeaea",
    width: "85%",
    borderColor: "black",
    borderWidth:1 ,
    padding: 5,
    borderRadius: 10,
    marginRight: 5,
    marginLeft:5,
    fontSize:20
  },
  iconSearch: {
    position: "absolute",
    right: 50,
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
});
