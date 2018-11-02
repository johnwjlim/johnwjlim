import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'

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
  max-width: 32em;
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
  margin-top: 2em;
  max-width: 33rem;
`;

const Section = styled.div`
  margin-top: 2.5em;
  max-width: 33rem;
`;

const Heading = styled.h4`
  font-size: 20px;
`;

class Nimbus extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <ImageWrapper>
          <Img style={{maxHeight: "480px"}} fluid={this.props.data.hero.childImageSharp.fluid} />
        </ImageWrapper>
        <Content>
          <Tagline>How do you open up access to the outdoors for the increasingly interconnected society of today?  </Tagline>
          <Detail>
            <Timeline>Project Title: Nimbus</Timeline>
            <Timeline>Timeline: Spring 2018</Timeline>
          </Detail>
          {/* <Markdown dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}} /> */}
          <Section>
            <Heading>The Context</Heading>
            <p>The year is 2018. National Park visits in the United States have topped 200 million and social media usage among young Americans is at an all time high. While our public lands are purportedly free and open to all, the sheer remoteness of many of our favorite outdoor locations means that access is often limited to the few who have cars or those who have friends or family who share a similar passion for the outdoors. </p>
            <p>As a group, we each have had experiences where we wanted to explore the outdoors only to find that there was either no means to get there or that there was nobody to go with. Anecdotal evidence from our friends as well as our professor of our rapid prototyping class, Brian Fling, suggested that this problem is not just limited to the seven members within our group but is in fact, potentially part of a larger trend that is prevalent in our society today.</p>
          </Section>
          <Section>
            <Heading>Initial Survey</Heading>
            <p>We first sent out an initial survey to potential users in order to validate our hypothesis and further investigate the scope of our chosen problem. We sought to identify their level of experience in outdoor activities, how they usually planned out transportation for these trips, and how comfortable they were with sharing a ride to the outdoors with complete strangers.</p>
            <p>The results of our survey were promising, with 87.5% of respondents stating that it was “moderately challenging” to “very challenging” to set up travel to these locations. However, it appeared that safety was a concern for users, as 62.5% of users expressed that they would be “moderately uncomfortable” to “very uncomfortable” riding in vehicles with strangers for extended distances. Although our sample size was fairly small, we wanted to tackle this issue early on to prevent it from becoming a bigger problem in future sprints. We henceforth decided to focus our first sprint on finding ways to help our users feel safe and comfortable when using our app.</p>
          </Section>
          <Img fluid={this.props.data.survey.childImageSharp.fluid} />
          <Section>
            <Heading>Proposed Solution</Heading>
            <p>As our problem was deemed to be viable with a lack of worthy alternatives on the market, we set out to design a mobile application to connect enthusiasts looking to explore the outdoors with one another. We sought to alleviate the pain points of planning for these activities, including transportation, seeking companionship, and preparing required equipment in advance for the trip.</p>
          </Section>
        </Content>
        <Content></Content>
      </Layout>
    )
  }
}

export default Nimbus;

export const query = graphql`
  {
    hero:file(relativePath: {eq:"images/outdoors.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thumbnail:file(relativePath: {eq:"images/placeholder-thumb.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    survey:file(relativePath: {eq:"images/survey.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`