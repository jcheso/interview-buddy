import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaVideo, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = ({ siteTitle }) => (
  <footer className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <button className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <FaVideo class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" />
        <Link to="/">
          <span className="ml-3 text-xl">{siteTitle}</span>
        </Link>
      </button>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <OutboundLink aria-label="My Website" href="https://jarrydcheso.me/">
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4">Jarryd Cheso</p>
        </OutboundLink>
        <OutboundLink
          aria-label="My GitHub"
          href="https://github.com/jcheso"
          className="ml-3 text-gray-400"
        >
          <FaGithub className="w-5 h-5"></FaGithub>
        </OutboundLink>
        <OutboundLink
          aria-label="My LinkedIn"
          href="https://www.linkedin.com/in/jcheso/"
          className="ml-3 text-gray-400"
        >
          <FaLinkedinIn className="w-5 h-5"></FaLinkedinIn>
        </OutboundLink>
        <OutboundLink
          aria-label="My Website"
          href="https://william-thomson.studio"
        >
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200">
            Will Thomson
          </p>
        </OutboundLink>
        <OutboundLink
          aria-label="My GitHub"
          href="https://github.com/will-thomson4"
          className="ml-3 text-gray-400"
        >
          <FaGithub className="w-5 h-5"></FaGithub>
        </OutboundLink>
        <OutboundLink
          aria-label="My LinkedIn"
          href="https://www.linkedin.com/in/william-p-thomson/"
          className="ml-3 text-gray-400"
        >
          <FaLinkedinIn className="w-5 h-5"></FaLinkedinIn>
        </OutboundLink>
      </span>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
