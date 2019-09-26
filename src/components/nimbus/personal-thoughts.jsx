import React from "react"
import styled from "styled-components"

import { Container, OffsetBody, TextBlock, RightButton, LeftButton, ButtonHeader, ButtonText, ImageWrapper, TextQuote, sections, SmallWidth, LargeWidth } from "../constants"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

export default function PersonalThoughts(props) {
  const data = useStaticQuery(graphql`
    query {
      Hero: file(relativePath: {eq: "end-notes-hero.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TripBriefing: file(relativePath: {eq: "trip-briefing-wireframe-notes.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      UserTests: file(relativePath: {eq: "user-test-grid.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      UserTestsMobile: file(relativePath: {eq: "user-test-grid-mobile.png"}) {
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
      <OffsetBody>
        <p><strong>Personal thoughts.</strong></p>
        <TextBlock>
          <p>
          It was truly a pleasure to be a part of this project, as this has been one of the few opportunities where I got to participate in rapid prototyping and user-centered design –– iterating on the fly based on test feedback and gauging user responses was something I particularly enjoyed. This project instilled in me the value of process and low-fidelity prototyping; the insights that we got from our user tests fundamentally shaped the direction of our product as we gradually realized over time that our users were a lot more receptive to our concept than initially anticipated. This evolving vision is reflected in the way we changed our focus for each sprint, as we went from trying to mitigate safety concerns in the very beginning to ultimately thinking about all of the pain points associated with traveling outdoors.
          </p>
        </TextBlock>
        <TextQuote>
        Our understanding of the user grew with every test; every new screen and feature put in front of a new user brought additional questions, and every new question brought additional insight. 
        </TextQuote>
        <TextBlock>
          <p>
          Which brings me to my next point, user research is never a one and done affair. We thought we knew what our users wanted at the very beginning and adapted for it, only to find out that we were off the mark at the end of the first sprint. Our understanding of user needs grew with every user test; every new screen and feature put in front of a new user brought additional questions, and every new question brought additional insight. We started out trying to simplify the process of getting transport to the outdoors, we ended up with a concept that tried to holistically tackle the pain points of exploring the outdoors. While some may call this scope creep, I like to think of it as adapting to user needs. 
          </p>
        </TextBlock>
        {/* TODO: Insert image montage of the rest of the user test pictures */}
      </OffsetBody>
      <LargeWidth>
        <Img fluid={data.UserTests.childImageSharp.fluid}/>
      </LargeWidth>
      <SmallWidth>
        <Img fluid={data.UserTestsMobile.childImageSharp.fluid}/>
      </SmallWidth>
      <OffsetBody>
        <p><strong>Next Steps: Trip Preparation</strong></p>
        <TextBlock>
          <p>
          We finished the project with a list of unresolved pain points and other nice-to-haves we never got the chance to implement. While I sought to go after some of the low lying fruit in my redesign, the reality is that I’ve barely scraped the surface in terms of what this concept has the potential to achieve. One aspect which I feel has most potential for development is in the area of trip preparation, which was also one of our more frequently cited pain points.
          </p>
        </TextBlock>
        <TextQuote>
          The idea is to deliver to users the most pertinent information as it relates to the trip that they have in mind in an attempt to bridge the experience gap for relative novices.
        </TextQuote>
        <TextBlock>
          <p>
          The outdoors can be an unforgiving environment. The lack of cell coverage in most areas means that self-reliance is paramount and proper planning and preparation is crucial for a positive experience. While there are guidelines available from various sources on how to pack and prepare, much of the specifics is highly context dependent, and it takes experience to nail down the correct balance; an experienced outdoorsman would rely on multiple sources of information to aid his or her preparation, such as local weather forecasts, recent trip reports and depending on the season, avalanche forecasts and snow reports.  While we’ve collated much of the information within our app for the user’s convenience, it still takes a certain amount of experience to make sense of it all and apply it appropriately. 
          </p>
        </TextBlock>
        <TextBlock>
          <p>
          While experience goes a long way in terms of alleviating risk, it is also a hard-won commodity which not everyone has the luxury of having, or the benefit of traveling with someone with experience. With pre-trip briefing, the idea is to deliver to users pertinent information as it relates to the trip that they have in mind in an attempt to bridge the experience gap for relative novices. I've put together a rough wireframe to illustrate some of the ideas I have for this concept. 
          </p>
        </TextBlock>
      </OffsetBody>
      <ImageWrapper>
          <Img fluid={data.TripBriefing.childImageSharp.fluid} />
      </ImageWrapper>
      {/* <OffsetBody>
        <p><strong>Next Steps: Research Opportunties</strong></p>
      </OffsetBody> */}
      <LeftButton onClick={() => props.onChange(props.active -1)}>
        <ButtonHeader>PREVIOUS SECTION</ButtonHeader>
        <ButtonText>{sections[props.active - 1]}</ButtonText>
      </LeftButton>
    </Container>
  )
}