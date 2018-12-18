import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'

import hero from "../images/nimbus-hero.jpg"
import SmallHero from "../images/nimbus-hero-small.png"
import { runInThisContext } from 'vm';

const Container = styled.div`
  margin-top: 5em;
`;

const ImageWrapper = styled.div`
  // margin-top: 3em;
  margin-bottom: 3.5em;
`;

const Content = styled.div`
  max-width: 880px;
  margin: 0 auto;
`;

const Tagline = styled.h2`
  font-family: "Proxima Nova Semi Bold";
  letter-spacing: -1.5px;
  font-size: 48px;
  // line-height: 1.2;
`;

const Timeline = styled.p`
  font-family: "Proxima Nova";
  font-size: 20px;
  line-height: 1.5;
  color: #767676;
  margin-bottom: 0;
`;

const Detail = styled.div`
  // max-width: 10.8em;
  margin-bottom: 2em;
`;


const Section = styled.div`
  margin-top: 2.5em;
  max-width: 40rem;
`;

const Heading = styled.h3`
  font-family: "Proxima Nova Bold";
  font-size: 26px;
  letter-spacing: -0.5px;
  margin-bottom: 1.5em;
`;

const Dash = styled.div`
  margin-top: 2em;
  width: 60px;
  border-bottom: solid 5px #484848;
`;

class Nimbus extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Container>
          <ImageWrapper>
            <Img style={{maxHeight: "500px", minHeight:"350px"}} fluid={this.props.data.hero.childImageSharp.fluid} />
            {/* <picture>
              <source media="(max-width: 768px)" srcset={SmallHero} />
              <img src={hero}/>
            </picture> */}
          </ImageWrapper>
          <Content>
            <Tagline>How do you expand access to the outdoors for the interconnected society of today?</Tagline>
            <Detail>
              <Timeline>Project Title: Nimbus</Timeline>
              <Timeline>Timeline: Spring 2018</Timeline>
              <Dash/>
            </Detail>
            <Section>
              <p>The year is 2018. National Park visits in the United States have topped 200 million and social media usage among young Americans is at an all time high. While our public lands are purportedly free and open to all, the sheer remoteness of many of our favorite outdoor locations means that access is often limited to the few who have cars or those who have friends or family who share a similar passion for the outdoors. </p>
              <p>As a group, we each have had experiences where we wanted to explore the outdoors only to find that there was either no means to get there or that there was nobody to go with. Anecdotal evidence from our friends as well as our professor, Brian Fling, suggested that this problem is not just limited to the seven members within our group but is in fact, potentially part of a larger trend that is prevalent in our society today.</p>
            </Section>
            <Section>
              <Heading>Initial Survey</Heading>
              <p>We first sent out an initial survey to potential users in order to validate our hypothesis and further investigate the scope of our chosen problem. We sought to identify their level of experience in outdoor activities, how they usually planned out transportation for these trips, and how comfortable they were with sharing a ride to the outdoors with complete strangers.</p>
              <blockquote>The results of our survey were promising, with 87.5% of respondents stating that it was “moderately challenging” to “very challenging” to set up travel to these locations. </blockquote>
              <p>However, it appeared that safety was a concern for users, as 62.5% of users expressed that they would be “moderately uncomfortable” to “very uncomfortable” riding in vehicles with strangers for extended distances. We wanted to tackle this issue early on to prevent it from becoming a bigger problem in future sprints. Therefore, we decided to focus our first sprint on finding ways to help our users feel safe and comfortable when using our app.</p>
            </Section>
            {/* <Img fluid={this.props.data.survey.childImageSharp.fluid} /> */}
            <Section>
              <Heading>Proposed Solution</Heading>
              <p>As our problem was deemed to be viable with a lack of alternatives on the market, we set out to design a mobile application to connect enthusiasts looking to explore the outdoors with one another. We sought to alleviate the pain points of planning for these activities, including transportation, seeking companionship, and preparing required equipment in advance for the trip.</p>
            </Section>
            <Section>
              <Heading>Sprint 1</Heading>
              <p>For this sprint, we aimed to create features that would help our users feel at ease when sharing a ride with others.</p>
            </Section>
          </Content>
          <Img fluid={this.props.data.sketches.childImageSharp.fluid} style={{maxWidth: "1440px", margin: "4em auto"}} />
          <Content>
            <Section>
              <p>We decided that the following elements would help ease users’ concerns: a profile picture, a profile description, a “trip history” detailing the past outings users have completed, and photos of past trips. In this sprint, we designed paper prototypes to illustrate four different user types with varying levels of detail in their profiles.</p>
              <p>Our testing revealed that users found that photos from previous trips made them feel the most safe because it felt more relatable. A review system was also one of the features that our users asked for.</p>
              <p>However, the most interesting finding from this sprint was the fact that our users were not overly concerned about safety once they were presented with a profile. This came as a surprise to us as we were expecting more push back from a safety perspective. </p> 
              <blockquote>The issue of safety appeared to take a backseat for our users as they seemed more concerned about whether they would mesh well with the person that they were going with.</blockquote>
            </Section>
            <Section>
              <Heading>Sprint 2</Heading>
              <p>The relative lack of concern expressed by our testers on the safety aspects of our concept came as a surprise as this was at odds with the results of our initial research and survey. Our professor was also pleasantly surprised by our findings as he felt that the safety concerns had the potential to jeopoardize the entire validitiy of our idea. </p>
              <p>While our last sprint was a proof of concept to make sure that people were actually receptive to our idea, this sprint was about testing the usability of our app. We made low-fidelity wireframes and tested them by having our testers walk through anticipated usage scenarios such as the process of joining a group to a predetermined location as well as creating a trip to another location.</p>
            </Section>
          </Content>
          <Img fluid={this.props.data.wireframes.childImageSharp.fluid} style={{maxWidth: "1440px", margin: "4em auto"}}/>
          <Content>  
            <Section>
              <p>Feedback from our previous round of testing suggested that users appreciated some form of feedback or review system that allowed others to see what fellow users had to say about a particular user. To that end, we incorporated a review system that allowed users to share the experiences that they had with other users in our prototype.</p>
              <p>Most of our users displayed little to no hesitation as they moved through our screens. However, there were issues with some of our screens where users appeared to be stumped on what to do next. We attributed this to the low-fidelity nature of screens which meant that certain screens basically looked similar to one another.</p>
            </Section>
            <Section>
              <Heading>Sprint 3</Heading>
              <p>One of the problems that we encountered during our last round of testing was that some of the screens looked too similar to one another, resulting in some of our testers being confused on what to do next. For this sprint, we focused on bringing our designs to life with high-fidelity prototypes. </p>
              <p>We largely followed the same usability test that we had used in our last sprint. This allowed us to better see the differences that our updates were making as we were subjecting each design to the same analysis.</p>
            </Section>
          </Content>
          <Img fluid={this.props.data.userTesting.childImageSharp.fluid} style={{maxWidth: "1440px", maxHeight: "500px", margin: "4em auto"}} />
          <Content>
            <Section>
              <p>Overall, we gained valuable insight from user-testing with high-fidelity screens. We received confirmation from our users that the two flows that we had assigned - creating a group and joining a group - were easy to follow.</p>
              <p>In addition, since we had created high-fidelity screens for this sprint, we were able to solicit design feedback and critique to help enhance our user experience. Some of the feedback that we got indicated that we had inconsistencies in language (groups, trips, listings) and missing fields in our group creation form. Certain UI elements were also determined to be confusing for users, such as our "message" button which ended up looking like a "compose" button</p>
            </Section>
          </Content>
          <Img fluid={this.props.data.hifi.childImageSharp.fluid} style={{maxWidth: "1440px", margin: "4em auto"}}/>
          <Content>
            <Section>
              <Heading>Next Steps</Heading>
              <p>To finalize the app’s design, we would first incorporate the feedback received in the third sprint. We would then determine whether we wanted to add additional features requested by our users. Chief among these are features that enhance the outdoor experience while our users are on the trip. This would potentially include trail maps, weather conditions, geolocation, and emergency notifications. We had concerns that the application would not be able to retain users once they had completed a trip. Users might, for example, keep the group that they had taken a trip on our app with and continue to take trips with them outside of the app. We hope that by adding features that enhance the outdoor experience, users would be encouraged and incentivized to continue using our app.</p>
            </Section>
            <Section>
              <Heading>Reflection</Heading>
              <p>Designing this app helped us realize how necessary it was to gather user feedback before making any major design decisions, not assuming that users would think a particular way. Making the assumption that safety would be a big concern would have significantly impacted our design, limiting the vision we strove to achieve. By ensuring that such concerns did not become an issue early on, we were able to learn more about other aspects of the outdoor experience that our users sought.</p>
            </Section>
            <Section>
              <Heading>Redesign</Heading>
              <p>Here we go again.</p>
            </Section>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default Nimbus;

export const query = graphql`
  {
    hero:file(relativePath: {eq:"images/nimbus-hero.png"}) {
      childImageSharp {
        fluid (quality: 100) {
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
    sketches:file(relativePath: {eq: "images/sprint1.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wireframes:file(relativePath: {eq: "images/wireframes.png"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    userTesting:file(relativePath: {eq: "images/user-testing.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hifi:file(relativePath: {eq : "images/hifi.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`