import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

interface Props {
  onPress?: () => void;
  item: Models.Document;
}

export const FeaturedCard = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative flex flex-col items-start w-60 h-80"
    >
      <Image source={{ uri: image }} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="absolute bottom-0 size-full rounded-2xl"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="ml-1 text-xs font-rubik-bold text-primary-300">
          {rating}
        </Text>
      </View>
      <View className="absolute flex flex-col items-start bottom-5 inset-x-5">
        <Text
          className="text-xl text-white font-rubik-extrabold"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-base text-white font-rubik">{address}</Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl text-white font-rubik-extrabold">
            ${price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative flex-1 w-full px-3 py-4 mt-4 bg-white rounded-lg shadow-lg shadow-black/70"
    >
      <View className="absolute z-50 flex flex-row items-center p-1 px-2 rounded-full top-5 right-5 bg-white/90">
        <Image source={icons.star} className="size-2.5" />
        <Text className="ml-0.5 text-xs font-rubik-bold text-primary-300">
          {rating}
        </Text>
      </View>
      <Image source={{ uri: image }} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text className="text-base text-black-300 font-rubik-bold">{name}</Text>
        <Text className="text-xs text-black-200 font-rubik">{address}</Text>
        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base text-primary-300 font-rubik-bold">
            ${price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
