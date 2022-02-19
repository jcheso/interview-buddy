import * as React from "react"
import { navigate } from "gatsby"
import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, GraphQLErrorList } from "gatsby"
import { useFormspark } from "@formspark/use-formspark"
import { useForm } from "react-hook-form"

const SubmitQuestion = props => {
  const { data, errors } = props
  const industry = (data || {}).industry
  const recaptchaRef = React.useRef()
  const [submit, submitting] = useFormspark({
    formId: "1YYiT1yZ",
  })
  const { register, handleSubmit } = useForm()

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

  const onSubmit = async data => {
    const dataWithToken = {
      "g-recaptcha-response": recaptchaRef.current.getValue(),
      ...data,
    }

    await submit(dataWithToken)
      .then(() => navigate("/forms/success", { state: data }))
      .catch(() => navigate("/forms/error"))
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      Htmlfor="industry"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Industry
                    </label>
                    <select
                      type="text"
                      id="industry"
                      name="industry"
                      className="w-full h-10 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("industry")}
                    >
                      {industry.edges.map((x, y) => (
                        <option key={y}>{x.node.industry}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      Htmlfor="company"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full h-10 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      {...register("company")}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      Htmlfor="question"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Question
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      {...register("question")}
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full flex justify-center flex-col content-center">
                  <ReCAPTCHA
                    className="flex justify-center"
                    sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_SITE_KEY}
                    ref={recaptchaRef}
                  />
                  <div className="p-4 w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                    >
                      Submit
                    </button>
                  </div>
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
