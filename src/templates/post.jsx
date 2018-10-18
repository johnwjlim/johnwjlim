import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

class PostTemplate extends React.Component {
  constructor() {
    super();
  }

  render() {
    const post = this.props.data.contentfulPost;
    return (
      <Layout>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
      </Layout>
    )
  }
}

export default PostTemplate;

export const postQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: {eq: $slug}) {
      title
      slug
      tagline {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`