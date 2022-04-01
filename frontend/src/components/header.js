import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FaVideo } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <p className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <FaVideo className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" />
        <Link to="/">
          <span className="ml-3 text-xl">{siteTitle}</span>
        </Link>
      </p>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {/* <Link to="/practice">
          <a className="mr-5 hover:text-white">Practice Page 1</a>
        </Link> */}
        <Link to="/practice">
          <p className="mr-5 hover:text-white">Practice</p>
        </Link>
        {/*<a className="mr-5 hover:text-white">Third Link</a>
        <a className="mr-5 hover:text-white">Fourth Link</a> */}
      </nav>
      <Link to="/submit-question">
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Submit a question
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
