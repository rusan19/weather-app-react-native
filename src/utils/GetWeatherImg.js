import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const GetWeatherImg = ({ img }) => {
  return (
    <View>
      <Image
        style={styles.img}
        source={{ uri: `https://openweathermap.org/img/w/${img}.png` }}
      />
    </View>
  );
};

export default GetWeatherImg;

const styles = StyleSheet.create({
  img: {
    width: 75,
    height: 75,
    left:230,
    bottom:5
  },
});
