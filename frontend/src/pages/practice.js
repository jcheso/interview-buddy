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
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div class="flex mx-auto flex-wrap mb-20">
            <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-800 inline-flex items-center leading-none border-yellow-500 text-white tracking-wider rounded-t">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              STEP 1
            </a>
            <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              STEP 2
            </a>
            <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              STEP 3
            </a>
            <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              STEP 4
            </a>
          </div>

          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-4 text-white">
              {data.allSanityQuestion.edges[questionNumber].node.question}
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Remember to use the STAR Method!
            </p>
          </div>
        </div>
        <button
          className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
          onClick={() =>
            setQuestionNumber(
              Math.floor(Math.random() * data.allSanityQuestion.edges.length)
            )
          }
        >
          Generate Question
        </button>
        <button
          className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
          onClick={() => setCameraShown(v => !v)}
        >
          Show Camera
        </button>
        {cameraShown ? <WebcamComponent /> : null}
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
