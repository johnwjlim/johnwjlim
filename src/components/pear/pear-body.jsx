import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../constants"

import Gif from "../../images/pool.gif"
import Animated from "../../images/pool.mp4"

const LocalContainer = styled(Styled.Container)`
  margin-top: 88px;
  width: 100%;
`


const ImageBackground = styled.div`
  background-color: #111111;
  padding: 3.5rem 0;

  @media (max-width: 1120px) {
    padding: 0;
  }
`

const InlineLink = styled.a`
  color: #111111;
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
  font-size: 1.125rem;
  min-width: 16vw;
  margin-right: 8rem;
  letter-spacing: -0.3px;
  color: #333333;

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
  // color: #666666;
  @media (max-width: 1240px) {
    margin: 0;
  }
`


const HeroText = styled.h4`
  font-size: 2rem;
  line-height: 1.15;
  color: #333333;
  margin: 0;
  font-weight: 400;
  letter-spacing: -1.5px;

  @media (max-width: 1240px) {
    // letter-spacing: -0.8px;
  }
`

const Highlight = styled.strong`
  color: #333333;
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
  letter-spacing: 0;
  color: #666666;
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

const Italic = styled.span`
    font-style: italic;
    color: #666666;
`


export default function Intro() {
  const data = useStaticQuery(graphql`
    query {
      Hero: file(relativePath: {eq: "pear-hero.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          } 
        }
      }
      Frames: file(relativePath: {eq: "pear-frames.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      StyleGuide: file(relativePath: {eq: "style-guide.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Components: file(relativePath: {eq: "components.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Mockups: file(relativePath: {eq: "pear-mockups.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Maps: file(relativePath: {eq: "pear-maps-mockups.png"}) {
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
          <Img fluid={data.Hero.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>Screen mockups using Pear design system components</ImageSubCaption>
        </Styled.ImageWrapper>
        </div>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Pear OS
          </BlockTitle>
          <BlockText>   
          As part of a Mobile Application Design class, My team and I designed a reimagined OS for a foldable device with a split screen experience as its key feature. We called it <Highlight>Pear,</Highlight> kind of as a playful twist on the word “pair”. I led the team working on the design system for much of the project duration followed by a short stint working with the maps team.
          <br/><br/>
          <Italic>
            Note: As this project was done before the launch of the Samsung Galaxy Flip, we could arguably stake a claim as pioneers of the foldable device space. Just saying.
          </Italic>
         </BlockText>
        </FlexBox>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset>
          <Img fluid={data.Frames.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
              These were rough mockups and frames of the device that we were designing for. We were encouraged to account for different states of folds and device orientation in our designs. 
         </ImageSubCaption>
        </ImageOffset>
        </div>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Design Systems
          </BlockTitle>
          <BlockText>
          With multiple teams working across 15 seperate core apps to build Pear OS, it was critical that we had a single, living, breathing, source of truth that we could all fall back on to ensure consistency across our designs. I led the design systems team where I built components and established the look and feel of our design language.
          </BlockText>
        </FlexBox>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset>
          <Img fluid={data.StyleGuide.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
              Rough style guide of colors and typefaces used in Pear. 
         </ImageSubCaption>
        </ImageOffset>
        </div>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Component Library
          </BlockTitle>
          <BlockText>
            As part of our deliverables, we created a component library with what we thought would be most commonly used components. This helped ensure adherence to design language and consistency across the various apps as teams would be able to utilize common components to rapidly mockup their screens.
          </BlockText>
        </FlexBox>
        <ImageOffset style={{marginBottom: "1.75rem"}}>
          <Img fluid={data.Components.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
            A sampler of some of the components put together as part of deliverables. We included many of the usual suspects including nav bars, list items, tool bars, cards, search bar, buttons, switches, inputs, forms etc. 
          </ImageSubCaption>
        </ImageOffset>
        </div>
        <ImageOffset style={{marginTop: "1.75rem"}}>
          <Img fluid={data.Mockups.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
            We'd also put together a small number of generic mockups to serve as a visual reference or mood board of sorts, to help provide a sense of the look and feel of the design language.
          </ImageSubCaption>
        </ImageOffset>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            A Slight Detour
          </BlockTitle>
          <BlockText>
            As the design system matured and got to a good place, I had the opportunity to jump in with the team working on a Maps app where we explored ways and means to utilize the expanded screen real estate that a foldable device afforded us.
          </BlockText>
        </FlexBox>
        <ImageOffset>
          <Img fluid={data.Maps.childImageSharp.fluid} />
        </ImageOffset>
        </div>
        <FlexBox>
          <BlockTitle>
            Reflections
          </BlockTitle>
          <BlockText>
            This was my first time building a design system and it was definitely a valuable learning experience. One of the design principles that we adopted with Pear was to be distinctive. This actually came about after our first iteration got mixed reviews and was cited as "being too similar to what's out there".
            <br/><br/>
            Following that review, I took the initiative to redraw the whole thing. Using the colors "Liquid Metal" and "Cerulean" (identified in style guide above) as starting points, I laid the foundations of Pear in its current form and built it around the idea of cool minimalism. 
            <br/><br/>
            Being my first design system, there are many things that I would have done differently. I didn't understand how to establish a consistent vertical tempo, there were inconsistencies that do not quite fit the visual style etc.
            But most crucially I don't think Pear was as versatile as it needed to be, especially as it had to service 15 core applications with vastly differing goals and objectives. I had inadvertently put a voice in Pear that may have hamstrung some of the other teams. 
            <br/><br/>
            Nonetheless, this was an extraodinarily rewarding experience and seeing other people create apps to fit within the ecosystem was invaluable in helping me understand the role that design systems play and the need to consider the bigger picture in whatever we do.
          </BlockText>
        </FlexBox>
      </LocalContainer>
    </>
  )
}