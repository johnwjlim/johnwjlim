import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container, ImageWrapper, ImageWithMargin, FlexWrapper, IntroBody, OffsetBody, TextBlock, RightButton, ButtonHeader, ButtonText, sections, Image, InfoPanel, TextQuote } from "../constants"

const Title = styled.h1`
  margin-bottom: 0.5rem;
`

const InlineLink = styled.a`
  color: blue;
  font-weight: 600;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    color: #ffb7b7;
  }
`;

export default function Overview(props) {
  const data = useStaticQuery(graphql`
    query {
      Onboarding1: file(relativePath: { eq: "onboarding-1.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Onboarding2: file(relativePath: {eq: "onboarding-2.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Onboarding3: file(relativePath: {eq: "onboarding-3.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ScreenDeck: file(relativePath: {eq: "g-screen-deck.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      HomeAndChannels: file(relativePath: {eq: "home-and-channels.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SearchAndDiscover: file(relativePath: {eq: "search-and-discover.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Hero: file(relativePath: {eq: "g-hero-image.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Rome: file(relativePath: {eq: "rome.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Joining: file(relativePath: {eq: "joining.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Details: file(relativePath: {eq: "organization-details.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Proposing: file(relativePath: {eq: "proposing.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <ImageWrapper>
        <Img fluid={data.Hero.childImageSharp.fluid} />
      </ImageWrapper>
      <FlexWrapper>
        <InfoPanel>
          <Title>ClubFinder</Title>
          <p style={{lineHeight: "1.4"}}>Some Design Challenge <br/>User Experience</p>
        </InfoPanel>
        <IntroBody>
          <TextBlock>
            <p>
            This was sort of an individual design challenge set by a certain technology company, where the prompt was to design an experience for new students to browse, search, and propose new student organizations. My deliverables were to be wireframe flows with one or two screens at a “higher-fidelity”, whatever that was supposed to mean. The sort of part comes via the fact that what I submitted actually bears little to no resemblance to what I have here (more on that in the <InlineLink onClick={() => props.onChange(1)}>backstory</InlineLink>)
            </p>
          </TextBlock>
          <p><strong>Thinking about community and connection</strong></p>
          <TextBlock>
            <p>
            Participation in student organizations is often interest driven, where like-minded people can come together to share their common interests and passions. Yet while interest gets people in the door, it is often community that keeps people in the organization.<strong> It’s an inherently social experience, where it’s almost as much about having common interests as it is about finding a right fit with the people in the organization. </strong>
             </p>
          </TextBlock>
          <TextBlock>
            <p>
            <strong>My primary goal with this design was to help new students find that right fit for themselves.</strong> I wanted to create a forum where students from across cohorts can come together to share their student organization experiences with one another, where  new student can read first-hand accounts of what it’s like to be part of an organization. I wanted to craft a way for new students to gauge the vibe of an organization, dip their feet into the water, before making the commitment to engage with the organization.
            </p>
          </TextBlock>
        </IntroBody>
      </FlexWrapper>
      <ImageWrapper>
        <Img fluid={data.ScreenDeck.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <p><strong>Onboarding</strong></p>
        <TextBlock>
          <p>
          My overarching goal with the onboarding process was to provide users with a running start to their experience with the app. The premise of this design hinges on creating a social experience with user-generated content driving a majority of engagement. Yet for new students who largely are coming to a new school with little of the way of established social networks, this may prove to be an obstacle; the last thing I want happen is for new students to lose interest within minutes of opening the app for the first time simply because they lacked social connections necessary for an engaging experience. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
            I’ve broken down the onboarding process into three broad sections, each with distinct objectives. They are 1. To establish identity, 2. To build a network and 3. To define user preferences
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
          <Img fluid={data.Onboarding1.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          The idea behind the app is to establish a community where students can share their experiences in student organizations with one another and serve a platform for new students to find that right fit for themselves. I wanted to create an environment that users could trust to be exclusive to their institution without having to worry about trolls and the like. To that end, I decided to make ID verification mandatory to not just restrict access to only students but also to ensure that users are placed into the appropriate university communities. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.Onboarding2.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          I wanted to have new users establish connections in the app at the earliest possible opportunity in order to have them invested in the experience and give them just a little bit more to lose if they were to quit. The most expedient way of doing so would be through linking existing social media and pulling friends lists off of those in order to rapidly establish a base network of connections to build from. Social media can also offer up a wealth of data points about the user which can be used to further refine recommendations and suggestions in order to provide a more tailored experience. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          Using previously input data, the app would then offer to add users to organizations that users are likely a member of. These organizations would be general broad-scope groups such as class years and academic majors; organizations which are open and have relatively clear-cut membership requirements. This would be followed by a step where the user can seek to join other organizations that they are already part of in real life. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.Onboarding3.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          With this section, my goal was to further refine user preferences to help create a more tailored experience with better organization and event suggestions. Some potential topics that could work well in this regard include questions relating to interests, preferred organization sizes, preferred frequency of events etc. 
          </p>
        </TextBlock>
        <p><strong>Home and the Idea of Channels</strong></p>
        <TextBlock>
          <p>
          Conceptually the reason why I went with the whole social set up was to facilitate a process of organic discovery, where users can learn about student organizations from other members of their community. And in addition to the whole social proof aspect of hearing about an organization through the words of a real person, I also wanted to create opportunities for users to discover organizations they never knew existed be it through tailored recommendations or posts by people they know.
          </p>
        </TextBlock>
        <TextQuote>
          I wanted to facilitate a process of organic discovery, where users can learn about other organizations from other members of their community.
        </TextQuote>
        <TextBlock>
          <p>
          The overall user experience is underpinned by channels where users and organizations can post updates and events. A similar concept of reference would be Slack, with each organization having its own channel where users can post messages  to. Users can join large, broad-based organizations that have clear cut membership requirements, such as class years and academic majors, or more focused interest groups with unique and specific membership requirements. And within these organizations are event pages that have their own little channels as well. While each organization would have its own little hub of activity going on in their own channels, it all comes together for the user in the home page where there’s a rolling feed of updates from all of the organizations that the user is a member of. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.HomeAndChannels.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <TextBlock>
          <p>
          Channels serve as a window into the personality of an organization. So even if a user chooses not to join an organization or engage with it any form, it's still very much possible for the user to get a feel for the organization by going through its page and channel.
          </p>
        </TextBlock>
        <p><strong>A Sidenote on Events</strong></p>
        <TextBlock>
          <p>
          Events play a big role in the designs that I am proposing. They are a central tenet of a college student’s social experience and also often the lifeblood of a student organization looking to stay relevant. Recognizing the fact that a screen-based solution will probably never be able to fully replicate the experience of physically meeting and engaging with an organization, a goal that I had for this design was to complement that process of physical engagement. Events present an ideal opportunity to encourage that engagement.
          </p>
        </TextBlock>
        <p><strong>Search and Discovery</strong></p>
        <TextBlock>
          <p>
          Besides organically discovering organizations through social connections, I wanted to provide users with the means for more proactive discovery, where they could actively seek out organizations based on specific interests and activities. The “Discover” tab aims to be a center for all user directed discovery, where users can not only search for specific organizations, events and persons, but also receive tailored recommendations for organizations and events based on a range of criterium. These tailored recommendations also serve as another avenue to help users discover organizations they never knew existed. 
          </p>
         </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.SearchAndDiscover.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWithMargin>
        <Img fluid={data.Rome.childImageSharp.fluid} />
      </ImageWithMargin>
      <OffsetBody>
        <p><strong>Organizations In Detail</strong></p>
        <TextBlock>
          <p>
          Organization pages are expected to be focal points of activity in the app. Besides having a channel allowing users in the organizations to share updates with one another, organization pages also consist of informational section and a media gallery that would consist purely of images and videos.
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.Joining.childImageSharp.fluid} />
      </ImageWrapper>
      <ImageWithMargin>
        <Img fluid={data.Details.childImageSharp.fluid} />
      </ImageWithMargin>
      <OffsetBody>
        <p><strong>Proposing an Organization</strong></p>
        <TextBlock>
          <p>
          This is the latter part of the given prompt and in all honesty, the part that I have the least contextual understanding of; I don’t actually know anyone who has started up a new student organization from scratch. As such, many of the choices that I’m making for this component will largely be based on conjecture. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          The University of Washington requires all new student organizations to be approved. Other than having at least 5 members to be in the organizations, there isn’t much publicly available criteria to go on. I decided to base proposing an organization around a form that aims pertinent information that I think administration would need to assess an application. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
        <Img fluid={data.Proposing.childImageSharp.fluid} />
      </ImageWrapper>
      <OffsetBody>
        <p><strong>Closing Thoughts</strong></p>
        <TextBlock>
          <p>
          I could be overcomplicating what could be a very simple problem that requires a simple solution. Maybe all that’s needed is a simple directory that users can search and browse organizations with. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          But in my opinion that’s a direction that while addressing the problem on the surface, doesn’t quite go into the essence of what it means to be a new student looking for a student organization. And most of all, a student organization directory has probably already been done, and people will probably still be doing it even after it’s been done to death. To me, building another directory doesn’t really add much value and utility to what’s already out there. While the prompt appeared to suggest a problem with information asymmetry, I saw the potential to affect a fundamental social dynamic.
          </p>
        </TextBlock>
      </OffsetBody>
    </Container>
  )
}