import { StyleSheet, Text, View, Image } from "react-native";
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
    2: "Mart",
    3: "Nisan,",
    4: "Mayıs",
    5: "Haziran",
    6: "Temmuz",
    7: "Ağustos",
    8: "Eylül",
    9: "Ekim",
    10: "Kasım",
    11: "Aralık",
  };

  const nameWeather = {
    "overcast clouds": "Bulutlu",
    "broken clouds": "Bulutlu",
    "clear sky": "Güneşli",
    "few clouds": "Parçalı Bulutlu",
    "light rain": "Yağışlı",
    "scattered clouds": "Az Bulutlu",
    "shower rain": "Sağanak Yağışlı",
    "moderate rain": "Yağışlı",
    "light snow": "Kar Yağışlı",
    snow: "Kar Yağışlı",
  };

  return (
    <View
      style={[
        styles.renderContainer,
        type === "daily5" && styles.daily5Container,
      ]}
    >
      <Text style={[styles.dateText, type === "daily5" && styles.dateText5]}>
        {`${numberToDay[moment(item.dt_txt).isoWeekday()]}, ${
          numberToMonth[moment(item.dt_txt).month()]
        } ${moment(item.dt_txt).date()}`}
      </Text>
      <Text style={[styles.temp, type === "daily5" && styles.temp5]}>
        {Math.floor(item.main.temp)}°
      </Text>
      <View style={[styles.a, type === "daily5" && styles.a5]}>
        <GetWeatherImg img={item.weather[0].icon} type={type} />
        <Text
          style={[styles.description, type === "daily5" && styles.description5]}
        >
          {nameWeather[item.weather[0].description]}
        </Text>
      </View>
      <Text style={[styles.nem5, type === "today" && styles.nem]}>
        Nem: %{item.main.humidity} 💦
      </Text>
      <Text style={[styles.ruzgar5, type === "today" && styles.ruzgar]}>
        Rüzgar: {(item.wind.speed * 3.6).toString().substring(0, 4)} km/s.💨
      </Text>
      <Text style={[styles.feels5, type === "today" && styles.feels]}>
        Hissedilen: {Math.floor(item.main.feels_like)}°
      </Text>
    </View>
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  renderContainer: {
    borderColor: "#eaeaea",
    borderWidth: 0,
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
    right: 25,
    top: 110,
    fontSize: 80,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    top: 70,
    right: -25,
    fontSize: 22,
    color: "white",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  dateText5: {
    fontSize: 20,
  },
  temp5: {
    top: 25,
    position: "absolute",
    fontSize: 30,
    right: 95,
    fontWeight: "bold",
    marginLeft: 0,
  },
  description5: {
    top: -30,
    fontSize: 20,
    textAlign: "left",
  },
  feels: {
    top: 35,
    fontSize: 24,
    color: "white",
    right: -100,
    fontWeight: "bold",
  },
  feels5: {
    top: -1000,
  },
  nem: {
    top: 140,
    color: "white",
    left: 100,
    fontSize: 24,
    fontWeight: "bold",
  },
  nem5: {
    top: -1000,
  },
  ruzgar: {
    top: 150,
    color: "white",
    left: 100,
    fontSize: 24,
    fontWeight: "bold",
  },
  ruzgar5: {
    top: -1000,
  },
  a: {
    borderWidth: 0,
    width: 100,
    height: 200,
  },
  a5: {
    borderWidth: 0,
    width: 150,
    left: -15,
  },
});
