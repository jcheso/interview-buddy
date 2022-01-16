import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import WebcamComponent from "../components/webcam"
import CountdownComponent from "../components/timer"

const SecondPage = ({ data }) => {
  const [cameraShown, setCameraShown] = React.useState(false)
  const [questionNumber, setQuestionNumber] = React.useState(0)

  const [count, setCount] =React.useState(0)

  return (
    <Layout>
      <Seo title="Practice" />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 pt-24 pb-6 mx-auto flex flex-wrap">
          <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-white py-4">
            {data.allSanityQuestion.edges[questionNumber].node.question}
          </h1>

          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">Situation</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">Task</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">Action</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">Result</p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Download your video and review your response
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
              {cameraShown ? (
                <WebcamComponent />
              ) : (
                <img src="https://dummyimage.com/800x500" alt="step" />
              )}
              <div className="flex justify-center pt-12">
                <div className="flex justify-center w-1/3">
                  <button
                    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                    onClick={() => setCameraShown(v => !v)}
                  >
                    Enable Camera
                  </button>
                </div>
                {/* On click, make this button turn into a red timer - on time expiry, change button to another 2 min green timer and auto start recording if camera enabled */}

                {
                count != 1 && count != 2 ?
                <div stlyle={{justifyContent:"center"}} className="w-1/3 flex justify-center">
                  <button
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                    onClick={() => {
                      setQuestionNumber(
                        Math.floor(
                          Math.random() * data.allSanityQuestion.edges.length
                        )
                      )
                      setCount(count+1)
                    }}
                  >
                    Start Practice
                  </button>
                </div>
                :
                null
                }
                {
                  count == 1
                  ?
                  <div className="w-1/3 flex justify-center">
                    <CountdownComponent duration={5} setCount={setCount} count={count}/>
                  </div>
                  :
                  null
                }
                {
                  count == 2
                  ?
                  <div className="w-1/3 flex justify-center">
                    <CountdownComponent duration={10} setCount={setCount} count={count}/>
                  </div>
                  :
                  null
                }

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityQuestion {
      edges {
        node {
          question
        }
      }
    }
  }
`

export default SecondPage
