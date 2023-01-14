import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GetWeatherImg from "../utils/GetWeatherImg";

const WeatherList = ({ item }) => {
  return (
    <View  style={styles.renderContainer}>
      <Text style={styles.dateText}>{item.dt_txt}</Text>
      <GetWeatherImg img={item.weather[0].icon} />
      <Text style={styles.temp}>{Math.floor(item.main.temp)}°</Text>
      <Text style={styles.description}>{item.weather[0].description}</Text>
    </View>
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  renderContainer: {
    borderColor: "#eaeaea",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  dateText: {
    fontSize: 18,
    margin: 5,
    fontWeight: "bold",
    top:45
  },
  temp:{
    position:'absolute',
    right:20,
    top:45,
    fontSize:25,
  },
  description:{
    left:20,
    bottom:15,
    fontSize:15
  }
 
});
