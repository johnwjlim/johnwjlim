import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import './custom.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'John has a website! I never thought this day would come!!!' },
            { name: 'keywords', content: 'John, Lim, UX, PM, Product, Design, Engineer, User, Experience, Informatics' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={"John Lim"} css={{zIndex: 2}} />
        <div
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.5rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
