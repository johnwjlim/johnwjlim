import React, {useState} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../components/constants"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/new-header"

import Muir from "../components/new-nimbus/muir"



export default function Nimbus() {
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)

  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MuirGrid: file(relativePath : {eq: "muir-grid.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Layout = styled.div`
    margin: 0 auto;
    max-width: 1680px;
    padding: 0px 0rem 1.45rem;
    position: relative;
    // background-color: #f9f9f9;

    @media (max-width: 425px) {
      padding: 0 0rem 1.45rem;
    }
  
  `

  const Container = styled.div`
  padding: 6rem 2rem;
  // align-items: center;

  @media (max-width: 1240px) {
    padding: 6rem 0rem;
  }
  `

  const Row = styled.div`
    display: flex;
    max-width: 1280px;
    padding: 10rem 3.5rem;
    margin: 0 auto;

    @media (max-width: 1240px) {
      padding: 6rem 1rem;
    }

    @media (max-width: 1024px) {
      display: block;
    }

  `

  const Col = styled.div`
    margin: 3.5rem; 
    max-width: 36rem;
    @media (max-width: 1240px) {
      margin: 3.5rem;
    }
  `

  // const MuirCol = styled(Col)`
  //   width: 100%;
  //   @media (max-width: 1024px) {
  //     width: auto;
  //   }
  // `

  const MuirCol = styled.div`
    max-width: 1280px;
    margin: 3.5rem auto;
    @media (max-width: 1240px) {
      padding: 0 3.5rem;
    }

  `

  const Headline = styled.h1`
    font-family: "Inter";
    letter-spacing: -0.5px;
    color: #333333;
    // line-height: 1;
    margin-bottom: 1.1rem;
    // font-weight: 700;
  `

  const Text = styled.p`
    font-family: "Inter";
    letter-spacing: -0.25px;
    color: #484848;
    font-size: 18px;
  `

  const SubHeader = styled.h4`
    font-family: "Inter";
    letter-spacing: -0.1px;
    color: #767676;
    font-weight: 400;
  `

  const SubText = styled.p`
  font-family: "Inter";
  letter-spacing: -0.1px;
  color: #333333;
  `

  const Quote = styled.p`
    font-family: "EB Garamond";
    font-size: 31px;
    margin-bottom: 0.5rem;
    color: #111111;
  `


  return (
    
    <>
      <Layout> 
      <SEO title="Nimbus" />
      <Header pageTitle={"Nimbus"} />
      <Styled.ImageWrapper>
        <Img fluid={data.HeroImage.childImageSharp.fluid} />
      </Styled.ImageWrapper>
      <Row>
        <Col>
          <Headline>Nimbus is</Headline>
          <Text>
            a mobile experience that aims to solve the transportation challenges of outdoor exploration by connecting adventurers with one another and having them share transport to outdoor recreation areas.
          </Text>
        </Col>
        <Col>
          <SubHeader>
            MY ROLE
          </SubHeader>
          <SubText><strong>Product Designer</strong><br/>Vision & Strategy, User Research, Prototype & Testing <br/> Interaction and Visual Design</SubText>
        </Col>
      </Row>
      {/* <Row style={{backgroundColor: "#f5f5f5", alignItems: "flex-end"}}>
        <MuirCol>
          <Styled.ImageWrapper>
            <Img fluid={data.Muir.childImageSharp.fluid} />
          </Styled.ImageWrapper>  
        </MuirCol>
        <Col style={{maxWidth: "34rem"}}>
          <Quote>"The mountains are calling and I must go"</Quote>
          <SubText style={{fontStyle: "oblique", color: "#767676"}}>–– John Muir, founder of the Sierra Club</SubText>
          <br/>
          <br/>
          <Text style={{color: "#333333"}}>The great outdoors is one of the few places on earth that is truly free and open to all. </Text>
        </Col>
      </Row> */}
      <Muir/>

  
    </Layout>
    </>
  )
}