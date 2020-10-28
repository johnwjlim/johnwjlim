import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"

import Animated from "../../images/pool.mp4"

const Wrapper = styled.div`
  padding: 0px 2.5rem 1.45rem;
  background-color: #101010;

  @media (max-width: 425px) {
    padding: 0 1.25rem 1.45rem;
  }
`
const Container = styled.div`
  padding: 6rem 4rem;
  margin: 0 auto;
  max-width: 1680px;

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }


  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: block;
  }
`

const Col = styled.div`
  flex: 1 1 40rem;
  padding: 2rem 4rem;

  @media (max-width: 1440px) {
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`

const SectionTitle = styled.h2`
  font-family: Sohne, sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  max-width: 28rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

const SectionText = styled.p`
  font-family: Sohne, sans-serif;
  font-weight: 400;
  color: #333;
  letter-spacing: 0;
  max-width: 40rem;
  margin-bottom: 2rem;
`


const FeatureTitle = styled(SectionTitle)`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  padding-top: 76%;
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

const Frame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    
`

export default function Individual() {
  const data = useStaticQuery(graphql`
    query {
      Shower: file(relativePath: {eq: "shower.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PatrickFull: file(relativePath: {eq: "patrick-1-bezel.jpg"}) {
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
      <Wrapper>
        <Container>
          <Row>
           <Col style={{flex: "1 1 32rem"}}>
              <SectionTitle style={{color: "#ffffff"}}>Individual Deliverable</SectionTitle>
            </Col>
            <Col>
              <SectionText style={{color: "#fff"}}>
              As my individual deliverable for this project, I designed a solution for our problem based on <strong style={{fontWeight: "600", color: "#fff"}}>existing technologies that are available today.</strong> I identified excessively lengthy showers as one of the most frivolous uses of water and crafted a design solution for a voice-activated, digitally controlled shower that aims to provide real-time feedback to help users improve their awareness of consumption and make positive changes to habits.
              </SectionText>  
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
              <Img fluid={data.Shower.childImageSharp.fluid} />
            </Col>
            <Col >
              <FeatureTitle  style={{color: "#fff"}}>
              Real time consumption information relayed at point of use.
              </FeatureTitle>
              <SectionText style={{color: "#fff"}}>Display in the shower provides real-time feedback of user consumption while control and input can be performed through a voice interface, thereby avoiding the use of wet fingers on a display. The idea is to keep users on track and prevent them from unintentionally engaging in a shower room karaoke session, thereby losing track of time and awareness of consumption.</SectionText>
            </Col>
        </Row>
        <Row>
          <Col >
            <VideoWrapper>
              <Video muted autoPlay loop>
                <source src={Animated} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </Video>
            </VideoWrapper>
          </Col>
          <Col>
            <FeatureTitle  style={{color: "#fff"}}>
            Key information and statistics provided at a glance.
            </FeatureTitle>
            <SectionText style={{color: "#fff"}}>
              Set a timer for the shower and watch the water level on the display fall as time runs down. 
              Water level on display also affords an easier visual reference for skimability. Also helpful for users who may struggle to read text or numbers without the aid of corrective lenses in a bathroom environment.
          </SectionText>
          </Col>
        </Row>
        <Row>
          <Col>
            <Img fluid={data.PatrickFull.childImageSharp.fluid} />
          </Col>
          <Col>
            <FeatureTitle  style={{color: "#fff"}}>
              Mobile interface to view trends and adjust settings.
            </FeatureTitle>
            <SectionText style={{color: "#fff"}}>
              Track usage statistics and trends, as well as establish predefined settings for the shower with mobile based interface. No need to meddle with the finer details whilst in the shower when the option exists to set in on a mobile device beforehand.
          </SectionText>
          </Col>
        </Row>
        <Container>
          <Col style={{paddingTop: "0"}}>
            <SectionText style={{margin: "2rem auto", color: "#fff"}} >
              As part of my deliverables for this segment of the project, I made a video that goes through the details of my design solution.
            </SectionText>
          </Col>
          <div style={{maxWidth: "640px", margin: "0 auto"}}>
            <VideoWrapper>
              <Frame 
              src="https://www.youtube.com/embed/HbaYwjYpr-Q"   
              />
            </VideoWrapper>
          </div>
        </Container>
      </Wrapper>
    </>
  )
}