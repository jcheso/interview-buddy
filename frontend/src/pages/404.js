import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <StaticImage
          class="mb-10 object-cover object-center"
          alt="hero"
          src="../assets/images/sad404.svg"
        />
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Page Not Found
          </h1>
          <p class="mb-8 leading-relaxed">Sorry to disappoint you</p>
          <div class="flex w-full justify-center items-end">
            <Link to="/">
              <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
