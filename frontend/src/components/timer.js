import * as React from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const CountdownComponent = (props) => {
  return (
    <CountdownCircleTimer
      isPlaying
      size={60}
      strokeWidth={5}
      duration={props.duration}
      colors={['#089e2d', '#dbd814', '#ff0b03']}
      colorsTime={[60, 15, 0]}
      onComplete={() => {
        props.setCount(props.count+1)
      }}
    >
      {({ remainingTime }) => remainingTime }
    </CountdownCircleTimer>
  )
}

export default CountdownComponent
