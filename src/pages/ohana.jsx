import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 5em`
;

const ImageWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const Content = styled.div`
  max-width: 880px;
  margin: 0 auto;
`;

const Tagline = styled.h2`
  font-family: "Proxima Nova Semi Bold";
  letter-spacing: -1.2px;
  font-size: 40px;
  color: #484848;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 425px) {
    font-size: 28px;
  }
`;

const Timeline = styled.p`
  font-family: "Proxima Nova";
  font-size: 20px;
  line-height: 1.5;
  color: #767676;
  margin-bottom: 0;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Detail = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Dash = styled.div`
  margin-top: 2em;
  width: 60px;
  border-bottom: solid 3px #484848;
`;
const Section = styled.div`
  margin: 2rem 0;
  max-width: 40rem;
`;

const Heading = styled.h3`
  font-family: "Proxima Nova Bold";
  font-size: 25px;
  // letter-spacing: -0.2px;
  color: #484848;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  margin-bottom: 0;
`;

const ListItem = styled.li`
  margin: 0.8em 0;
`;

const Wrapper = styled.div`
  margin: 3em 0;
`;

const Oblique = styled.p`
  font-style: oblique;
`;

class Ohana extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Container>
          <ImageWrapper>
            <Img style={{maxHeight: "500px", minHeight:"350px"}} fluid={this.props.data.echohero.childImageSharp.fluid} />
          </ImageWrapper>
          <Content>
            <Tagline>How do you reimagine household chore management for the 21st century?</Tagline>
            <Dash/>
            <Detail>
              <Timeline>Project Title: Ohana</Timeline>
              <Timeline>Timeline: Spring 2018</Timeline>
            </Detail>
            <Section>
              <Oblique>This was a group project done in the context of a class led by Microsoft Senior Researcher, Andrew Begel. The following is a write-up based on both our collective experiences and my personal opinions.</Oblique>
              <Oblique>Our course site can be found <a href={"http://andrewbegel.com/info461/"} target="_blank">here</a>. <br/> Check out our GitHub repository <a href={"https://github.com/INFO461-Team-Go/ohana"} target="_blank">here</a>.</Oblique>
              <p>Leaving the comfortable and tidy homes of your parents and moving into a house or apartment with others can be a stressful and disorganized ordeal. Splitting up responsibilities among your housemates oftentimes leads to conflict and overall awkwardness. Chores around the house can go unfinished, which leads to dirty and unhealthy living environments.</p>
              <p>The problem that my team chose to address was the lack of a modern means of responsibility sharing that is convenient and reliable. We felt that current whiteboard chore sheets depend too much on manual re-drawing while verbal organization is inherently unorganized.</p>
            </Section>
            <Section>
              <Heading>Stakeholders</Heading>
              <p>Our first step towards finding a solution to the problem outlined above was identifying the primary stakeholders for our application. After brainstorming with the team, we identified two stakeholders, young adults and early tech adopters. Our reasoning is that young adults are the most likely to have roommates. This includes college students and recent grads.</p>
            </Section>
            <Section>
              <table>
                <tr>
                  <th>Primary Stakeholders</th>
                  <th>Needs/Expectations</th>
                </tr>
                <tr>
                  <td>Young Adults</td>
                  <td>
                    <List>
                      <ListItem>A way to ensure their house/apartment stays clean</ListItem>
                      <ListItem>Needs a easy and convenient way to gather information due to limited time</ListItem>
                    </List>
                  </td>
                </tr>
                <tr>
                  <td>Early Tech Adopters</td>
                  <td>
                    <List>
                      <ListItem>A way to integrate the latest gadget into their everyday lives</ListItem>
                    </List>
                  </td>
                </tr>
              </table>
            </Section>        
            <Section>
              <Heading>Proposed Solution</Heading>
              <p>We intended to create an Alexa skill that would enable roommates and housemates to efficiently manage their household responsibilities. The primary means of adjusting settings for the skill was through a web app which we developed in conjunction with the skill. Our users will initially use a web application to add users and chores.</p>
              <p>We want to present the skill as a convenience over traditional ways of managing chores. We want our users to figure out their chores without pulling out a device or going to a computer. Because of Alexa’s omnipresence (in the room, a few feet away from them), users are able to figure out their chores seamlessly.</p>
              <p>We recognized early on that it would likely be challenging for users to setup and input chores soley through voice interaction. Therefor, we decided to create a seperate web app that would declare and assign users and chores for the Alexa skill through a broswer-based interface.</p>
            </Section>  
            <Section>
              <Heading>Implementation</Heading>
              <p>The implementation aspect of this project was a challenge for all of us, as none of us had any experience working with Amazon Alexa or the Amazon ecosystem for that matter.</p>
              <p>I was primarily responsible for the implementation of the web-app as well as setting up the Firebase Database, which would also then serve as the main conduit between the web-app and Alexa skill.</p>
            </Section>
          </Content>
          <Wrapper>
            <Img fluid={this.props.data.screen1.childImageSharp.fluid} style={{maxWidth: "1000px", maxHeight: "600px", margin: "0.5em auto", }} />
            <Img fluid={this.props.data.screen2.childImageSharp.fluid} style={{maxWidth: "1000px", maxHeight: "600px", margin: "0.5em auto"}} />
          </Wrapper>
          <Content>
            <Section>
              <p>The biggest obstacle that we faced was getting the Alexa skill to work as none of us had any experience working with Amazon Lambda or even Node.js for that matter. We struggled with callback hell due to our lack of experience working with asynchronous javascript.</p>
              <p>As I had some experience working with Firebase Cloud Functions, I was able to contribute towards the debug process by identifying async issues as well as suggesting workarounds for them.</p>
              <p>I eventually spent much of the latter part of the project working on bug triage as I realised that I was fairly adept at finding hacks and workarounds for problems that we were facing.</p>           
              <p></p>
            </Section>
            <Section>
              <Heading>Voice-based Interactions</Heading>
              <p>Desinging a voice-based UI for our Alexa skill was an interesting challenge to say the least. None of us any experience with a voice-based home assistant, let alone designed for one.</p>
              <p>We had an initial sort-of user flow for our Alexa skill, which was almost immediately tossed as we quickly ran into limitations on what we could get Alexa to do. We were forced to limit ourselves to basic primitive utterances and responses.</p>
              <p>Another challenge that we encountered was one that was inherent to almost any voice-based UI; there were literally a hundred and one ways a user could potentially approach something as simple as asking Alexa what chore our user has to perform. We tried to mitigate this by sending out a survey to our entire class in an attempt to compile as many sample utterances as possible</p>
              <p>The following table provides a snapshot of the possible commands and utterances that our Alexa skill could handle.</p>
            </Section>
            <Section>
              <table>
                <tr>
                  <th>To find out what is assigned to user</th>
                  <th>To mark task as complete</th>
                </tr>
                <tr>
                  <td>
                  <List>
                      <ListItem>Alexa, ask Ohana what am I supposed to do</ListItem>
                      <ListItem>Alexa, ask Ohana what I have to do</ListItem>
                      <ListItem>Alexa, ask Ohana to tell me what I have to do</ListItem>
                      <ListItem>Alexa, ask Ohana am I supposed to do anything</ListItem>
                      <ListItem>Alexa, ask Ohana do I have to do anything</ListItem>
                    </List>
                  </td>
                  <td>
                    <List>
                      <ListItem>Alexa, tell Ohana I finished my task</ListItem>
                      <ListItem>Alexa, ask Ohana to mark my task as done</ListItem>
                      <ListItem>Alexa, tell Ohana I am done with my task</ListItem>
                      <ListItem>Alexa, tell Ohana to mark my task as done</ListItem>
                      <ListItem>Alexa, tell Ohana I am done with my chore</ListItem>
                    </List>
                  </td>
                </tr>
              </table>
            </Section>
            <Section>
              <Heading>Reflection</Heading>
              <p>The fact that we got the thing to work at all was a pleasant surprise to all of us as a group, and was a testemant to our persistence in the fact of seemingly insurmountable challenges. There were occasions where even our TA was stumped by the bugs that we were facing. The next to useless documentation provided by Amazon didn't help matters as well.</p>
              <p>Looking back at the code base, I'll be the first to admit that my coding could probably have been a lot more refined. A fair amount of what I wrote involved hacky workarounds to an immediate problem that we were facing rather than finessed solutions due to the time constraints that we were dealing with. While we did not run into any problems because of it, I can see how it could eventually become technical debt in the future.</p>
              <p>The value of persistence was probably my biggest takeaway from this project; I personally didn't think we'd be able to pull this off. I was pretty much learning on the fly for the entirety of the project, with every error that I ran into essentially being another learning opportunity. I got fairly comfortable with breaking things, for it was sometimes the only way generate enough movement to isolate the source of a bug. I feel that I can safely say that I learnt more about React and Javascript in this project than in any other class that I have taken thus far. </p>
            </Section>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default Ohana;

export const query = graphql`
  {
    hero:file(relativePath: {eq:"images/nimbus-hero.png"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screen1:file(relativePath: {eq: "images/ohana-screen1.png"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    screen2:file(relativePath: {eq: "images/ohana-screen2.png"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    echohero:file(relativePath: {eq:"images/echo-hero.png"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`