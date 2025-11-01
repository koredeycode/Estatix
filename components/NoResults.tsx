import images from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

const NoResults = () => {
  return (
    <View className="flex items-center justify-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="mt-5 text-2xl font-rubik-bold text-black-300">
        No Results
      </Text>
      <Text className="mt-2 text-base text-black-100">
        We could not find any result
      </Text>
    </View>
  );
};

export default NoResults;
