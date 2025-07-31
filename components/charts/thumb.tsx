import { Circle, SkPoint } from "@shopify/react-native-skia"

type ThumbProps = {
  center: SkPoint
  radius: number
  color?: string
  strokeColor?: string
  strokeWidth: number
}

export default function Thumb({
  center,
  radius,
  color = "#283337",
  strokeColor = "#8E95B2",
  strokeWidth,
}: ThumbProps) {
  return (
    <>
      <Circle cx={center.x} cy={center.y} r={radius} color={strokeColor} />
      <Circle
        cx={center.x}
        cy={center.y}
        r={radius - strokeWidth / 2}
        strokeWidth={strokeWidth}
        color={color}
      />
    </>
  )
}
