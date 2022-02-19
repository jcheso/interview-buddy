import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const FormFailed = () => (
  <Layout>
    <Seo title="Form Failure" />
    <section class="text-gray-400 bg-gray-900 body-font h-full">
      <div class="container h-full mx-auto flex px-5 py-24 items-center justify-center flex-col align-middle ">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Sorry, something went wrong!
          </h1>
          <p class="leading-relaxed mb-8">Please try and submit it again.</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default FormFailed
