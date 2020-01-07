import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../constants"

const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`

const ImageBackground = styled.div`
  background-color: #f5f5f5;
  padding: 3.5rem 0;

  @media (max-width: 1120px) {
    padding: 0;
  }
`

const InlineLink = styled.a`
  color: blue;
  // font-weight: 600;
  transition: 0.2s;
  font-style: italic;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: #ffb7b7;
  }
`;

export default function Intro() {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "pool-hero.png"}) {
        childImageSharp {
          fluid ( maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PoolPoster: file(relativePath: { eq: "pool-poster.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PoolPosterNew: file(relativePath: {eq: "pool-poster-2.png"}) {
        childImageSharp  {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PoolIdeation: file(relativePath: {eq: "pool-ideation.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Styled.Container>
        {/* <Styled.ImageWrapper>
          <Img fluid={data.HeroImage.childImageSharp.fluid} />
        </Styled.ImageWrapper> */}
        {/* <Styled.OffsetBody style={{marginTop: "5rem"}} > */}
        <Styled.OffsetBody>
          <TitleBox>
            <h1 style={{marginBottom: "0.25rem", fontWeight: "700", fontSize: "2.5rem"}}>POOL</h1>
            <p style={{lineHeight: "1.5", color: "#767676" }}>Experience Design | Mixed Reality Experiences</p>
          </TitleBox>
          {/* <Styled.BodyText>
            The brief for this project was to design an energy and water use tracking information system for home use that helps users to optimize their use of water and energy.
          </Styled.BodyText>
          <Styled.BodyText style={{fontStyle: "italic"}}>
            I've had the pleasure of working with four immensely talented individuals for this project. Do check out their portfolios in the following links: <br/>
            Ashley Boone <br/>
            Isabelle Armstrong <br/>
            Stephen Sherwood <br/>
          </Styled.BodyText> */}
          <Styled.BodyText>
            POOL was the cumulative deliverable for an experience design project that I worked on as part of an Interaction Design class. I’ve had the pleasure of collaborating with three immensely talented individuals for this project. Do take the chance to check out their portfolios: 
              <InlineLink target="_blank" href="https://www.abooneportfolio.com/" > Ashley Boone, </InlineLink>
              <InlineLink target="_blank" href="https://www.isabellearmstrong.me/">Isabelle Armstrong, </InlineLink>
              <InlineLink target="_blank" href="http://stephensherwood.me/">Stephen Sherwood. </InlineLink>
          </Styled.BodyText>
          <Styled.BodyText>
            The brief for this project was to design an energy and water use tracking information system for home use that helps users to optimize their use of water and energy. A key theme we came upon during the course of our ideation was a general disconnect between present means of measuring resource consumption and our awareness of what we’re actually using; water meters are notoriously obtuse and bills often come in measurement units that beyond dollars and cents, are unrelatable to most (its hard to relate kilowatt hours and cubic feet to more tangible everyday concepts). 
          </Styled.BodyText>
        </Styled.OffsetBody>
        <Styled.ImageWrapper>
          <Img fluid={data.PoolIdeation.childImageSharp.fluid} />
        </Styled.ImageWrapper>
        <Styled.OffsetBody>
          <Styled.BodyText>
            Our proposed solution is a mixed reality experience that aims to visualize household energy and water usage in order to encourage responsible consumption. We're calling it POOL –– kind of as a playful way to reflect the way our design aims to visualize resource footprints as "pools of impact" on the ground.
          </Styled.BodyText>
          <Styled.BodyText>
            A primary goal of our design solution was about closing the feedback loop between resource usage and awareness of the actual impact of use. Current billing cycles give a macro-level overview of consumption but provides little to no micro-level fidelity that users can actually use to make meaningful changes in behavior. POOL aims to address this by leveraging mixed reality technologies to project real-time resource impact at the point of use to give users a better understanding of their consumption habits and behavior. 
          </Styled.BodyText>
          <Styled.BodyText>
            As part of the final deliverables for our project, I created a one page poster that aims to showcase what our design was about and how it worked. 
          </Styled.BodyText>
        </Styled.OffsetBody>
        <ImageBackground>
          <Styled.ImageWrapper style={{maxWidth: "800px"}}>
            <Img fluid={data.PoolPoster.childImageSharp.fluid} />
          </Styled.ImageWrapper>
        </ImageBackground>
      </Styled.Container>
    </>
  )
}