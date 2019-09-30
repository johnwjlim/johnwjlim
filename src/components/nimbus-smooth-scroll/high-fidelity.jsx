import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import { Waypoint } from "react-waypoint"

import * as Styled from "./ss-constants"

const ListItem = styled.li`
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 1rem;  
`
const List = styled.ul`
  margin: 2.5rem 0;

  @media (max-width: 1240px) {
    padding-left: 1rem;
  }
`
const Container = styled(Styled.Container)`
  margin: 7.5rem 0;

  @media (max-width: 1240px) {
    margin: 3.5rem 0;
  }
`

export default function HighFi(props) {
  const data = useStaticQuery(graphql`
    query {
      Home: file(relativePath: { eq: "high-fi-1.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Listing: file(relativePath: {eq: "high-fi-location.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Trips: file(relativePath: {eq: "high-fi-trips.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Profile: file(relativePath: {eq: "high-fi-profile.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ProfileDetail: file(relativePath: {eq: "high-fi-profile-detail.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Waypoint onEnter={() => props.onChange(3)}>
      <Container>
        <Styled.OffsetBody>
          <Styled.BodyText>
            <strong>Defining The Feature Set.</strong>
          </Styled.BodyText>
          <Styled.BodyText>
            At this stage in the project, we’ve established the viability of the concept and validated our two primary use cases. It was now time to expand on the features that we wanted included in our app. Beyond our primary goal of expanding access to the outdoors by connecting outdoor explorers with one another and having them adventure together, we were also keen on addressing some of the other pain points associated with exploring the outdoors. 
          </Styled.BodyText>
          <Styled.BodyText>
            Our previous rounds of research and user tests had given us a fair idea of the issues and annoyances that users were likely to encounter, and they ran the gamut from the planning and preparation before a trip to issues encountered during a trip itself. Some of the pain points we identified included: 
          </Styled.BodyText>
          <Styled.TextBlock>
            <List>
              <ListItem>
                Difficulty in finding information about specific characteristics of outdoor areas such as difficulty levels, distances, elevation, terrain etc.  
              </ListItem>
              <ListItem>
                Difficulty in acquiring localized information on conditions of outdoor areas such as weather forecasts and trail conditions. 
              </ListItem>
              <ListItem>
                Lack of knowledge on what to bring and how to prepare for an outdoor adventure, which also relies on the former two factors. 
              </ListItem>
              <ListItem>
                Lack of real time information in the outdoors such as present location on a trail.
              </ListItem>
            </List>
          </Styled.TextBlock>
          <Styled.BodyText>
            With our high fidelity prototype, we attempted to address these pain points by collating all of the appropriate information and presenting it to the user within our app. 
          </Styled.BodyText>
        </Styled.OffsetBody>
        <Styled.ImageWrapper>
         <Img fluid={data.Home.childImageSharp.fluid}/>  
        </Styled.ImageWrapper>
        <Styled.ImageWithMargin>
         <Img fluid={data.Listing.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.ImageWithMargin>
          <Img fluid={data.Trips.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.ImageWithMargin>
          <Img fluid={data.Profile.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.ImageWithMargin>
          <Img fluid={data.ProfileDetail.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.OffsetBody>
          <Styled.BodyText>
            All in all, designing this app was an extremely rewarding experience. As a team, we got to learn first hand the necessity of gathering user feedback before making any major design decisions rather than making assumptions on how a user was expected to behave. Making the assumption that safety would be a big concern would have significantly impacted our design, limiting the vision we strove to achieve. By ensuring that such concerns did not become an issue early on, we were able to learn more about other aspects of the outdoor experience that our users sought. 
          </Styled.BodyText>
        </Styled.OffsetBody>
      </Container>
    </Waypoint>
  )
}


