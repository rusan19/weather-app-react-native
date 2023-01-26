import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GetWeatherImg from "../utils/GetWeatherImg";
import moment from "moment";
import LottieView from "lottie-react-native";

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
  // console.log(item);

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
      {
        // <LottieView
        //   style={[styles.anim, type === "daily5" && styles.anim5]}
        //   source={require(`../../assets/weather/f.json`)}
        //   autoPlay
        // />
      }
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
        Rüzgar: {(item.wind.speed * 3.6).toString().substring(0, 4)} km/s. 💨
      </Text>
      <Text style={[styles.feels5, type === "today" && styles.feels]}>
        Hissedilen: {Math.floor(item.main.feels_like)}°
      </Text>
      <Text style={[styles.night5, type === "today" && styles.night]}>
        Gece: 1°↓
      </Text>
      <Text style={[styles.morning5, type === "today" && styles.morning]}>
        Gündüz: 15°↑
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
    top: 10,
    fontSize: 24,
    color: "white",
    right: -100,
    fontWeight: "bold",
  },
  feels5: {
    top: -1000,
  },
  nem: {
    top: 176,
    color: "white",
    left: 100,
    fontSize: 24,
    fontWeight: "bold",
  },
  nem5: {
    top: -1000,
  },
  ruzgar: {
    top: 177,
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
  night: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    top: 12,
    left: 100,
  },
  night5: {},
  morning: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    top: 13,
    left: 100,
  },
  morning5: {},
  anim: {
    top: -20,
    right: 100,
  },
});
