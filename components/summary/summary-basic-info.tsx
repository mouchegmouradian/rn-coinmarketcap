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
    <View>
      <Text className="text-white text-base font-semibold">{value}</Text>
      <View className="flex flex-row items-center gap-x-1">
        <Image
          source={icons.caretDown}
          className={`size-3 ${percentageChange > 0 ? "rotate-180" : ""}`}
          tintColor={percentageChange > 0 ? "#16C784" : "#EA3943"}
        />
        <Text
          className={`text-sm font-medium ${percentageChange > 0 ? "text-cmc-green" : "text-cmc-red"}`}>
          {Math.abs(percentageChange)}%
        </Text>
      </View>
    </View>
  )
}

export default SummaryBasicInfo
