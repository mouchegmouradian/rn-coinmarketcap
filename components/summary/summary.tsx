import { View } from "react-native"

import SummaryBasicInfo from "./summary-basic-info"
import SummaryItem from "./summary-item"

const Separator = () => {
  return <View className="w-px h-full bg-white/10" />
}

const Summary = () => {
  return (
    <View className="flex mx-4">
      <View className="flex-row justify-between bg-white/5 p-2 rounded-2xl w-full h-auto">
        <SummaryItem className="w-1/4 pl-0.5" title="Market Cap">
          <SummaryBasicInfo value="$3.86T" percentageChange={10.52} />
        </SummaryItem>
        <Separator />
        <SummaryItem className="w-1/4" title="CMC100">
          <SummaryBasicInfo value="$1.56T" percentageChange={-10} />
        </SummaryItem>
        <Separator />
        <SummaryItem className="w-1/4" title="Altcoin Index">
          <SummaryBasicInfo value="$1.56T" percentageChange={-10} />
        </SummaryItem>
        <Separator />
        <SummaryItem className="w-1/4" title="Fear & Greed">
          <SummaryBasicInfo value="$1.56T" percentageChange={-10} />
        </SummaryItem>
      </View>
    </View>
  )
}

export default Summary
