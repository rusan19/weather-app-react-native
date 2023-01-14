import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GetWeatherImg from "../utils/GetWeatherImg";
import moment from "moment";

const WeatherList = ({ item, type = "today" }) => {
  const numberToDay = {
    1: "Pazartesi",
    2: "Salı",
    3: "Çarşamba",
    4: "Perşembe",
    5: "Cuma",
    6: "Cumartesi",
    7: "Pazar",
  };

  const numberToMonth = {
    0: "Ocak",
    1: "Şubat",
  };

  const nameWeather = {
    "overcast clouds": "Kapalı hava",
    "broken clouds": "Kapalı hava",
    "clear sky": "Güneşli",
    "few clouds": "Az bulutlu",
  };

  console.log(item.weather[0].description);
  return (
    <View
      style={[
        styles.renderContainer,
        type === "daily5" && styles.daily5Container,
      ]}
    >
      <Text
        style={[styles.dateText, type === "daily5" && styles.dateText5]}
      >{`${numberToDay[moment(item.dt_txt).isoWeekday()]}, ${
        numberToMonth[moment(item.dt_txt).month()]
      } ${moment(item.dt_txt).date()}`}</Text>
      <GetWeatherImg img={item.weather[0].icon} type={type} />
      <Text style={[styles.temp, type === "daily5" && styles.temp5]}>
        {Math.floor(item.main.temp)}°
      </Text>
      <Text
        style={[styles.description, type === "daily5" && styles.description5]}
      >
        {nameWeather[item.weather[0].description]}
      </Text>
    </View>
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  renderContainer: {
    borderColor: "#eaeaea",
    borderWidth: 0,
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
    top: 20,
    left: 5,
    fontSize: 20,
    margin: 5,
    fontWeight: "bold",
    color: "white",
  },
  temp: {
    position: "absolute",
    right: 20,
    top: 110,
    fontSize: 100,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    top: 75,
    left: 10,
    bottom: 15,
    fontSize: 20,
    color: "white",
  },
  dateText5: {
    fontSize: 20,
  },
  temp5: {
    top: 25,
    position: "absolute",
    fontSize: 30,
    left: 255,
    fontWeight: "bold",
    marginLeft: 0,
  },
  description5: {
    top: -25,
    left: 10,
    fontSize: 20,
  },
});
