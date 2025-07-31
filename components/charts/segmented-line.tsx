import { Canvas, RoundedRect } from "@shopify/react-native-skia"
import Thumb from "./thumb"

/**
 * A segment of a segmented line.
 * @property start - The start of the segment as a percentage of the total width.
 * @property end - The end of the segment as a percentage of the total width.
 * @property color - The color of the segment (hex string).
 */
type Segment = {
  start: number // 0-1
  end: number // 0-1
  color: string
}

type SegmentedLineProps = {
  segments: Segment[]
  size: { width: number; height: number }
  thumbPosition?: number
}

/**
 * A segmented line.
 * @property segments - The segments of the line.
 * @property size - The size of the line.
 * @property thumbPosition - The thumb position of the line. Between 0 and 1. If null then no thumb is shown.
 *
 * TODO: validate parameters
 */
const SegmentedLine = ({ segments, size, thumbPosition }: SegmentedLineProps) => {
  const segmentHeight = size.height / 2
  const y = segmentHeight - segmentHeight / 2
  const cornerRadius = segmentHeight / 2

  console.log(size)
  const thumbRadius = size.height / 2.2
  const thumbStrokeWidth = thumbRadius / 1.5
  const thumbX =
    thumbRadius + (thumbPosition !== undefined ? thumbPosition * (size.width - thumbRadius * 2) : 0)
  const thumbY = size.height / 2

  return (
    <Canvas style={{ flex: 1, height: "100%" }}>
      {segments.map((segment, index) => {
        const isFirst = index === 0
        const isLast = index === segments.length - 1

        const start = segment.start * size.width
        const end = segment.end * size.width
        const width = end - start

        return (
          <RoundedRect
            key={index}
            rect={{
              rect: {
                x: start,
                y: y,
                width: width,
                height: segmentHeight,
              },
              topLeft: isFirst ? { x: cornerRadius, y: cornerRadius } : { x: 0, y: 0 },
              topRight: isLast ? { x: cornerRadius, y: cornerRadius } : { x: 0, y: 0 },
              bottomRight: isLast ? { x: cornerRadius, y: cornerRadius } : { x: 0, y: 0 },
              bottomLeft: isFirst ? { x: cornerRadius, y: cornerRadius } : { x: 0, y: 0 },
            }}
            color={segment.color}
          />
        )
      })}

      {thumbPosition !== undefined && (
        <Thumb
          center={{ x: thumbX, y: thumbY }}
          radius={thumbRadius}
          strokeWidth={thumbStrokeWidth}
        />
      )}
    </Canvas>
  )
}

export default SegmentedLine
