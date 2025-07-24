import Summary from "@/components/summary/summary"
import { icons } from "@/constants/icons"
import { router } from "expo-router"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"

const Header = () => {
  return (
    <View className="flex-row pt-4 pb-4 px-4 justify-between">
      <View>
        <Text className="text-white text-2xl font-bold">Markets</Text>
      </View>
      <View className="flex-row gap-4 items-center justify-end">
        <TouchableOpacity
          onPress={() => {
            router.push("/diamonds")
          }}>
          <Image source={icons.diamond} className="size-6" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/search")
          }}>
          <Image source={icons.search} className="size-6" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/search")
          }}>
          <Image source={icons.profile} className="size-10" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="flex-1">
        <Header />
        <Summary />
      </SafeAreaView>
    </View>
  )
}
