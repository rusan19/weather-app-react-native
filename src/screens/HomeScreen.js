import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import * as Location from "expo-location";
import WeatherList from "../components/WeatherList";
import { timeConverter } from "../helpers/timeConverter";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedMetod, setSelectedMetod] = useState("today");

  const pressHandler = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f81a4a7ef8a1aeb7d15bb044a60cf60e&units=metric`
      )
      .then((response) => {
        if (response.data.list) return setData(response.data.list);
        setData([]);
      })
      .catch((e) => setData([]));
  };

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location.coords);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherByLocation = async () => {
    console.log("inside");
    await getLocation();
    console.log(location.latitude, location.longitude);
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=f81a4a7ef8a1aeb7d15bb044a60cf60e&units=metric`
      )
      .then((response) => setData(response.data.list));
  };

  const renderWeather = ({ item, index }) => {
    if (!timeConverter(item)) return;
    if (selectedMetod === "today" && index < 8)
      return <WeatherList item={timeConverter(item)} type={selectedMetod} />;
    if (selectedMetod === "daily5") {
      return <WeatherList item={timeConverter(item)} type={selectedMetod} />;
    }
  };

  const daily5Press = () => {
    setSelectedMetod("daily5");
  };
  const todayPress = () => {
    setSelectedMetod("today");
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#1a2980", "#0072ff", "#00c6ff"]}
    >
      <Input
        city={city}
        setCity={setCity}
        onPress={pressHandler}
        onPressLocation={getWeatherByLocation}
      />
      {data.length > 0 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={todayPress}
            activeOpacity={0.9}
            style={[
              styles.button,
              selectedMetod === "today" && {
                borderBottomColor: "white",
                borderBottomWidth: 2,
              },
            ]}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              BUG??N
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedMetod === "daily5" && {
                borderBottomColor: "white",
                borderBottomWidth: 2,
              },
            ]}
            activeOpacity={0.9}
            onPress={daily5Press}
          >
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              5 G??N
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listCntainer}
        data={data}
        renderItem={renderWeather}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
  },
  container: {
    alignItems: "center",
    // backgroundColor: "#085fd8",
    flex: 1,
  },
  listCntainer: {
    alignSelf: "center",
    width: "90%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 195,
    height: 40,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
