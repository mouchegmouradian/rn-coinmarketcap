import { Text, View } from "react-native"

const SummaryItem = ({
  className,
  title,
  children,
}: {
  className?: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <View className={`flex flex-col gap-y-1 px-2.5 ${className}`}>
      <Text className="text-secondary text-xs font-normal">{title}</Text>
      {children}
    </View>
  )
}

export default SummaryItem
