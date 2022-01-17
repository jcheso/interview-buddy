import * as React from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

const CountdownComponent = props => {
  return (
    <CountdownCircleTimer
      isPlaying
      size={80}
      strokeWidth={6}
      duration={props.duration}
      colors={["#089e2d", "#dbd814", "#ff0b03"]}
      colorsTime={[60, 15, 0]}
      onComplete={() => {
        props.setCount(props.count + 1)
        props.count === 1 ? props.setRecording(true) : props.setRecording(false)
      }}
    >
      {({ remainingTime }) => (
        <p className="text-4xl text-gray-400">{remainingTime}</p>
      )}
    </CountdownCircleTimer>
  )
}

export default CountdownComponent
