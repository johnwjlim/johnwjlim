import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 5em;
  // max-width: 1080px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const Content = styled.div`
  // max-width: 880px;
  max-width: 750px;
  margin: 0 auto;
`;

const Tagline = styled.h2`
  font-family: Tiempos, serif;
  font-weight: 400;
  letter-spacing: -1.5px;
  font-size: 40px;
  color: #484848;
  line-height: 1.3;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 425px) {
    font-size: 28px;
  }
`;

const Timeline = styled.p`
  font-style: italic;
  line-height: 1.5;
  color: #767676;
  margin-bottom: 0;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Detail = styled.div`
  margin: 2rem 0;
  // margin-bottom; 1.5em;
`;


const Section = styled.div`
  margin: 2rem 0;
  max-width: 40rem;
`;

const Heading = styled.h3`
  font-family: neue-haas-unica, sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 2rem;
`;

const Dash = styled.div`
  margin-top: 2em;
  width: 60px;
  border-bottom: solid 2px #484848;
`;

const Oblique = styled.p`
  font-style: italic;
  color: #767676;

`;

const Text = styled.p`
  font-family: neue-haas-unica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8em;
`;

const Opener = styled.h4`
  font-family: neue-haas-unica;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: -0.5px;
`;

const LinkWrapper = styled.a`
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
            <Img style={{maxHeight: "500px", minHeight:"350px", maxWidth: "1200px", margin: "0 auto"}} fluid={this.props.data.hikeHero.childImageSharp.fluid} />
          </ImageWrapper>
          <Content>
            <Tagline>How do you expand access to the outdoors for the increasingly interconnected society of today?</Tagline>
            {/* <Dash/> */}
            <Detail>
              <Timeline>Project Title: Nimbus</Timeline>
              <Timeline>Timeline: Spring 2018</Timeline>
            </Detail>
            <Section>
              <Oblique>This was a group project done in a Rapid Prototyping class led by Brian Fling, Creative Director at Pinch/Zoom. The following is a write-up of my experience during this project. TL;DR, we made an app to connect outdoor enthusiasts with one another to partake in outdoor experiences. We iterated and tested. A lot. (as the class title "Rapid Prototyping" would suggest) And we discovered an interesting revelation on the willingness of people to get into strangers' cars these days.</Oblique>
            </Section>
            <Dash />
            <Section>
              {/* <Heading>A Little Background</Heading> */}
              <Opener>The year is 2018. National Park visits in the United States have topped 200 million and social media usage among young Americans is at an all time high. While our public lands are purportedly free and open to all, the sheer remoteness of many of our favorite outdoor locations means that access is often limited to the few who have cars or those who have friends or family who share a similar passion for the outdoors. </Opener>
              <p>As a group, we each have had experiences where we wanted to explore the outdoors only to find that there was either no means to get there or that there was nobody to go with. Anecdotal evidence from our friends as well as our professor, Brian Fling, suggested that this problem is not just limited to the seven members within our group but is in fact, potentially part of a larger trend that is prevalent in our society today.</p>
            </Section>
            <Section>
              <Heading>Surveying The Problem</Heading>
              <p>We first sent out an initial survey to potential users in order to validate our hypothesis and further investigate the scope of our chosen problem. We sought to identify their level of experience in outdoor activities, how they usually planned out transportation for these trips, and how comfortable they were with sharing a ride to the outdoors with complete strangers.</p>
              <blockquote>The results of our survey were promising, with 87.5% of respondents stating that it was “moderately challenging” to “very challenging” to set up travel to these locations. </blockquote>
              <p>However, it appeared that safety was a concern for users, as 62.5% of users expressed that they would be “moderately uncomfortable” to “very uncomfortable” riding in vehicles with strangers for extended distances. We wanted to tackle this issue early on to prevent it from becoming a bigger problem in future sprints. Therefore, we decided to focus our first sprint on finding ways to help our users feel safe and comfortable when using our app.</p>
            </Section>
            <Section>
              <Heading>Proposed Solution</Heading>
              <p>As our problem was deemed to be viable with a lack of alternatives on the market, we set out to design a mobile application to connect enthusiasts looking to explore the outdoors with one another. We sought to alleviate the pain points of planning for these activities, including transportation, seeking companionship, and preparing required equipment in advance for the trip.</p>
            </Section>
            <Section>
              <Heading>Stranger Danger</Heading>
              <p>For this sprint, we aimed to create features that would help our users feel at ease when sharing a ride with others. We made paper prototypes, then tested them with potential users.</p>
            </Section>
          </Content>
          <Img fluid={this.props.data.sketches.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "4em auto"}} />
          <Content>
            <Section>
              <p>We decided that the following elements would help ease users’ concerns: a profile picture, a profile description, a “trip history” detailing the past outings users have completed, and photos of past trips. Our prototyped were designed to illustrate four different user types with varying levels of detail in their profiles.</p>
              <p>Our testing revealed that users found that photos from previous trips made them feel the most comfortable because it felt more relatable. A review system was also one of the features that our users asked for.</p>
              <p>However, the most interesting finding from this sprint was the fact that our users were not overly concerned about safety once they were presented with a profile. This came as a surprise to us as we were expecting more push back from a safety perspective. </p> 
              <blockquote>The issue of safety appeared to take a backseat for our users as they seemed more concerned about whether they would mesh well with the person that they were going with.</blockquote>
            </Section>
            <Section>
              <Heading>User Flows</Heading>
              <p>The relative lack of concern expressed by our testers on the safety aspects of our concept came as a surprise as this was at odds with the results of our initial research and survey. Our professor was also pleasantly surprised by our findings as he felt that the safety concerns had the potential to jeopoardize the entire validitiy of our idea. </p>
              <p>While our last sprint was a proof of concept to make sure that people were actually receptive to our idea, this sprint was about testing the usability of our app. We made low-fidelity wireframes and tested them by having our testers walk through anticipated usage scenarios such as the process of joining a group to a predetermined location as well as creating a trip to another location.</p>
            </Section>
          </Content>
          <LinkWrapper href="https://marvelapp.com/8cec1eh" target="_blank">
            <Img fluid={this.props.data.wireframes.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "4em auto"}}/>
          </LinkWrapper>
          <Content>  
            <Section>
              <p>Feedback from our previous round of testing suggested that users appreciated some form of feedback or review system that allowed others to see what fellow users had to say about a particular user. To that end, we incorporated a review system that allowed users to share the experiences that they had with other users in our prototype.</p>
              <p>Most of our users displayed little to no hesitation as they moved through our screens. However, there were issues with some of our screens where users appeared to be stumped on what to do next. We attributed this to the low-fidelity nature of screens which meant that certain screens basically looked similar to one another.</p>
            </Section>
            <Section>
              <Heading>Bringing It To Life</Heading>
              <p>One of the problems that we encountered during our last round of testing was that some of the screens looked too similar to one another, resulting in some of our testers being confused on what to do next. For this sprint, we focused on bringing our designs to life with high-fidelity prototypes. </p>
              <p>We largely followed the same usability test that we had used in our last sprint. This allowed us to better see the differences that our updates were making as we were subjecting each design to the same analysis.</p>
            </Section>
          </Content>
          <Img fluid={this.props.data.userTesting.childImageSharp.fluid} style={{maxWidth: "1200px", maxHeight: "500px", margin: "4em auto"}} />
          <Content>
            <Section>
              <p>Overall, we gained valuable insight from user-testing with high-fidelity screens. We received confirmation from our users that the two flows that we had assigned - creating a group and joining a group - were easy to follow.</p>
              <p>In addition, since we had created high-fidelity screens for this sprint, we were able to solicit design feedback and critique to help enhance our user experience. Some of the feedback that we got indicated that we had inconsistencies in language (groups, trips, listings) and missing fields in our group creation form. Certain UI elements were also determined to be confusing for users, such as our "message" button which ended up looking like a "compose" button</p>
            </Section>
          </Content>
          <LinkWrapper href="https://marvelapp.com/3f9161c" target="_blank">
            <Img fluid={this.props.data.hifi.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "4em auto"}}/>
          </LinkWrapper>
          <Content>
            <Section>
              <Heading>Moving Forward</Heading>
              <p>To finalize the app’s design, we would first incorporate the feedback received in the third sprint. We would then determine whether we wanted to add additional features requested by our users. Chief among these are features that enhance the outdoor experience while our users are on the trip. This would potentially include trail maps, weather conditions, geolocation, and emergency notifications. We had concerns that the application would not be able to retain users once they had completed a trip. Users might, for example, keep the group that they had taken a trip on our app with and continue to take trips with them outside of the app. We hope that by adding features that enhance the outdoor experience, users would be encouraged and incentivized to continue using our app.</p>
            </Section>
            <Section>
              <Heading>Team Reflection</Heading>
              <p>Designing this app helped us realize how necessary it was to gather user feedback before making any major design decisions, not assuming that users would think a particular way. Making the assumption that safety would be a big concern would have significantly impacted our design and potentially limited the vision we strove to achieve. By ensuring that such concerns did not become an issue early on, we were able to learn more about other aspects of the outdoor experience that our users sought.</p>
            </Section>
            <Section>
              <Heading>On A More Personal Note...</Heading>
              <p>This was probably the most valuable design class that I have taken. The lessons from this short 3 months were numerous. Chief among which was something of a fundamental age old mantra — process matters. I used to not take the need for low-fidelity prototyping too seriously, seeing it as more of a means to an end rather than as a valuable tool in itself. Yet it turns out that I was totally missing the point of low-fi prototyping altogether; we prototype not for ourselves but for the user. We keep them simple so that we can keep our focus on our users and test them quickly as opposed to sweating the little details which we can sort out at a later stage. We keep our cost of iteration low so that we retain the flexibility to go back and change things up if something didn’t work for our users.</p>
              <blockquote>“You are not the user” — This was something of a recurring theme throughout our project and also builds off of my previous point on process.</blockquote>
              <p>It’s all nice and good to have solid opinions about a certain idea or subject, but it means absolutely nothing until it’s actually put in front of a user. Both our professor and my group had concerns about whether people would be comfortable getting into a car filled with strangers to travel to some far flung place in the middle of nowhere for an extended period of time. The concerns were strong enough that we devoted our first sprint to creating and testing features that would hopefully mitigate some of that potential discomfort. Hence, it came as a welcome surprise to us that our users were actually fairly receptive to our concept and didn’t seem as concerned as we were about something that our professor felt could be a dealbreaker for our project. Though more than happy to be proven wrong, our professor requested that we continue to pay attention to this for the following sprints just in case. We were happy to report to him after 4 sprints and dozens of user tests later, that while our users had varying levels of comfort with our idea, none were outright opposed to it due to safety concerns. Had we not placed such a premium on user testing and process, we would likely have created something that overcompensated on certain features due to a perceived concern rather than actual user need, which would have diminished the overall usability of our product. </p>
              <iframe src="https://drive.google.com/file/d/1mMdROr88pdLK-fG679hkUyuFr5M1XBF_/preview" width="640" height="480"></iframe>
              <p>This project was the first time I got to participate in true user-centered design, with every step that we took almost solely dictated by the needs of our users. Iterate, test and repeat was the name of the game. Every user test provided a wealth of information and insights that we would otherwise never have thought of. We've all read and learnt about user-centered design but to actually see it in action and to apply it myself was a truly eye-opening experience. </p>
            </Section>
            {/* <Section>
              <Heading>Redesign</Heading>
              <p>We kind of did this in a rush with a greater focus on managing the product cycle as opposed to visual design. Plus, it's a lot easier to recognize things that I would do differently and make iterative refinements after stepping away for a while. I decided to take the time to update it a little.</p>
            </Section> */}
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
    revisedHero:file(relativePath: {eq: "images/nimbus-hero-revised.png"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
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
        fluid (maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wireframes:file(relativePath: {eq: "images/wireframes.png"}) {
      childImageSharp {
        fluid (maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    userTesting:file(relativePath: {eq: "images/user-testing.png"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hifi:file(relativePath: {eq : "images/hifi.png"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hikeHero:file(relativePath: {eq: "images/hike-hero-2.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`