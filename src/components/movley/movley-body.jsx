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
  font-size: 1.25rem;
  min-width: 16vw;
  margin-right: 8rem;
  letter-spacing: -0.4px;
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
  letter-spacing: -0.1px; 
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
const SpecialBox = styled(FlexBox)`
  padding: 0 3.5rem;
  // margin: 0

`

export default function Intro() {
  const data = useStaticQuery(graphql`
    query {
      Hero: file(relativePath: {eq: "movley-hero.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200, maxHeight: 1600) {
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
      Maps: file(relativePath: {eq: "pear-maps-mockups.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Overview: file(relativePath: {eq: "movley-overview.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Dashboard: file(relativePath: {eq: "movley-dashboard.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DatePicker: file(relativePath: {eq: "movley-date-picker.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CampaignsMain: file(relativePath: {eq: "movley-campaigns-main.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CampaignsGraph: file(relativePath: {eq: "movley-campaigns-graph.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DesignSystems: file(relativePath: {eq: "movley-design-systems.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Walkthrough: file(relativePath: {eq: "movley-product-walkthrough.jpg"}) {
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
          <ImageSubCaption style={{textAlign: "center"}}>I interned for Movley in Summer 2020 (COVID season) as a UX Designer</ImageSubCaption>
        </Styled.ImageWrapper>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <SpecialBox>
          <BlockTitle>
            Overview
          </BlockTitle>
          <BlockText>   
            Movley is an early stage startup helping brands streamline their supply chain and manufacturing processes through providing on-the-ground quality inspections. One of the projects I worked on was to design an <strong>Affiliate Portal</strong> for partners that are key sources of client referrals for Movley.
            <br/><br/>
             As sole designer, I got to engage in the full spectrum of product design from conceptualization, to creating prototypes of various fidelities and testing them to further refine the product.  
         </BlockText>
        </SpecialBox>
        </div>
        <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">
          <SpecialBox>
            <BlockTitle>
              The Challenge
            </BlockTitle>
            <BlockText>   
              Affiliate referrals are key sources of new clients for Movley. However, Movley did not have an existing portal available for affiliates to manage their work; Current affiliates were receiving a direct payout based on their commission total for the month. Other than the dollar amount in the bank, there was no way for them to track or manage their performance in any form. 
              <br/><br/>
              {/* The goal was therefore to create a portal where affiliates could view their historical performance, analyze trends, view and manage their payouts, and even allow them to create custom campaigns for better micro-level management. */}
            </BlockText>
          </SpecialBox>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset>
          <Img fluid={data.Overview.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
            I documentated my WIP of various elements and components to keep the developers up to speed. Includes screen descriptions and interaction flows of various application states.
         </ImageSubCaption>
        </ImageOffset>
        </div>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Dashboard
          </BlockTitle>
          <BlockText>
            I laid out the dashboard with a key question in mind: "Why do affiliates work with Movley?". Discounting sheer altruism, the answer more often than not seemed to be along the lines of "to make some money". Therefore, in addition to providing a broad overview of performance across measured categories, I wanted to hero the key performance metric which was the actual referrals and commissions as much as possible.
          </BlockText>
        </FlexBox>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset style={{marginTop: "1.75rem"}}>
          <Img fluid={data.Dashboard.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
              Affiliate portal dashboard with referrals and commissions brought in focus. Graph enables users to rapidly identify trends and performance over time.
         </ImageSubCaption>
        </ImageOffset>
        </div>
        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Date Picker
          </BlockTitle>
          <BlockText>
          One of the main design goals was to give users the ability to measure performance over a specified time period. While considering various options to implement that goal, I decided on having a global date picker as opposed to one that is local to a particular component. 
            <br/><br/>
          The reasons for that are two-fold: 
          <br/><br/> 1. It didn't quite make sense to be comparing say, the performance of Campaign A over a week against the performance of Campaign B over two months. It's apples vs. oranges.
          <br/><br/> 2. It removes potential for confusion. By having it as a single source of truth, there is little uncertainty over what time period a user is viewing at any point in the portal.
          </BlockText>
        </FlexBox>
        <ImageOffset style={{marginTop: "1.75rem"}}>
          <Img fluid={data.DatePicker.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>
            Placing the date picker in the header gives user a consistent location to adjust date ranges across all pages. 
          </ImageSubCaption>
        </ImageOffset>
        </div>

        <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <BlockTitle>
            Managing Campaigns
          </BlockTitle>
          <BlockText>
            One of our most asked-for features was for a means of creating multiple campaigns such that users could better manage performance over different channels. Each campaign would then have its own unique referral URL and can be tracked individually.
          </BlockText>
        </FlexBox>
        <ImageOffset style={{marginBottom: "1.75rem"}}>
          <Img fluid={data.CampaignsMain.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>Create new campaigns or view existing campaign performance</ImageSubCaption>
        </ImageOffset>
        <ImageOffset >
          <Img fluid={data.CampaignsGraph.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>Toggle between various plots on graph to compare trends across campaigns</ImageSubCaption>
        </ImageOffset>
        </div>
        <FlexBox>
          <BlockTitle>
            Design Systems
          </BlockTitle>
          <BlockText>
            Prior to handing off, I built a component library with some styling guidelines used for the portal. With no formal style guide or design system for the organization in place, the intent is to use this library as a reference and grow it into a more fully fleshed out design system in the future.
            <Img style={{margin: "3.5rem 0"}} fluid={data.DesignSystems.childImageSharp.fluid} />
          </BlockText>
        </FlexBox>
        <ImageOffset >
          <Img fluid={data.Walkthrough.childImageSharp.fluid} />
          <ImageSubCaption style={{textAlign: "center"}}>Product walkthrough and interview conducted with one of Movley's top affiliates.</ImageSubCaption>
        </ImageOffset>
        <FlexBox>
          <BlockTitle>
            Conclusion
          </BlockTitle>
          <BlockText>
            This project has been handed off to developers and is currently in production. This was one of a number of projects that I worked on during my internship.
            <br/><br/>
            While there were numerous lessons learnt from this experience, communication and initiative were probably my biggest takeaways. As a solo designer, I had to actively take a stand and be the advocate for design. I had to be able to articulate design decisions and justify them across various stakeholders. I had to work closely with product to synthesize business & product objectives into cohesive design goals.
            <br/><br/>
            This ties into initiative as well because as a solo designer, it's easy to be surface level and take whatever is coming down from product without actually developing an understanding of the problem. I had to take the initiative to conduct additional exploratory research such as user interviews and competitor analysis to develop my own feel for the problem space.  
            <br/><br/>
            Overall, this was an extremely valuable learning opportunity and I am grateful for the experience.
          </BlockText>
        </FlexBox>
      </LocalContainer>
    </>
  )
}