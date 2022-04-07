import React, {useState, useEffect} from "react"
import CalibrationDot from "./calibrationDot"

const CalibrationCanvas = props => {
    const [numberOfCalibratedDots, setNumberOfCalibratedDots] = useState(0)
    
    useEffect(() => {
        if(numberOfCalibratedDots >= 9) {
            console.log("calibrated")
        }
    }, [numberOfCalibratedDots])

    return (
        <div className="h-full w-full bg-gray-200 relative">
            <div className="w-full text-center absolute top-12">Calibrate gaze tracking by looking at the red dots and then click on the ones you are looking at until they go green.</div>
            <CalibrationDot position="top-2 left-2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="top-2 right-2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="bottom-2 left-2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="bottom-2 right-2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="top-2 inset-x-1/2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="bottom-2 inset-x-1/2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="inset-x-1/2 inset-y-1/2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="right-2 inset-y-1/2 " setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
            <CalibrationDot position="left-2 inset-y-1/2" setCalibration={() => setNumberOfCalibratedDots(numberOfCalibratedDots+1)}/>
        </div>
    )
}

export default CalibrationCanvas