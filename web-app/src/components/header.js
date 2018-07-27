import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '1.45rem 1.0875rem',
      // }}
      className="container"
      style={{
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
      }}
    >
      <h1 style={{
         margin: 0,
         fontSize: "20px", 
         }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <Link to="/about"
          style={{
            color: "white",
            float: "right",
            textDecoration: "none",
            margin: "0 0.5em",
          }}>
          about
        </Link>
        <Link to="/page-2"
          style={{
            color: "white",
            float: "right",
            textDecoration: "none",
            marginRight: "0.5em",
          }}>
          second
        </Link>
      </h1>

    </div>
  </div>
)

export default Header
