import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const GetWeatherImg = ({ img, type }) => {
  img = img.replace("n", "d");
  return (
    <View>
      <Image
        style={[styles.img, type === "daily5" && styles.img5]}
        source={{ uri: `https://openweathermap.org/img/w/${img}.png` }}
      />
    </View>
  );
};

export default GetWeatherImg;

const styles = StyleSheet.create({
  img: {
    top: 105,
    width: 150,
    height: 150,
    right: 10,
    bottom: 5,
  },
  img5: {
    width: 80,
    height: 80,
    top: 10,
    left: 295,
  },
});
