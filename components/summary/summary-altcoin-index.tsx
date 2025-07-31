import { useMemo, useState } from "react"
import { Text, View } from "react-native"
import SegmentedLine from "../charts/segmented-line"

const SummaryAltcoinIndex = ({ value }: { value: number }) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const segments = useMemo(() => {
    return [
      { start: 0, end: 0.25, color: "#E88B3B" },
      { start: 0.25, end: 0.5, color: "#E7D1C2" },
      { start: 0.5, end: 0.75, color: "#AABBEB" },
      { start: 0.75, end: 1, color: "#3956F3" },
      // { start: 0.75, end: 1, color: "#FFFFFF" },
    ]
  }, [])

  return (
    <View className="gap-y-1 pr-1.5">
      <View className="flex flex-row items-center">
        <Text className="text-white text-base font-semibold">{value}</Text>
        <Text className="text-secondary text-base font-semibold">/100</Text>
      </View>

      <View className="flex h-4 " onLayout={({ nativeEvent }) => setSize(nativeEvent.layout)}>
        <SegmentedLine segments={segments} size={size} thumbPosition={value / 100} />
      </View>
    </View>
  )
}

export default SummaryAltcoinIndex
