import React, {useEffect} from "react"
import { Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import Img from "gatsby-image"
import {useTransition, animated} from 'react-spring'

import { Container, OffsetBody,  ImageWrapper, TextQuote, sections, SmallWidth, LargeWidth } from "../components/constants"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import MobileNav from "../components/mobile-nav"
import Nav from "../components/nav"

import Nimbus from "../components/home/nimbus-thumbnail"
import New from "../components/home/nimbus-thumbnail-new"
import GChallenge from "../components/home/g-thumbnail"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled(Container)`
  // width: 100%;
  margin: 0 5vw;

  @media (max-width: 1240px) {
    margin: 0;
  }
`;

const TitleBox = styled.div`
  // margin: 3.5rem 0;
  margin: 3rem 0 5rem;
`

const Title = styled.h3`
  color: #333333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Subtitle = styled(Title)`
  // font-size: 1.2rem;
  font-weight: 400;
  color: #565656;
  // color: #333333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileSubtitle = styled(Subtitle)`
  @media (max-width: 768px) {
    display: block;
  }
`

const CaseLink = styled(Link)`
  text-decoration: none;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(0.8);
  }
`;

const CaseCaption = styled.h3`
  // font-weight: 400;
  color: #333333;
  margin-top: 1rem;
  // letter-spacing: -0.3px;
`

const ScaledImage = styled(ImageWrapper)`
transition: transform 0.2s;

:hover {
  transform: scale(1.03)
}
`


export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // const dispatch = useDispatch()
  const menuState = useSelector(state => state.menuState)

  // useEffect(() => {
  //   dispatch({type: "CLOSE"})
  // },[])

  // function handleTabSwitch(value) {
  //   setActive(value);
  // }

  return (
    <Layout>
      <SEO title="John Lim" />
      <Header/>
      {
        menuState ?
        <MobileNav /> :
        <>
          <Wrapper>
            <Body>
              <TitleBox>
                <Subtitle>I'm a student studying Human Computer Interaction and Political Science at the University of Washington.</Subtitle>
                {/* <MobileSubtitle>Student of Human Computer Interaction at the University of Washington.</MobileSubtitle> */}
                <Title>I design and build mobile and web-based applications.</Title>
                {/* <h1>Hi people</h1> */}
                {/* <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p> */}
              </TitleBox>
              {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
              </div> */}
              {/* <Nimbus /> */}
              <New />
              <GChallenge />
            </Body>
            <Nav />
          </Wrapper>
          {/* <Link to="/nimbus/">Go to page 2 or page page or whatever</Link> */}
        </>
      }
  </Layout>
  )
}
