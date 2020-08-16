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
  // font-style: italic;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: #ffb7b7;
  }
`;


const FlexBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 7rem 0;
  padding: 3.5rem;
  // border-top: 1px solid #666666;


  @media (max-width: 1240px) {
    display: block;
    margin: 3.5rem 0;
    padding: 0;
  }
`

const BlockTitle = styled.h2`
  font-weight: 500;
  font-size: 1.25rem;
  width: 18rem;
  letter-spacing: -0.2px;

  @media (max-width: 1024px) {
    margin: 2.5rem 0;
  }
`

const BlockText = styled.p`
  max-width: 42rem;
  margin: 0 7rem;
  font-size: 1.1rem;
  line-height: 1.5;
  letter-spacing: -0.3px;
  @media (max-width: 1024px) {
    margin: 0;
  }
`

const ImageOffset = styled(Styled.OffsetBody)`
  padding: 0 3.5rem;

  @media (max-width: 1240px) {
    background-color: #ffffff;
    padding: 0;
  }
`

const ImageSubCaption = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
`

const Video = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  margin-top: 2rem;

`
const Frame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`



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
      Patrick: file(relativePath: {eq: "patrick-bezel.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200, maxHeight: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Styled.Container style={{marginTop: "64px"}}>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <Styled.ImageWrapper>
          <Img fluid={data.Patrick.childImageSharp.fluid} />
        </Styled.ImageWrapper>
        </div>
        <FlexBox>
          <BlockTitle>
            Information
          </BlockTitle>
          <BlockText>    
             <strong>Pool</strong> was the cumulative deliverable for an experience design project that I worked on as part of an Interaction Design class. I had the pleasure of collaborating with three other immensely talented individuals for this project. I'd love for you to check out their portfolios if you can: 
            <InlineLink target="_blank" href="https://abooneportfolio.com/" > Ashley Boone, </InlineLink>
            <InlineLink target="_blank" href="https://www.isabellearmstrong.me/">Isabelle Armstrong, </InlineLink>
            <InlineLink target="_blank" href="http://stephensherwood.me/">Stephen Sherwood. </InlineLink>
            <br/><br/>
            The brief for this project was to design an energy and water use tracking information system for home use that helps users to optimize their use of water and energy. A key theme we came upon during the course of our ideation was a general disconnect between present means of measuring resource consumption and our awareness of what we’re actually using; water meters are notoriously obtuse and utility bills often come in measurements that beyond dollars and cents, are unrelatable to most (it's hard to relate kilowatt hours and cubic feet to more tangible everyday ideas).

          </BlockText>
        </FlexBox>  
        <ImageOffset>
          <Img fluid={data.PoolIdeation.childImageSharp.fluid} />
          <ImageSubCaption>
            Ideation was a team effort – we brainstormed as a group and emerged with dozens of ideas on how to approach this problem. We sorted through the ideas we had and managed to synthesize them down to a couple of themes.
          </ImageSubCaption>
        </ImageOffset>
        <FlexBox>
          <BlockTitle>
            Individual Component
          </BlockTitle>
          <BlockText>    
            As my individual deliverable for this project, I designed a solution for our problem based on <strong>existing technologies that are available today.</strong> Having identified lengthy showers as one of the most frivolous uses of water, my solution was a voice activated, digitally controlled shower to help users better visualize and track their showers and prevent shower room karaokes – which have a tendency of causing users to lose track of time in the shower.
            <br/><br/>
            Our research indicated that most people simply had little idea of how much resources they were consuming until the bill comes in at the end of the month, which by itself is obtuse and provides little information of how water and energy has been consumed. By providing real-time feedback, the intent is to help users improve their awareness of consumption.
            <br/><br/>
            The shower works by having a screen display in the shower where users can visualize real time usage, view timers etc. while control is performed through a voice interface. (because wet fingers on a touch screen is generally a bad idea) I've made a video presentation that goes into detail on specific visualizations as well as how the system works.
            <br/><br/> 
            <Video>
              <Frame 
              src="https://www.youtube.com/embed/HbaYwjYpr-Q"
              />
            </Video>
            {/* <Video>
            <Frame src="https://player.vimeo.com/video/448334727" />
            </Video> */}

            {/* <Frame src="https://player.vimeo.com/video/448334727" frameborder="0" allow="autoplay; fullscreen" allowfullscreen/> */}
          </BlockText>
        </FlexBox>  
        <FlexBox>
          <BlockTitle>Pool</BlockTitle>
          <BlockText>
            For our team deliverable, we were to design a solution to the problem with <strong>the technologies of tommorow.</strong> Our proposed solution was a mixed reality experience that aims to visualize household energy and water usage in order to encourage responsible consumption. We called it POOL – kind of as a playful way to reflect the way our design aimed to visualize resource footprints as "pools of impact" on the ground.
            <br/><br/> 
            A core tenet of our design solution was about closing the feedback loop between resource usage and awareness of the actual impact of use. Current billing cycles give a macro-level overview of consumption but provides little to no micro-level fidelity that users can actually use to make meaningful changes in behavior. POOL aims to address this by leveraging mixed reality technologies to project real-time resource impact at the point of use to give users a better understanding of their consumption habits and behavior.
            <br/><br/> 
              I created a one page poster to showcase through storyboard what our design was about and how it worked.
          </BlockText>
        </FlexBox>
        {/* <Styled.OffsetBody>
          <Styled.BodyText>
            Our proposed solution is a mixed reality experience that aims to visualize household energy and water usage in order to encourage responsible consumption. We're calling it POOL –– kind of as a playful way to reflect the way our design aims to visualize resource footprints as "pools of impact" on the ground.
          </Styled.BodyText>
          <Styled.BodyText>
            A core tenet of our design solution was about closing the feedback loop between resource usage and awareness of the actual impact of use. Current billing cycles give a macro-level overview of consumption but provides little to no micro-level fidelity that users can actually use to make meaningful changes in behavior. POOL aims to address this by leveraging mixed reality technologies to project real-time resource impact at the point of use to give users a better understanding of their consumption habits and behavior. 
          </Styled.BodyText>
          <Styled.BodyText>
            As part of the final deliverables for our project, I created a one page poster that aims to showcase what our design was about and how it worked. 
          </Styled.BodyText>
        </Styled.OffsetBody> */}
        <ImageBackground>
          <Styled.ImageWrapper style={{maxWidth: "800px"}}>
            <Img fluid={data.PoolPoster.childImageSharp.fluid} />
          </Styled.ImageWrapper>
        </ImageBackground>
      </Styled.Container>
    </>
  )
}