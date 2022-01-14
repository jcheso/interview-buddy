import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import WebcamComponent from "../components/webcam"

const SecondPage = ({ data }) => {
  const [cameraShown, setCameraShown] = React.useState(false)
  const [questionNumber, setQuestionNumber] = React.useState(0)
  return (
    <Layout>
      <Seo title="Practice" />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded">
            {cameraShown ? (
              <WebcamComponent />
            ) : (
              <img src="https://dummyimage.com/1200x1000" />
            )}
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {data.allSanityQuestion.edges[questionNumber].node.question}
            </h1>
            <p className="leading-relaxed mb-8">
              Remember to use the STAR Method. Describe the situation, explain
              the task, what actions did you take, and what was the result?
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                onClick={() => setCameraShown(v => !v)}
              >
                Enable Camera
              </button>
              {/* On click, make this button turn into a red timer - on time expiry, change button to another 2 min green timer and auto start recording if camera enabled */}
              <button
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                onClick={() =>
                  setQuestionNumber(
                    Math.floor(
                      Math.random() * data.allSanityQuestion.edges.length
                    )
                  )
                }
              >
                Start Practice
              </button>
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
