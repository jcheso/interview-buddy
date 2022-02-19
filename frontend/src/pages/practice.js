import * as React from "react"
import { graphql, GraphQLErrorList } from "gatsby"
import {
  FaPeopleArrows,
  FaTasks,
  FaChalkboardTeacher,
  FaDownload,
} from "react-icons/fa"
import { BsGraphUp } from "react-icons/bs"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WebcamComponent from "../components/webcam"
import CountdownComponent from "../components/timer"

const SecondPage = props => {
  const { data, errors } = props
  const questions = (data || {}).questions
  const [questionNumber, setQuestionNumber] = React.useState(0)
  const [recording, setRecording] = React.useState(false)
  const [count, setCount] = React.useState(0)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  if (!questions) {
    throw new Error(
      'Missing questions". Open the studio at http://localhost:3333 and add some content to "Questions" and restart the development server.'
    )
  }

  return (
    <Layout>
      <Seo title="Practice" />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 pt-12 pb-6 mx-auto flex flex-wrap">
          <div className="text-center w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-yellow-400 py-4 h-full">
              {questions.edges[questionNumber].node.question}
            </h1>
          </div>

          <div className="flex flex-wrap w-full align-middle">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <FaPeopleArrows className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    SITUATION
                  </h2>

                  <div>
                    <label htmlFor="comment" className="block text-md">
                      What’s the context? Describe the situation or the
                      background first.
                    </label>
                    <div className="mt-1">
                      <textarea
                        readOnly={recording}
                        rows={2}
                        name="situation"
                        id="situation"
                        className={`w-full  bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ${
                          recording
                            ? "bg-red-200 cursor-not-allowed"
                            : "bg-gray-800"
                        }`}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <FaTasks className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    TASK
                  </h2>
                  <p className="leading-relaxed">
                    <div>
                      <label htmlFor="comment" className="block text-md">
                        Talk about your responsibilities or the tasks you had to
                        complete.
                      </label>
                      <div className="mt-1">
                        <textarea
                          readOnly={recording}
                          rows={2}
                          name="situation"
                          id="situation"
                          className={`w-full  bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ${
                            recording
                              ? "bg-red-200 cursor-not-allowed"
                              : "bg-gray-800"
                          }`}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <FaChalkboardTeacher className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    ACTION
                  </h2>
                  <div>
                    <label htmlFor="comment" className="block text-md">
                      How did you fix the situation? Describe your process and
                      the steps you took.
                    </label>
                    <div className="mt-1">
                      <textarea
                        readOnly={recording}
                        rows={2}
                        name="situation"
                        id="situation"
                        className={`w-full  bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ${
                          recording
                            ? "bg-red-200 cursor-not-allowed"
                            : "bg-gray-800"
                        }`}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <BsGraphUp className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    RESULTS
                  </h2>
                  <div>
                    <label htmlFor="comment" className="block text-md">
                      Describe the results of your actions. If possible, use
                      numbers or hard data.
                    </label>
                    <div className="mt-1">
                      <textarea
                        readOnly={recording}
                        rows={2}
                        name="situation"
                        id="situation"
                        className={`w-full  bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ${
                          recording
                            ? "bg-red-200 cursor-not-allowed"
                            : "bg-gray-800"
                        }`}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                  <FaDownload className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                    REVIEW
                  </h2>
                  <p className="block text-md">
                    Download your video and review your response.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 md:pt-8 h-full flex-col flex items-center">
              <div className="w-full h-full justify-start flex flex-col flex-center align-middle relative">
                <div className="sticky flex items-center top-16 flex-col">
                  <WebcamComponent count={count} />
                  <div className="absolute top-4 left-12">
                    {count === 1 ? (
                      <div className="w-1/3 flex justify-center">
                        <CountdownComponent
                          duration={60}
                          setCount={setCount}
                          setRecording={setRecording}
                          count={count}
                        />
                      </div>
                    ) : null}
                    {count === 2 ? (
                      <div className="w-1/3 flex justify-center">
                        <CountdownComponent
                          duration={120}
                          setCount={setCount}
                          setRecording={setRecording}
                          count={count}
                        />
                      </div>
                    ) : null}
                  </div>

                  <div class="p-2 w-2/3 justify-center content-center">
                    <div class="h-full bg-opacity-40 p-2 rounded flex justify-center items-center gap-10">
                      {/* On click, make this button turn into a red timer - on time expiry, change button to another 2 min green timer and auto start recording if camera enabled */}
                      <div className="py-2 flex justify-right content-center">
                        {count !== 1 && count !== 2 ? (
                          <button
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                            onClick={() => {
                              setCount((count + 1) % 3)
                            }}
                          >
                            Start
                          </button>
                        ) : null}
                        <button
                          disabled={count%3 !== 0}
                          className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                          onClick={() => {
                            setQuestionNumber(
                              Math.floor(Math.random() * questions.edges.length)
                            )
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
    questions: allSanityQuestion {
      edges {
        node {
          question
        }
      }
    }
  }
`

export default SecondPage
