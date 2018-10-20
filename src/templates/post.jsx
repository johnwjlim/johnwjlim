import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.5rem;
  padding-top: 0;
`;

const ImageWrapper = styled.div`
  margin-bottom: 3em;
`;


const Content = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;

const Tagline = styled.h2`
  font-size: 32px;
  padding-bottom: 0.5em;
  // max-width: 32em;
`;

const Timeline = styled.p`
  font-family: "Lora Italic";
  font-size: 17px;
  color: #767676;
  margin-bottom: 0em;
`;
const Detail = styled.div`
  padding-bottom: 2.5em;
  border-bottom: solid 1px #767676;
  max-width: 32em
`;

const Markdown = styled.div`
  // margin: 0 auto;
  margin-top: 2em;
  max-width: 32rem;
`;

class PostTemplate extends React.Component {
  constructor() {
    super();
  }

  render() {
    const post = this.props.data.contentfulPost;
    return (
      <Layout>
        <ImageWrapper>
          <Img style={{maxHeight: "450px"}} fluid={post.hero.fluid} />
        </ImageWrapper>
        <Content>
          <Tagline>{post.tagline.childMarkdownRemark.rawMarkdownBody}</Tagline>
          <Detail>
            <Timeline>Project Title: {post.title}</Timeline>
            <Timeline>Timeline: {post.timeline.childMarkdownRemark.rawMarkdownBody}</Timeline>
          </Detail>
          <Markdown dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} />
        </Content>
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
      thumbnail {
        fluid (maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      hero {
        fluid (maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      timeline {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`