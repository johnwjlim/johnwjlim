import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Waypoint } from "react-waypoint"
import styled from "styled-components"

import * as Styled from "./ss-constants"

const Container = styled(Styled.Container)`
  margin: 7.5rem 0;

  @media (max-width: 1240px) {
    margin: 3.5rem 0;
  }
`

export default function FlowWireframes(props) {
  const data = useStaticQuery(graphql`
    query {
      Join: file(relativePath: { eq: "join-a-group.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Create: file(relativePath: { eq: "create-a-group.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Waypoint onEnter={() => props.onChange(2)}>
      <Container>
        <Styled.OffsetBody>
          <Styled.BodyText>
            <strong>Validating Our Use Cases.</strong>
          </Styled.BodyText>
          <Styled.BodyText>
            We were pleasantly surprised by the relative lack of concern expressed by our testers on the safety and security aspects of our product in the previous round of testing. Preliminary research and conversations with our professor had suggested that this was a problem that could have potentially threatened the entire viability of our idea. 
          </Styled.BodyText>
          <Styled.BodyText>
            It therefore came as a relief to all of us, including our professor, that our testers were a lot more receptive to our concept that initially expected. We speculated that this could be due to testers having seen actual sketches of the app and the idea in action, which could have helped to allay fear and uncertainty. With the additional validation gained from the positive outcomes of our first round of user tests, we were now comfortable with further advancing our idea and moving into testing the key user flows for our app.
          </Styled.BodyText>
          <Styled.TextQuote>
            "Our goal was to test the usability of our product by having users walk through the process of joining a trip to a predetermined location as well as creating a trip to another location."
          </Styled.TextQuote>
          <Styled.BodyText>
            Our next objective was to design user flows based on anticipated usage scenarios. Our goal was to test the usability of our product by having users walk through the process of joining a trip to a predetermined location as well as creating a trip to another location. We tested our user flows with low fidelity wireframes based on our sketches from the previous sprint. 
          </Styled.BodyText>
        </Styled.OffsetBody>
        <Styled.ImageWrapper>
          <Img fluid={data.Join.childImageSharp.fluid} />
        </Styled.ImageWrapper>
        <Styled.ImageWithMargin>
          <Img fluid={data.Create.childImageSharp.fluid} />
        </Styled.ImageWithMargin>
        <Styled.OffsetBody>
          <Styled.BodyText>
          User testing for this sprint was largely successful as most of our testers were able to successfully navigate through the flows with little to no additional prompting from proctors. We also received feedback on visual aspects of our wireframes; while most of it were relatively minor fixes, there were issues with some screens where testers appeared to be slightly confused about where they were. We attributed the nature of this confusion to the low fidelity nature of our wireframes, which admittedly made some screens too similar to one another. We believe that this issue could be addressed with higher fidelity prototypes.
          </Styled.BodyText>
          <Styled.BodyText>
            Another interesting insight that we discovered while testing our wireframes was how much more efficient it was to test them as compared to paper-based prototypes and sketches. As our wireframes were largely screen-based, we were able to quickly scale them across multiple devices, which allowed us to test them concurrently. This was in contrast to paper prototypes where we could only conduct a single test at a time. 
          </Styled.BodyText>
        </Styled.OffsetBody>  
      </Container>
    </Waypoint>
  )
}
