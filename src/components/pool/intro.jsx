import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../constants"

import Gif from "../../images/pool.gif"
import Animated from "../../images/pool.mp4"


const ImageBackground = styled.div`
  background-color: #111111;
  padding: 3.5rem 0;

  @media (max-width: 1120px) {
    padding: 0;
  }
`

const InlineLink = styled.a`
  color: #ffffff;
  font-weight: 500;
  transition: 0.2s;
  // font-style: italic;
  text-decoration: underline;
  // border-bottom: 1px solid #ffffff;
  letter-spacing: -0.2px;

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
  letter-spacing: -0.5px;
  color: #ffffff;

  @media (max-width: 124px) {
    margin: 2.5rem 0;
  }
`

const BlockText = styled.p`
  max-width: 45rem;
  // max-width: 42rem;
  margin: 0 8rem;
  font-size: 1.1rem;
  line-height: 1.45;
  letter-spacing: -0.3px;
  color: #dddddd;
  @media (max-width: 1240px) {
    margin: 0;
  }
`

const Highlight = styled.strong`
  color: #ffffff;
  // font-weight: 600;
`

const ImageOffset = styled(Styled.OffsetBody)`
  padding: 0 3.5rem;

  @media (max-width: 1240px) {
    padding: 0;
  }
`

const ImageSubCaption = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: #c5c5c5;
  letter-spacing: 0;
`

const Video = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  margin-top: 3.5rem;

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
const VFrame = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    
`

const ImageWrapper = styled.div`
    margin: 3.5rem auto;
    width: 100%;
    @media (max-width: 1024px) {
      margin: 3.5rem auto;
    }
`

const GIF = styled.img`
    height: auto;
    width: auto;
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
      Shower: file(relativePath: {eq: "shower.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Julie: file(relativePath: {eq: "pool-thumbnail.png"}) {
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
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <Styled.ImageWrapper>
          <Img fluid={data.Patrick.childImageSharp.fluid} />
          <ImageSubCaption>Mobile app mockup as part of individual deliverable for project</ImageSubCaption>
        </Styled.ImageWrapper>
        </div>
        <FlexBox>
          <BlockTitle>
            Background
          </BlockTitle>
          <BlockText>    
             <Highlight>POOL</Highlight> was the cumulative deliverable for an experience design project that I worked on as part of an Interaction Design class. I had the pleasure of collaborating with three other immensely talented individuals for this project. I'd love for you to check out their portfolios if you can: &nbsp; 
            <InlineLink target="_blank" href="https://abooneportfolio.com/">Ashley Boone</InlineLink>, &nbsp; 
            <InlineLink target="_blank" href="https://www.isabellearmstrong.me/">Isabelle Armstrong</InlineLink>, &nbsp;
            <InlineLink target="_blank" href="http://stephensherwood.me/">Stephen Sherwood</InlineLink>.
            <br/><br/>
            The brief for this project was to design an energy and water use tracking information system for home use that helps users to optimize their use of water and energy. 
            <br/><br/>
            A key theme we came upon during the course of our ideation was a general disconnect between present means of measuring resource consumption and our awareness of what we’re actually using; water meters are notoriously obtuse and utility bills often come in measurements that beyond dollars and cents, are unrelatable to most (it's hard to relate kilowatt hours and cubic feet to more tangible everyday ideas).

          </BlockText>
        </FlexBox>  
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset>
          <Img fluid={data.PoolIdeation.childImageSharp.fluid} />
          <ImageSubCaption>
            Ideation was a team effort – we undertook a series of ideation exercises as a group and emerged with dozens of ideas on how to approach this problem. We sorted through the ideas we had and managed to synthesize them down to a couple of themes, which we then carried forward for both our individual and team deliverables.
          </ImageSubCaption>
        </ImageOffset>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Individual Deliverable
          </BlockTitle>
          <BlockText>    
            As my individual deliverable for this project, I designed a solution for our problem based on <Highlight>existing technologies that are available today.</Highlight> Having identified lengthy showers as one of the most frivolous uses of water, my solution was a voice activated, digitally controlled shower to help users better visualize and track their showers.
            <br/><br/>
            Our research also indicated that most people simply had little idea of how much they were using until the bill came in at the end of the month, which by itself was obtuse and
            gave only give a macro-level overview of consumption with little to no micro-level fidelity on behavior and trends that users could actually use to make meaningful changes in behavior.
            <br/><br/>
            My design solution is a voice-activated, digitally controlled shower that aims to provide real-time feedback to help users improve their awareness of consumption and hopefully make changes to behavior.
            <br/><br/>
            <ImageWrapper>
              <div style={{margin: "1.75rem 0"}}>
                <Img fluid={data.Shower.childImageSharp.fluid} />
                <ImageSubCaption>Display in the shower provides real-time feedback of user consumption while control is performed through a voice interface. The idea is to keep users on track and prevent them from unintentionally engaging in a shower room karaoke session and losing all awareness of time.</ImageSubCaption>
              </div>
              <div style={{margin: "1.75rem 0"}}>
                <Img fluid={data.Patrick.childImageSharp.fluid} />
                <ImageSubCaption>Track usage statistics and trends, as well as establish predefined settings with the mobile based interface.</ImageSubCaption>
              </div>
              <div style={{margin: "1.75rem 0"}}>
              <Video>
                <VFrame autoplay controls
                src={Animated} type="video/mp4" allow="accelerometer; autoplay;"
                frameBorder="0"
                />
              </Video>
                <ImageSubCaption>Water level visualization in shower display falls as time remaining on the timer decreases. </ImageSubCaption>
              </div>
            </ImageWrapper>
            <br/>
            The shower works by having a screen display in the shower where users can visualize real time usage, view timers etc. while control is performed through a voice interface (because wet fingers on a touch screen is generally a bad idea). I made a video presentation that runs through how the system works.
            <br/><br/> 
            <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
            <Video>
              <Frame 
              src="https://www.youtube.com/embed/HbaYwjYpr-Q"
              />
            </Video>
            </div>
          </BlockText>
        </FlexBox>  
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>The Headliner</BlockTitle>
          <BlockText>
            For our team deliverable, we were to design a solution to the problem with <Highlight>the technologies of tommorow.</Highlight> Our proposed solution was a mixed reality experience that aims to visualize household energy and water usage in order to encourage responsible consumption. We called it <Highlight>POOL</Highlight> – kind of as a playful way to reflect the way our design aimed to visualize resource footprints as "pools of impact" on the ground.
            <br/><br/> 
            Building off the idea of real-time feedback, the core tenet of our design was about closing the feedback loop between usage and awareness of the impact of use. <Highlight>POOL</Highlight> leverages emerging mixed reality technologies to project real-time resource impact at the point of use to give users a better understanding of their consumption habits and behavior.
            <br/><br/> 
              I created a one page poster to showcase through storyboard what our design was about and how it worked.
          </BlockText>
        </FlexBox>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageBackground>
          <Styled.ImageWrapper style={{maxWidth: "800px"}}>
            <Img fluid={data.PoolPoster.childImageSharp.fluid} />
          </Styled.ImageWrapper>
        </ImageBackground>
        </div>
        <FlexBox>
          <BlockTitle>End Notes</BlockTitle>
          <BlockText>
           For our team deliverable, we were given two rules: 1. Assume that any technology that we needed exists – so holograms, virtual reality contact lenses and anything we could think of were basically in play, and 2. No screens. 
          <br/><br/>
           If rule 1 encouraged me to think out of the box, rule 2 forced me to open my mind. Was I out of my comfort zone? Most definitely. Yet it was refreshing and exhilarating to be able to design unshackled by the constraints of feasibility. Putting POOL together was one of the most rewarding projects I got to be a part of – the ideas we got to throw around were almost out of this world –  and I am glad to have had the experience.
          </BlockText>         
        </FlexBox>
      </Styled.Container>
    </>
  )
}