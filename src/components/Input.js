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
        placeholder="Şehir ara"
      ></TextInput>
      <Ionicons
        style={styles.iconSearch}
        name="search"
        size={40}
        onPress={onPress}
      />
      <Ionicons
        style={styles.iconGetLoc}
        name="location-outline"
        size={40}
        color="white"
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
    width: "75%",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    fontSize: 20,
    right: 20,
  },
  iconSearch: {
    position: "absolute",
    right: 20,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 15,
    alignItems: "center",
  },
  iconGetLoc: {
    left: 20,
  },
});
