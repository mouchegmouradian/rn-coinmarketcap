import { Image, Text, View } from "react-native"

import { icons } from "@/constants/icons"

const SummaryBasicInfo = ({
  value,
  percentageChange,
}: {
  value: string
  percentageChange: number
}) => {
  return (
    <>
      <Text className="text-white text-base font-semibold">{value}</Text>
      <View className="flex flex-row items-center gap-x-1">
        <Image
          source={icons.caretDown}
          className={`size-2.5 ${percentageChange > 0 ? "rotate-180" : ""}`}
          tintColor={percentageChange > 0 ? "#16C784" : "#EA3943"}
        />
        <Text
          className={`text-xs h-4 font-medium ${percentageChange > 0 ? "text-cmc-green" : "text-cmc-red"}`}>
          {Math.abs(percentageChange)}%
        </Text>
      </View>
    </>
  )
}

export default SummaryBasicInfo
