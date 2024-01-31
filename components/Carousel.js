import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80",
    "https://i.pinimg.com/236x/57/f0/a2/57f0a2871b63debc46990c52ebbeddea.jpg",
    "https://png.pngitem.com/pimgs/s/186-1865963_2017-ford-gt-horsepower-hd-png-download.png",
  ];

  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
            borderRadius:6,
            width:"94%"
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});