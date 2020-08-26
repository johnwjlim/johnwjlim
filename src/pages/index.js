import React, {useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import Img from "gatsby-image"
import {useTransition, animated} from 'react-spring'
import scrollTo from 'gatsby-plugin-smoothscroll'

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
import Pear from "../components/home/pear-thumbnail"
import Movley from "../components/home/movley-thumbnail"

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1240px) {
    margin-top: 76px;
  }
`;

const HeaderWrapper = styled.div`
  display: none;
  
  @media (max-width: 1240px) {
    display: block;
  }
`


const Body = styled(Container)`
  margin: 0 2rem;

  @media (max-width: 1240px) {
    margin: 0;
  }
`;

const TitleBox = styled.div`

  margin-bottom: 1rem; 
  margin-bottom: 12rem;
  // border-bottom: 1px solid #dddddd;

  margin-top: 16rem;
  @media (max-width: 768px) {
    // font-size: 1rem;
    margin: 3.5rem 0 5rem;
  }
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
  font-weight: 500;
  color: #333333;
  // font-size: 1.4rem;


  @media (max-width: 425px) {
    font-size: 1.25rem
  }

  &:hover {
    color: #8c8c8c;
    // font-weight: 800;
    // letter-spacing: -0.5px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;

`;

const Emoji = styled.span`
  font-size: 2rem;
  vertical-align: middle;
  // line-height: 0;
  // margin: 0;
`
const TitleStyle = styled.span`
  color: #dddddd;
  // color: #666666;
  font-weight: 300;
  // letter-spacing: -3px;
`

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;

`

const Arrow = styled.div`

  @media (max-width: 1240px) {
    display: none;
  }
`

const Divider =  styled.div`
  padding-top: 2rem;
  border-bottom: 1px solid #dddddd;
`

const Title = styled.h1`
  letter-spacing: -2px;  
  // letter-spacing: -2.5px;
  // font-size: 3.6rem;
  font-size: 3rem;
  // font-size: 3rem;
  // font-size: 2.3rem;
  font-weight: 600;
  color: #333333;
  // line-height: 1.1;
  // margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
    letter-spacing: -1.8px
  }
`

const Text = styled.p`
  // color: #b5b5b5;
  color: #666;
  // color: #c5c5c5;
  letter-spacing: -0.5px;
  font-weight: 400;
  max-width: 42rem;
  // max-width: 42rem;
  line-height: 1.45;
  // line-height: normal;
  font-size: 1.3rem;
  // background-color: #f5f5f5;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    letter-spacing: -0.3px
  }


`

const MicroText = styled.h4`
  color: #666;
  font-weight: 400;
  letter-spacing: -0.3px
`

const Dash = styled.div`
  margin: 2rem 0;
  // border-bottom: 1px solid #666;
  color: #333;
  font-weight: 700;
`

const Highlight = styled.span`
  // color: #333333; 
  // font-weight: 500;
`
const TitleFlip = styled.div`
  background-color: #333;
  color: #fff
`

const Paper = styled.div`
 background-color: #f0f0ec;
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
    <Layout style={{backgroundColor: "#f0f0ec"}}>
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
            <div style={{width: "100%"}}>
            <Body>
              <FauxHeader>
                <StyledLink to="/">
                </StyledLink>
              </FauxHeader>
              <TitleBox>
                <div data-sal="fade" data-sal-delay="150" data-sal-duration="1200" data-sal-easing="ease">
                  <Title>
                    <div>
                    Hello there, I'm John. &nbsp;<Emoji> 👋 </Emoji>
                    </div>
                  </Title> 
                </div>
                <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">

                  <Text>I'm an undergraduate student at the <Highlight>University of Washington</Highlight> majoring in <Highlight>Human Computer Interaction</Highlight> and enthralled by the factors that make us <Highlight>human.</Highlight></Text>

                  <Text>If not <Highlight>pushing pixels</Highlight> in a Seattle coffee shop, catch me <Highlight>chasing powder</Highlight> in my local ski hill or wherever there is good snow to be found.</Text>
                </div>

              </TitleBox>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease" id="nimbus" style={{paddingTop: "1rem"}}> 
               <New />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Movley />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Pool />
              </div>
           
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Pear />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <GChallenge />
              </div>
            </Body>
            </div>
              <Nav />
          </Wrapper>
        </>
      }
  </Layout>
  )
}
