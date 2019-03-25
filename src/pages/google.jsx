import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 5em;
`;

const ImageWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

const Content = styled.div`
  // max-width: 880px;
  max-width: 750px;
  margin: 0 auto;
`;

const SplitContent = styled(Content)`
  display: flex;
  max-width: 1032px;
  align-items: center;

  @media (max-width: 1024px) {
    display: block;
    max-width: 750px;
    margin: 0 auto;
  }
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
`;


const Section = styled.div`
  margin: 2rem 0;
  max-width: 40rem;
`;

const Heading = styled.h3`
  font-family: neue-haas-unica, sans-serif;
  font-weight: 500;
  font-size: 20px;
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

class Google extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Container>
          <ImageWrapper>
            <Img style={{maxHeight: "500px", minHeight:"350px", maxWidth: "1200px", margin: "0 auto"}} fluid={this.props.data.hero.childImageSharp.fluid} />
          </ImageWrapper>
          <Content>
            <Tagline>How do you create an experience that seamlessly connects students to campus organizations?</Tagline>
            <Detail>
              <Timeline>Project Title: Google Design Exercise</Timeline>
              <Timeline>Timeline: One week in winter 2019</Timeline>
            </Detail>
            <Section>
              <Oblique>This was a design exercise prepared for Google over the course of a week in Winter 2019. The challenge was to design an experience for students to browse, search, and propose new student organizations.</Oblique>
            </Section>
            <Dash />
            <Section>
              <Opener>The first weeks of school can be an intimidating experience for incoming college freshmen. Removed from the comforts and familiarities of home, new freshmen are often thrust headfirst into an unfamiliar environment and left to figure college out for themselves.</Opener>
              <p>Among the very first things on any incoming freshmen's to-do list is to establish social connections in their new environment, and getting involved with student organizations is amongst one of the very best ways to do that.</p>
              <p>My goal then was to facilitate the connection of freshman with like-minded groups and individuals and hopefully through that, get their college experience off to a positive start.</p>
            </Section>
            <Section>
              <Heading>Research Insights</Heading>
              <p>Over the course of the week, I interacted with a total of 8 subjects who were encouraged to participate in semi-structured interviews through the promise of coffee or beer, depending on time of day. </p>
              <p>One of the most common themes that emerged during the course of my research was that students tended to look for organizations primarily based on interest. This was followed closely by social aspects, where students tended to join organizations that their friends were a part of. </p>
              <p>Beyond the desire to seek out groups that aligned to their interests or that their friends were involved in, another factor cited by students was the commitment levels that joining an organization entailed. In fact, higher than expected commitment levels were often cited as a key reason why students eventually dropped organizations. Other issues cited included a lack of awareness on student organizations, with most respondents having no idea how many or even what organizations existed.</p>
              <Heading>An Uncertain Feeling</Heading>
              <blockquote>"It's like wanting to go to a party, but not knowing who's going to be there or what it's going to be like"</blockquote>
              <p>This was a statement expressed to me by one of my interviewees which stood out to me, as I felt it summed up the experience of looking for a student organization perfectly. The feeling of uncertainty appeared to be a common thread that tied these pain points and issues together. An early goal I then set out to achieve was to reduce some of the uncertainties that new students faced when looking for a student organization.</p>
              <p>Another interesting insight that I got through the course of my research was how the annual student organization fair hosted my school was universally regarded as useful in helping students find organizations. Students generally appreciated the opportunity to talk to organizations first hand and get personalized perspectives. Having an event where everyone was under roof also helped students discover organizations they never knew existed. The student organization fair therefore served as an inspiration in terms of the experience I wanted to create for my users.</p>
              <Heading>Solving the problem(s)</Heading>
              <p>Having talked to a bunch of people and gotten an ever widening circle of perspectives, I had to condense everything down into actionable problems to be tackled. I chose the following problems to address in my solution:</p>
              <ul>
                <li>To help users narrow down their options from over 800 organizations</li>
                <li>Provide users with a way to search and discover student organizations</li>
                <li>Provide users with a means of gauging the vibe of an organization to see if it'll be a good fit for them</li>
              </ul>
            </Section>
          </Content>
          <Img fluid={this.props.data.sketches.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "2rem auto"}} />
          <Content>
            <Section>
              <Heading>Onboarding</Heading>
              <p>My research led me to believe that there wasn't really a true one-size fits all approach with every user having his or her own priorities in terms of what they were looking for. Therefore, onboarding was crucial towards tailoring a personalized user for the user.</p>
              <p>Onboarding is centered around a series of short questions to be answered by the user upon creation of a new account.</p>
             </Section>
          </Content>
          <Img fluid={this.props.data.onboarding.childImageSharp.fluid} style={{maxWidth: "60vw", margin: "4em auto"}} />
          <Content>
            <Section>
              <p>The process should be broken up into short, concise questions to avoid information overload. Short questions are also easy to answer which helps the user form an impression of speedy progress. The end of the form will include a loading screen which serves to provide the user with the impression that the app is actively working to process their preferencces, which helps to reinforce the perception that their input is valued. It serves as a nifty tool that can help to enhance the perceived value of the app and acquire more user buy-in. </p>
            </Section>
            <Heading>Discovering An Organization</Heading>
          </Content>
          <Img fluid={this.props.data.discovering.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "2em auto"}} />
          <Content>
            <Section> 
              <p>Discovery serves as the main means for users to discover new organizations. The flow starts at the home page where suggested categories and organizations are presented to the user. These will be largely determined by the user's responses in the onboarding process, as well as other factors such as favorite organizations, search history, existing memberships etc.  </p>
              <p>Search screens serve as the primary pathway into specific organizations and categories. Tapping a category from home also returns a search listing.</p>
              <p>Individual listings serve to provide information on a specific organiozation, upcoming events hosted by the organization as well as serve as the primary means of contacting an organization.</p>
            </Section>
          </Content>
          <SplitContent>
            <Img fluid={this.props.data.home.childImageSharp.fluid} style={{minWidth:"18vw", maxWidth: "30vw", margin: "2rem 5rem"}} />
            <Section> 
              <Heading>Home</Heading>
              <p>Content listings in the home page are suggested based on user preferences indicating in onboarding process including liked categories, class standing and academic majors amongst other factors.</p>
              <p>These preferences are supplemented by the user's search history, organizations marked as favorites as well as organizatiomns that users are a part of.</p>
              <p>Suggested categories in the home screen are presented in a card carousel while organizations are visually represented in a list view. The use of unity and variety in the display elements helps the user distinguish between different content types.</p>
              <p>The idea here is to present the user with a small selection of curated options to act as a starting point as opposed to being overwhelmed by over 800 options. </p>
            </Section>
          </SplitContent>
          <Content>
            <Section>
              <Heading>Search</Heading>
            </Section>
          </Content>
          <Img fluid={this.props.data.search.childImageSharp.fluid} style={{maxWidth: "50vw", margin: "2rem auto"}} />
          <Content>
            <Section>
                <p>The search screens are the primary means for looking up categories and specific organizations not listed in the home screen.</p>
                <p>A list of all categories displayed below recent searches serves as reference for users and allows them to see what is available.</p>
                <p>Searching for categories or organizations will bring up the search results screen where best matches are displayed as list items.</p>
            </Section>
          </Content>
          <SplitContent>
            <Img fluid={this.props.data.listingFull.childImageSharp.fluid} style={{minWidth:"18vw", maxWidth: "30vw", margin: "2rem 5rem"}} />
            <Section>
              <Heading>Listing</Heading>
              <p>"It's like wanting to go to a party but not knowing who's going to be there" was a key driver in how I approached this problem. The goal was to address the uncertainties that my user would potentially be facing when deciding whether to join an organization.</p>
              <p>To that end, I decided to incorporate a review system where users could leave reviews on organizations that they have interacted with. This gives users an opportunity to hear from real people what they had to say about an organization that they were interested in.</p>
              <p>The idea was to help give users a better feel for the vibe of an organization. This could be especially helpful for freshmen who are less likely to have the social connections to rely on for word-of-mouth advice.</p>
            </Section>
          </SplitContent>
          <SplitContent>
            <Section>
              <p>A favorite button is available in every listing, allowing users to keep a shortlist of what they are interested in which can be helpful during the research process. This also encourages customization which drives user engagement and buy-in</p>
              <p>A key finding from my research was that recruitment procedures differed across organizations and that was really no unified way for organizations to recruit members. Rather than trying to create a one size fits all approach, I decided to defer the individual organizations to set their own recruitment policies. The orimary action is therefore an option to contact an organization</p>
              <p>A sticky bottom bar ensures that primary action is visible in viewport at all times. Rather than a full length floating action button, I opted to include some microcopy to provide context for the primary action</p>
            </Section>
            <Img fluid={this.props.data.listingHifi.childImageSharp.fluid} style={{minWidth:"18vw", maxWidth: "30vw", margin: "2rem 5rem"}} />
          </SplitContent>
          <Img fluid={this.props.data.proposingPrimary.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "2em auto"}} />
          <Img fluid={this.props.data.proposingSecondary.childImageSharp.fluid} style={{maxWidth: "1200px", margin: "2em auto"}} />
          <Content>
            <Section>
              <p>The primary flow starts at profile screen. From the profile screen, the user has the option to propose a new organization and goes through a form which is modelled after existing process for proposing a new organization</p>
              <p>The secondary flow starts on the search result screen, where the option to propose a new organization is prompted if search results comes back empty.</p>
              <p>A balance between the need to keep this action accessible and the need to prevent this from being a primary action led to the decision to not include this action in bottom navigation.</p>
            </Section>
          </Content>
          <SplitContent>
            <Img fluid={this.props.data.profile.childImageSharp.fluid} style={{minWidth:"18vw", maxWidth: "30vw", margin: "2rem 5rem"}} />
            <Section>
              <Heading>Profile</Heading>
              <p>The profile screen contains a basic bio, present organization memberships and reviews that user has written in the past.</p>
              <p>Propose an organization button is nestled in the memberships section. The need to keep button prominent while ensuring that it was in a related segment - which in this case was memberships, meant that a compromise had to be made. I’m reasoning an assumption that most users would not have more than 3 memberships, which means that action button would likely be within viewport for most users.</p>
            </Section>
          </SplitContent>
          <Content>
            <Section>
              <Heading>Challenges</Heading>
              <p>I faced two key challenges during the course of this project; time constraints and a lack of feedback. The timeframe that I was working under meant that I did not get as much research as I would have liked. I would have ideally liked to have more perspectives and hard data on what users looked for in an organization, push and pull factors that compelled them to stay or leave, the kinds of organizations that they would have liked suggested etc. </p>
              <p>I also was working with a lot less feedback than I would have prefered. I would have appreciated the opportunity to conduct user tests on each design iteration and evolve a product based on the feedback I was getting. I enjoy my work the most when I'm able to work collabaratively with my stakeholders and establish a connection with the people that I am designing for.</p>
              <Heading>Next Steps</Heading>
              <p>The first thing I would do if I were taking this project forward would be to stop whatever I was doing with the designs, compile whatever I had into a prototype and put them in front of a potential user of the product. I've been both pleasantly and rudely surprised by what I can discover from user testing and I'm a firm believer in the usefulness of testing. This can be especially true when potentially polarizing features such as reviews are involved. </p>
              <p>Besides potential improvements in process, there were also a number of features that I would look to implement based on additional feedback that I receieved throughout the process. Social media integration was something that came up in passing as a potential feature addition due to the fact that reviews are quite individualized and may not be the best medium for community engagement. Links to existing social media may also help to further address social pain points. Some sort of activity heat map may also be helpful in addressing the issue of users not knowing the commitment levels required for each organization. </p>
              <p>I believe that the product in its current form may be susceptible to user retention problems especially after it has fulfilled its primary purpose of matching a user to a student organization. I would advocate for an expansion of the scope of the product into an all encompassing campus social experience, where student organizations become a subset of a larger community-based social platform. Users are therefore given incentive to come back and engage on the platform even after accomplishing their primary goals. This will however have to be carefully managed as scope creep may come into play due to the myriad number of ways this could grow.</p>
            </Section>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default Google;

export const query = graphql`
  {
    hero:file(relativePath: {eq: "images/Artboard.png"}) {
      childImageSharp {
        fluid (maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sketches:file(relativePath: {eq: "images/google_sketches.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    onboarding:file(relativePath: {eq: "images/onboarding-screens.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discovering:file(relativePath: {eq: "images/google-discovering.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    home:file(relativePath: {eq: "images/Home-HiFi-Bezel.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    search:file(relativePath: {eq: "images/Search-HiFi-Bezel.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    listingFull:file(relativePath: {eq: "images/Listing-Full.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    listingHifi:file(relativePath: {eq: "images/Listing-HiFi-Bezel.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    proposingPrimary:file(relativePath: {eq: "images/Proposing-Primary.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    proposingSecondary:file(relativePath: {eq: "images/Proposing-Secondary.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profile:file(relativePath: {eq: "images/Proposing-Profile.png"}) {
      childImageSharp {
        fluid (maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
