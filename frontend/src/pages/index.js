import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Seo title="Home" />
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            {data.allSanityMovie.edges.map(movie => (
              <div className="text-xl">{movie.node.title}</div>
            ))}
            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              The only buddy you need to get you through your next interview
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium text-white">
                  Certified FAANG interview questions
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium text-white">
                  Curated content from recent interviews
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium text-white">
                  Filter by company to choose the ones relevant to you
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font font-medium text-white">
                  Master your response with the record and review feature
                </span>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            <Link to="/practice">Try now</Link>
          </button>
        </div>
      </section>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/60359551_1583600878451300_6099633912928010240_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XoavPz0DXIcAX85-Eb4&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_yfJSblc8ecaVKNalWMEuhcJWR0XLx7wKMz7TN2Pm3DA&oe=6202649A"
                />
                <p class="leading-relaxed">
                  Even my sigma grindset couldn't help get me through the grind
                  of behaviour interview prep. When I found Interview Buddy I
                  was able to practice daily until I was confident to land a
                  role as the next CEO of Meta.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  WILL THOMSON
                </h2>
                <p class="text-gray-500">Head of Meta VR</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://scontent-lhr8-1.xx.fbcdn.net/v/t31.18172-8/13416750_10154245569344154_2424018990622501096_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=t6qkWvoi0VEAX-eb8kn&tn=4XlhGqkIqEICBqHL&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8mhnHPF98IgkDy5h-JGPDo1PL0l_xonPMWLVV7XzZX9A&oe=6201DD18"
                />
                <p class="leading-relaxed">
                  Even though I worked in finance, I hadn't quite mastered the
                  art of bullshit on the spot. Interview Buddy changed
                  everything for me, now I'm running the largest NFT trading
                  platform in London.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  GEN HALL
                </h2>
                <p class="text-gray-500">Crypto Shill</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/72917090_1364626567044939_7408968187900854272_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=hiQuiE3DxDUAX_esFkD&_nc_oc=AQk2ahEbKt71ol4Xq6aYUXolhgEsdVFMaM3zcdM9AJ-EOa3weaUjYreguku1RafQGu4Wo3HO_nedhANCBUITOOxF&_nc_ht=scontent-lhr8-2.xx&oh=00_AT8KicEfMNTMrmB-dXwcf97wJgmUwUQ6uqiGNPeqJnLvKQ&oe=62033F74"
                />
                <p class="leading-relaxed">
                  Interview Buddy was the only thing that could stop me playing
                  Final Fantasy over the Christmas break and actually focus on
                  my career! After two weeks of practice I was ready to chase my
                  goal as a Quant on Wall Street.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">
                  Jack Leyland
                </h2>
                <p class="text-gray-500">CTO</p>
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
    allSanityMovie {
      edges {
        node {
          releaseDate
          title
        }
      }
    }
  }
`

export default IndexPage
