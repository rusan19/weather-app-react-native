import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import { timestamp } from "../utils/timestamp-converter";
import WeatherList from "../components/WeatherList";
const HomeScreen = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const pressHandler = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f81a4a7ef8a1aeb7d15bb044a60cf60e&units=metric`
      )
      .then((response) => setData(response.data.list))
      .catch((e) => console.log(e));
    //console.log(data);
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };
  const getWeatherByLocation = async () => {
    await getLocation();
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=f81a4a7ef8a1aeb7d15bb044a60cf60e&units=metric`
      )
      .then((response) => setData(response.data.list));
  };
  const renderWeather = ({ item, index }) => {
    //console.log(item);
    return <WeatherList item={item} />;
  };
  return (
    <View style={styles.container}>
      <Input
        city={city}
        setCity={setCity}
        onPress={pressHandler}
        onPressLocation={getWeatherByLocation}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listCntainer}
        data={data}
        renderItem={renderWeather}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
  },
  container: {
    alignItems: "center",
  },
  listCntainer: {
    alignSelf: "center",
    width: "90%",
  },
});
