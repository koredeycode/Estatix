import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="rounded-full size-12" />
            <View className="flex flex-col items-start justify-center ml-2">
              <Text className="text-xs font-rubic text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Yusuf
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  );
}
