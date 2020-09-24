import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../constants"

import Gif from "../../images/pool.gif"
import Animated from "../../images/pool.mp4"

const LocalContainer = styled(Styled.Container)`
  margin-top: 64px;
`


const ImageBackground = styled.div`
  background-color: #111111;
  padding: 3.5rem 0;


  @media (max-width: 1120px) {
    padding: 0;
  }
`

const InlineLink = styled.a`
  color: #eeeeee;
  font-weight: 500;
  transition: 0.2s;
  // font-style: italic;
  text-decoration: none;
  // text-decoration: underline;
  border-bottom: 1px solid #eeeeee;
  letter-spacing: -0.15px;
  padding-bottom: 1px;

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
  padding: 3.5rem 1.75rem;
  // border-top: 1px solid #666666;

  @media (max-width: 1340px) {
    padding: 1.75rem;
  }


  // @media (max-width: 128px) {
  //   padding: 0rem;
  // }


  @media (max-width: 1240px) {
    display: block;
    margin: 3.5rem 0;
    padding: 0;
  }
`

const SpecialBox = styled(FlexBox)`
  padding: 1.75rem 3.5rem;
  padding: 1.75rem;
`

const BlockTitle = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.5;
  min-width: 16vw;
  margin-right: 7rem;
  margin-right: 7.5rem;
  letter-spacing: -0.3px;
  color: #ffffff;
  // font-size: 1.5rem;
  // letter-spacing: -1px;

  @media (max-width: 124px) {
    margin: 2.5rem 0;
  }
`

const BlockText = styled.p`
  max-width: 42rem;
  // max-width: 42rem;
  // margin: 0 8rem;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: -0.15px;
  // letter-spacing: -0.2px;

  color: #efefef; 
  color: #ffffff;

  // stupid shit incoming
  // font-weight: 500;
  // color: #ddd;

  @media (max-width: 1240px) {
    margin: 0;
  }
`

const HeroText = styled.h4`
  font-size: 2rem;
  line-height: 1.2;
  color: #ffffff;
  margin: 0;
  font-weight: 400;
  letter-spacing: -1.2px;
  margin-bottom: 2rem;

  @media (max-width: 1240px) {
    // letter-spacing: -0.8px;
  }
`

const Highlight = styled.strong`
  color: #ffffff;
  font-weight: 600;
`

const ImageOffset = styled(Styled.OffsetBody)`
  padding: 0 1.75rem;

  @media (max-width: 1340px) {
    padding: 1.75rem;
  }

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

const VideoWrapper = styled.div`
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
const Video = styled.video`
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
      PoolPoster: file(relativePath: { eq: "pool-poster.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Ideation: file(relativePath: {eq: "pool-ideation.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Patrick: file(relativePath: {eq: "patrick-bezel.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200, maxHeight: 1700) {
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
      <LocalContainer>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <Styled.ImageWrapper>
          <Img fluid={data.Patrick.childImageSharp.fluid} />
          <ImageSubCaption>Mobile app mockup as part of individual deliverable for project</ImageSubCaption>
        </Styled.ImageWrapper>
        </div>
        <SpecialBox style={{paddingTop: "3.5rem"}}> 
          <BlockTitle>
            Background
          </BlockTitle>
          <BlockText>    
            {/* <HeroText>
              How might we reimagine household utilities tracking with the technologies of tommorow?
            </HeroText> */}
            <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
            <Highlight>POOL</Highlight> was the cumulative deliverable for an experience design project that I worked on as part of an Interaction Design class. I had the pleasure of collaborating with three other immensely talented individuals for this project. I'd love for you to check out their portfolios: &nbsp; 
            <InlineLink target="_blank" href="https://abooneportfolio.com/">Ashley Boone</InlineLink>, &nbsp; 
            <InlineLink target="_blank" href="https://www.isabellearmstrong.me/">Isabelle Armstrong</InlineLink>, &nbsp;
            <InlineLink target="_blank" href="http://stephensherwood.me/">Stephen Sherwood</InlineLink>.
            <br/><br/>
            The brief for this project was to design an energy and water use tracking information system for home use that helps users to optimize their use of water and energy. 
            </div>
          </BlockText>
        </SpecialBox>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1500" data-sal-easing="ease">
        <SpecialBox style={{paddingBottom: "3.5rem"}}>
          <BlockTitle>
            Ideation
          </BlockTitle>
          <BlockText>
            Ideation revealed a general disconnect between present means of measuring consumption and awareness of what we’re actually using; water meters are notoriously obtuse and utility bills often come in measurements (say, kilowatt hour) that beyond dollars and cents, are unrelatable to most.
            <br/><br/>
            Our research also indicated that most people had little idea of how much they were using until the bill came in at the end of the month. And with utility bills only giving a macro-level overview of consumption with little to no micro-level fidelity on behavior, it's difficult for users to identify areas to make meaningful changes to improve consumption.
          </BlockText>
        </SpecialBox>  
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset>
          <Img fluid={data.Ideation.childImageSharp.fluid} />
          <ImageSubCaption>
            Ideation was a team effort – we undertook a series of ideation exercises (brainstorming, sketching, crazy 8s) as a group and emerged with dozens of ideas on how to approach this problem. We sorted through the ideas we had and managed to synthesize them down to a couple of themes, which we then carried forward for both our individual and team deliverables.
          </ImageSubCaption>
        </ImageOffset>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Individual Deliverable
          </BlockTitle>
          <BlockText>    
            As my individual deliverable for this project, I designed a solution for our problem based on <Highlight>existing technologies that are available today.</Highlight> 
            {/* <br/><br/> */}
            &nbsp; Having identified lengthy showers as one of the most frivolous uses of water, my design solution was a voice-activated, digitally controlled shower that aims to provide real-time feedback to help users improve their awareness of consumption and hopefully make changes to behavior.
            <br/><br/>
            <ImageWrapper>
              <div data-sal="fade" data-sal-delay="300" data-sal-duration="1500" data-sal-easing="ease">
                <div style={{margin: "1.75rem 0"}}>
                  <Img fluid={data.Shower.childImageSharp.fluid} />
                  <ImageSubCaption>Display in the shower provides real-time feedback of user consumption while control is performed through a voice interface. The idea is to keep users on track and prevent them from unintentionally engaging in a shower room karaoke session and losing all awareness of time.</ImageSubCaption>
                </div>
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
                <div style={{margin: "1.75rem 0"}}>
                  <Img fluid={data.Patrick.childImageSharp.fluid} />
                  <ImageSubCaption>Track usage statistics and trends, as well as establish predefined settings with the mobile based interface.</ImageSubCaption>
                </div>
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
              <div style={{margin: "1.75rem 0"}}>
              <VideoWrapper>
                {/* <VFrame autoplay controls
                src={Animated} type="video/mp4" allow="accelerometer; autoplay;"
                frameBorder="0"
                /> */}
                <Video muted autoPlay controls loop>
                  <source src={Animated} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </Video>
              </VideoWrapper>
                <ImageSubCaption>Water level visualization in shower display falls as time remaining on the timer decreases. </ImageSubCaption>
              </div>
              </div>
            </ImageWrapper>
            <br/>
            The shower works by having a screen display in the shower where users can visualize real time usage, view timers etc. while control is performed through a voice interface (because wet fingers on a touch screen is generally a bad idea). I made a video presentation that runs through how the system works.
            <br/><br/> 
            <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
            <VideoWrapper>
              <Frame 
              src="https://www.youtube.com/embed/HbaYwjYpr-Q"   
              />
            </VideoWrapper>
            </div>
          </BlockText>
        </FlexBox>  
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>The Headliner</BlockTitle>
          <BlockText>
            As our team deliverable, we were to design a solution to the problem with <Highlight>the technologies of tommorow.</Highlight> 
            {/* <br/><br/>  */}
            &nbsp; Building off the idea of real-time feedback, <Highlight>POOL</Highlight> is a mixed reality experience that projects real-time resource impact at the point of use to close the feedback loop between usage and awareness in order to provide users a better awareness of their consumption and encourage responsibility.
            <br/><br/> 
            We called it <Highlight>POOL</Highlight> as kind of as a playful way to reflect the way our design aimed to visualize resource footprints as "pools of impact" on the ground. I created a one page poster to showcase through storyboard what our design was about and how it worked.
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
           When designing POOL, we were given two rules: 1. Assume that any technology that we needed exists – so holograms, virtual reality contact lenses, wearables and anything we could think of were basically in play, and 2. No screens. 
          <br/><br/>
           If rule 1 encouraged me to think out of the box, rule 2 forced me to open my mind. Was I out of my comfort zone? Most definitely. Yet it was refreshing and exhilarating to be able to design unshackled by the constraints of feasibility. Putting POOL together was one of the most rewarding projects I got to be a part of – the ideas we got to throw around were almost out of this world –  and I am glad to have had the experience.
          </BlockText>         
        </FlexBox>
      </LocalContainer>
    </>
  )
}