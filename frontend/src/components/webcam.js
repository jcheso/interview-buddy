import React from "react"
import Webcam from "react-webcam"

const WebcamComponent = React.memo(props => {
  const videoConstraints = {
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
    if(mediaRecorderRef.current.state == "recording") {
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
      const a = document.createElement("a")
      document.body.appendChild(a)
      a.style = "display: none"
      a.href = url
      a.download = "interview-buddy-answer"
      a.click()
      window.URL.revokeObjectURL(url)
      setRecordedChunks([])
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
    <div>
      <Webcam muted mirrored={true} audio={true} ref={webcamRef} />
    </div>
  )
})

export default WebcamComponent
