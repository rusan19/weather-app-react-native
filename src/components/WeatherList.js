import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GetWeatherImg from "../utils/GetWeatherImg";
import moment from "moment";

const WeatherList = ({ item, type = "today" }) => {
  const numberToDay = {
    1: "Pazar",
    2: "Pazartesi",
    3: "Salı",
    4: "Çarşamba",
    5: "Perşembe",
    6: "Cuma",
    7: "Cumartesi",
  };

  const numberToMonth = {
    0: "Ocak",
    1: "Şubat",
  };

  return (
    <View
      style={[
        styles.renderContainer,
        type === "daily5" && styles.daily5Container,
      ]}
    >
      <Text
        style={[styles.dateText, type === "daily5" && styles.dateText5]}
      >{`${numberToDay[moment(item.dt_txt).isoWeekday()]} ${
        numberToMonth[moment(item.dt_txt).month()]
      } ${moment(item.dt_txt).date()}`}</Text>
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
    marginVertical: 5,
    height: 470,
    backgroundColor: "transparent",
  },
  daily5Container: {
    height: 100,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  dateText: {
    position: "absolute",
    top: 5,
    left: 5,
    fontSize: 30,
    margin: 5,
    fontWeight: "bold",
    color: "white",
  },
  temp: {
    position: "absolute",
    right: 20,
    top: 45,
    fontSize: 25,
    color: "white",
  },
  description: {
    left: 20,
    bottom: 15,
    fontSize: 15,
    color: "white",
  },
  dateText5: {
    fontSize: 18,
  },
});
