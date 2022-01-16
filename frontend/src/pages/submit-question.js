import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, GraphQLErrorList } from "gatsby"

const SubmitQuestion = props => {
  const { data, errors } = props
  const role = (data || {}).role
  const industry = (data || {}).industry

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  if (!data) {
    throw new Error(
      'Missing data". Open the studio at http://localhost:3333 and add some content and restart the development server.'
    )
  }
  console.log(role)
  console.log(industry)
  return (
    <Layout>
      <Seo title="Submit Question" />

      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Submit a question
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Help out the community by submitting your own questions.
            </p>
          </div>
          <form action="https://submit-form.com/1YYiT1yZ">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Industry
                    </label>
                    <select
                      type="text"
                      id="industry"
                      name="industry"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      {role.edges.map((x, y) => (
                        <option key={y}>{x.node.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Role
                    </label>
                    <select
                      type="text"
                      id="role"
                      name="role"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      {role.edges.map((x, y) => (
                        <option key={y}>{x.node.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      for="message"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Question
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    role: allSanityRole {
      edges {
        node {
          title
        }
      }
    }
    industry: allSanityIndustry {
      edges {
        node {
          industry
        }
      }
    }
  }
`

export default SubmitQuestion
