import React, {useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
import Pool from "../components/home/pool-thumbnail"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 76px;
  // margin-top: 58px;
  // background-color: #;
  @media (max-width: 1240px) {
    margin-top: 76px;
  }
`;

const Body = styled(Container)`
  // width: 100%;
  margin: 0 2rem;
  margin-right: 15em;

  @media (max-width: 1240px) {
    margin: 0;
  }
`;

const TitleBox = styled.div`
  // margin: 5rem 0 10rem;
  // margin: 3.5rem 0 5rem;
  // margin: 0.7rem 0;
  // margin: 4rem 0;
  margin-bottom: 16rem; 
  // margin-top: 10rem;
  @media (max-width: 768px) {
    // font-size: 1rem;
    margin: 3.5rem 0 5rem;
  }
`

const Title = styled.h3`
  color: #333333;
  letter-spacing: -0.2px;
  // font-size: 1.75rem
  font-weight: 700;

  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`

const Subtitle = styled.h3`
  // font-size: 1.1rem;
  font-weight: 300;
  color: #666666;
  letter-spacing: -0.2px;
  // color: #333333;
  margin-bottom: 0.3rem;
  font-size: 1.3rem;

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

const NewTitle = styled.h1`
  letter-spacing: -1.75px;
  font-weight: 600;
  font-size: 2.3rem;
  // margin: 4rem 0; 
  margin-bottom: 4rem;
  // line-height: 1.23;

  // @media (max-width: 768px) {
  //   font-size: 1.25rem;
  // }
`
const NewSubtitle = styled.h4`
  letter-spacing: -0.4px;
  font-weight: 400;
  margin-bottom: 4rem;
  margin-top: 3.9rem;
  color: #333333;
  
  @media (max-width: 1240px) {
    display: none;
  }
`

const NewSubtext = styled.h6`
  margin-top: 1rem;
  letter-spacing: -0.2px;
  
  color: #dddddd;
  font-weight: 400;
`

const HeaderWrapper = styled.div`
  display: none;
  
  @media (max-width: 1240px) {
    display: block;
  }
`

const Greeting = styled.h2`
  letter-spacing: -1px;
  color: #979797;
  font-weight: 400;
  margin-bottom: 2rem;
`

const Sub = styled.h2`
  letter-spacing: -0.8px;
  color: #767676;
  font-weight: 600;
  margin-bottom: 2rem;
`

const FauxHeader = styled.div`
  position: fixed;
  padding: 2rem 0;
  margin: 0 4.5rem;
  top: 0;
  left: 0;
  z-index: 5;
  // max-width: 1300px;
  width: 90%;

  @media (max-width: 1240px) {
    display: none;
  }

`


const HeaderTitle = styled.h2`
  margin: 0;
  // margin-right: 3.6rem;
  letter-spacing: -0.8px;
  font-weight: 600;
  color: #111111;
  // font-size: 1.4rem;


  @media (max-width: 425px) {
    font-size: 1.25rem
  }

  &:hover {
    color: #979797;
    // font-weight: 800;
    // letter-spacing: -0.5px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;

`;




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
      <SEO title="Home" />
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      {/* <FauxHeader>
          <HeaderTitle>John Lim</HeaderTitle>
      </FauxHeader> */}
      {
        menuState ?
        <MobileNav /> :
        <>
          <Wrapper>
            <Body>
              <FauxHeader>
                <StyledLink to="/">
                  <HeaderTitle>John Lim</HeaderTitle>
                  {/* <NewSubtitle>Digital Product Designer</NewSubtitle> */}
                </StyledLink>
              </FauxHeader>
              <TitleBox>
                {/* <Subtitle>I'm a designer that codes studying Human Computer Interaction and Political Science at the University of Washington.</Subtitle> */}
                {/* <MobileSubtitle>Student of Human Computer Interaction at the University of Washington.</MobileSubtitle> */}
                {/* <Subtitle>I'm an avid skier, amateur runner and I make little rectangles on a screen from time to time.</Subtitle> */}
                {/* <Title>I'm a designer that codes driven by impact and seeking the intersection between technology and humanity.</Title> */}
                {/* <Title>I strive to craft engaging experiences at the intersection of technology and humanity.</Title> */}
                {/* <Greeting>Hello there, I'm John:</Greeting> */}
                <NewSubtitle>Product Designer</NewSubtitle> 
                <NewTitle>Powder Hound ⛷️<br/>Pavement Pounder 🏃<br/>Pixel Pusher from time to time 👨‍🎓</NewTitle>
                <Sub>Enthralled by human factors. Sustained by plenty of coffee.</Sub>
                
                
                {/* <NewSubtitle style={{}}>I am a ⛷️ powder hound, 🏃 pavement pounder, and I push pixels 🧑‍🎓 from time to time.</NewSubtitle>
                <NewSubtitle style={{color: "#a5a5a5"}}>Enthralled by human factors. Sustained by plenty of coffee.  </NewSubtitle>
                <NewSubtext>Tiny touch of adrenaline helps too. Anything worth doing in life is worth overdoing.</NewSubtext>  */}
              </TitleBox>
              {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
              </div> */}
              {/* <Nimbus /> */}
              <New />
              <Pool />
              <GChallenge />
            </Body>
            <div style={{marginTop: "76px"}}>
              <Nav />
            </div>
          </Wrapper>
        </>
      }
  </Layout>
  )
}
