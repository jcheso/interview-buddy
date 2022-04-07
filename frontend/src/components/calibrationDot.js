import React, {useState, useEffect} from 'react'

const CalibrationDot = props => {
    const [count , setCount] = useState(0)

    const dotColor = count < 5 ? ' bg-red-400 ' : ' bg-green-400 '

    useEffect(() => {
        if(count >= 5) {
            props.setCalibration()
        }
    }, [count])

    return (
        <div onClick={() => setCount(count+1)} className={"bg-red-400 absolute w-4 h-4 rounded-full" + dotColor + props.position}></div>
    )
}

export default CalibrationDot