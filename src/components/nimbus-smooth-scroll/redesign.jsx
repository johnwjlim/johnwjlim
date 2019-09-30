import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Waypoint } from "react-waypoint"

import * as Styled from "./ss-constants"

const Container = styled(Styled.Container)`
  margin: 7.5rem 0;

  @media (max-width: 1240px) {
    margin: 3.5rem 0;
  }
`

export default function Redesign(props) {
  const data = useStaticQuery(graphql`
    query {
      ScreenDeck: file(relativePath: {eq: "revised-screen-deck.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TripCrit: file(relativePath: {eq: "trip-critique.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RevisedTripCrit: file(relativePath: {eq: "revised-trip-crit.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      LocationCrit: file(relativePath: {eq: "location-crit.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TrailSign: file(relativePath: {eq: "trail-difficulty.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    } 
  `)

  return (
    <Waypoint onEnter={() => props.onChange(4)}>
      <Container>
        <Styled.ImageWrapper>
         <Img fluid={data.ScreenDeck.childImageSharp.fluid} />
        </Styled.ImageWrapper>
        <Styled.OffsetBody>
          <Styled.BodyText>
            <strong>Revisiting the work.</strong>
          </Styled.BodyText>
          <Styled.BodyText>
          The last round of testing had revealed a number of issues that we never quite had the opportunity to address. Seeing that some time had passed since I worked on this project, I figured it’d be a good idea to come back with fresh eyes and do a little refresh. 
          </Styled.BodyText>
          <Styled.BodyText>
          My main goal with this redesign was to address some of the issues that were left unresolved. I also attempted to improve the visual clarity of the design by improving the information hierarchy and by updating the visual styling to better match latest generation mobile hardware.  
          </Styled.BodyText>
        </Styled.OffsetBody>
        <Styled.ImageWrapper>
          <Img fluid={data.TripCrit.childImageSharp.fluid} />
        </Styled.ImageWrapper>
        <Styled.ImageWithMargin>
          <Img fluid={data.RevisedTripCrit.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.OffsetBody>
          <Styled.BodyText>
          If you’ve been paying attention you may notice that I’ve omitted the section about car info in the revised design. We had feedback from several of our testers wondering what about the car was important, and I agree with that sentiment. Perhaps I had a different vision of the product from the rest of my team, but my idea of the app was always going to be focused on the people and the outdoors. We weren’t making a ride-sharing app or a product focused around cars, and to have the car info adds limited value at the potential expense of clutter and information overload. 
          </Styled.BodyText>
          <Styled.BodyText>
          The original intention of including the car information was due to the accessibility challenges you get in the outdoors, where vehicles may need certain characteristics or specialized equipment to tackle terrain. The idea being that the  vehicle information would give users added confidence or assurance that they’ll get to where they want to go. 
          </Styled.BodyText>
          <Styled.TextQuote>
            We weren’t making a ride-sharing app or a product focused around cars, and to have the car info adds limited value at the potential expense of clutter and information overload.
          </Styled.TextQuote>
          <Styled.BodyText>
          Yet there are a number of reasons why I felt that having car information was ultimately unnecessary. <strong> Most of all being that I find that the actual car is often a poor predictor of ability to tackle conditions and terrain. </strong>
          For example, I’ve seen more than my fair share of supposedly all-wheel drive vehicles spun out in a ditch on the side of the road because they were running summer tires in the snow or traveling at inappropriate speeds for conditions.
          </Styled.BodyText>
          <Styled.BodyText>
          What I feel matters more is the ability and experience levels of the driver. A good driver should be able to recognize the limitations of his/her vehicle, and either work around it or simply not even attempt to go to places that the car can’t handle.
          </Styled.BodyText>
        </Styled.OffsetBody>
        <Styled.ImageWrapper>
          <Img fluid={data.LocationCrit.childImageSharp.fluid} />
        </Styled.ImageWrapper>
        <Styled.ImageWithMargin>
          <Img fluid={data.TrailSign.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.OffsetBody>
          <Styled.BodyText>
            <strong>A little sidetrack into symbology</strong>
          </Styled.BodyText>
          <Styled.BodyText>
          Our professor wasn't too keen on the method we were using to denote activity difficulty, specifically our use of green, yellow and red to represent easy, moderate and hard respectively. My goal with the redesign was therefore to move away from the color coding and especially the use of the color red, which was an attention grabber and had too much of a negative connotation attached to it. After a little research, I decided to adopt the trail difficulty symbology system used by the National Ski Area's Association (NSAA).
          </Styled.BodyText>
          <Styled.TextQuote>
          The Walt Disney Company was considering opening a ski resort and did studies and tests on which colors worked best. They came up with the current green circle for easiest runs, a blue square for intermediate, black diamond for advanced and double black diamond for expert.
          </Styled.TextQuote>
          <Styled.BodyText>
            The NSAA first adopted a system of signage in the winter of 1964-65. Before that, as if skiing on wooden boards with leather boots wasn’t hard enough, it was every man for himself. The colors they used were different than today and also conflicted with the colors used in Europe. American Resorts used yellow to designate intermediate trails and the French used red because, well who knows why—they’re French. 
          </Styled.BodyText>
          <Styled.BodyText>
          The Walt Disney Company was considering opening a ski resort and did studies and tests on which colors worked best. They had even tested skier’s reactions to different geometric figures, concluding for example, that the symbol for easy terrain should be a circle, which was perceived as soft, and that the color of the circle should be green, which was perceived as mellow. The current system of a green circle for easiest runs, a blue square for intermediate, black diamond for advanced and double black diamond for expert was thus born. This system was adopted by the NSAA 3 years later in 1968 and has stuck ever since.
          </Styled.BodyText>
        </Styled.OffsetBody>
      </Container>
    </Waypoint>
  )
}