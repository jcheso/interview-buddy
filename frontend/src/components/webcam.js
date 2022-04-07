import React from "react"
import Webcam from "react-webcam"

const WebcamComponent = React.memo(props => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  }

  const webcamRef = React.useRef(null)
  const mediaRecorderRef = React.useRef(null)
  const [capturing, setCapturing] = React.useState(false)
  const [recordedChunks, setRecordedChunks] = React.useState([])

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true)
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    })
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    )
    mediaRecorderRef.current.start()
  }, [webcamRef, setCapturing, mediaRecorderRef])

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks(prev => prev.concat(data))
      }
    },
    [setRecordedChunks]
  )

  const handleStopCaptureClick = React.useCallback(() => {
    if (mediaRecorderRef.current.state == "recording") {
      mediaRecorderRef.current.stop()
      setCapturing(false)
    }
  }, [mediaRecorderRef, webcamRef, setCapturing])

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      })
      const url = URL.createObjectURL(blob)
      console.log(recordedChunks)
      console.log(blob)
      console.log(typeof url)
      props.setBlob(blob)
      //set blob in state
      props.setVideoUrl(url)

      setRecordedChunks([])

      props.setCount(0)
    }
  }, [recordedChunks])

  React.useEffect(() => {
    if (props.count === 2) {
      handleStartCaptureClick()
    }
    if (props.count === 3) {
      handleStopCaptureClick()
      handleDownload()
    }
  })

  return (
    <div className="rounded-lg overflow-hidden">
      <Webcam muted mirrored={true} audio={true} ref={webcamRef} videoConstraints={videoConstraints}/>
    </div>
  )
})

export default WebcamComponent
