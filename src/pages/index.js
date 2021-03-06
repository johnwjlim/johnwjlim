import React, {useEffect, useState} from "react"
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
import Shopee from "../components/home/shopee"


const LayoutHack = styled.div`
  margin: 0 auto;
  // max-width: 1680px;
  padding: 0px 2.5rem 1.45rem;
  position: relative;
  // background-color: #fafafa;
  // background-color: #eeeeee;
  box-sizing: border-box;
  background-color: #fefefe;

  @media (max-width: 425px) {
    padding: 0 1.25rem 1.45rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1240px) {
    margin-top: 76px;
  }
`;

const HeaderWrapper = styled.div`
  // display: none; 
  
  @media (max-width: 1240px) {
    display: block;
  }
`


const Body = styled(Container)`
  margin: 0 2rem;
  // margin: 0;

  @media (max-width: 1240px) {
    margin: 0;
  }
`;

const TitleBox = styled.div`

  margin: 0 auto;


  padding-left: 0.6rem;
  padding-bottom: 2.8rem;
  margin-top: 7.4rem;
  padding-right: 1rem;

  padding-bottom: 2rem;  
  margin-top: 7.75rem;

  margin-top: 8rem;
  padding-bottom: 4.5rem;



  // display: flex;
  // justify-content: space-between;
  // border-bottom: 1px solid #c5c5c5;


  @media (max-width: 1240px) {
    // font-size: 1rem;
    margin: 3.5rem 0 5rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 4rem;
    display: block;
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

`

const Emoji = styled.span`
  font-size: 1.5rem;
  // line-height: 1.5;
  // padding-bottom: 5rem;
  // vertical-align: top;
  vertical-align: middle;

  @media (max-width: 1440px) {
    // margin-right: 10vw;
    font-size: 1.5rem;
  }

  
`
const Title = styled.h1`

  font-size: 44px;
  letter-spacing: -1.75px;
  color: #333;
  color: #3b3e43;
  font-weight: 500;
  line-height: 1.2;
  // margin-bottom: 2rem;

  // font-size: 2.5rem;

  font-size: 42px;
  letter-spacing: -1px;
  line-height: 1.2;
  


  @media (max-width: 1340px) {
    font-size: 2.5rem;  
    letter-spacing: -1.2px;
    margin-right: 8vw;
    line-height: 1.4;
  }

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    letter-spacing: -1.2px;
    // margin-bottom: 3rem;
  }
`

const Text = styled.p`
  font-size: 20px;
  max-width: 40rem;
  line-height: 1.35;
  letter-spacing: -0.23px;
  color: #565656;

  font-size: 19px;
  letter-spacing: -0.1px;
  max-width: 38rem;
  line-height: 1.45;

  font-size: 18px;
  max-width: 36.5rem;
  letter-spacing: -0.05px;


  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: -0.05px;
    // margin-left: 8rem;
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

const Name = styled(Link)`
  // font-family: "Founders Grotesk";
  color: #333;
  color: #3b3e43;
  // color: #666;
  // color: #1D4094;
  transition: 0.2s;
  text-decoration: none;
  // border-bottom: 2.5px solid #b5b5b5;
  // border-bottom: 3px solid #333;


  :hover {
    // color: #484848; 
    border-bottom: 5px solid #888;
    color: #888;
  }

`
const Subtitle = styled.p`
  margin-top: 2.5rem;
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
  const dispatch = useDispatch()
  const menuState = useSelector(state => state.menuState)

  const [menu, setMenu] = useState(false)

  // useEffect(() => {
  //   console.log(menuState)
  // },[menuState])



  useEffect(() => {
    dispatch({type: "CLOSE"})
  },[])

  return (
    <LayoutHack >
      <SEO title="Home" />
      <HeaderWrapper>
        <Header/>  
      </HeaderWrapper>
      {/* <FauxHeader>
          <HeaderTitle>John Lim</HeaderTitle>
      </FauxHeader>  */}
      {
        menuState ?
        <MobileNav /> :
        <>

          <Wrapper>
            <div style={{width: "100%"}}>
            {/* <Subtitle>Digital Product Designer</Subtitle> */}
            <Body>           
              {/* <FauxHeader>
                <StyledLink to="/">
                  <h4>John Lim</h4>
                </StyledLink>
              </FauxHeader> */}
              {/* <p>Product Designer</p> */}
              <TitleBox>
                <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
                  <Title>
                    <div>
                    Hello there, I'm <Name to="/about">John</Name><span className="blinking">.</span> &nbsp;
                    <Emoji> 👋 </Emoji>
                    </div>
                  </Title> 
                </div>
                <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">
                  <Text>I'm an undergraduate student at the <Highlight>University of Washington</Highlight> majoring in <Highlight>Human Computer Interaction</Highlight> and enthralled by the things that make us <Highlight>human.</Highlight></Text>
                  <Text>If not <Highlight>pushing pixels</Highlight> in a Seattle coffee shop, catch me <Highlight>chasing powder</Highlight> on my local ski hill or wherever good snow's to be found.</Text>
                  {/* <Text>–––</Text> */}
                  </div>
                
              </TitleBox>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease" id="nimbus"> 
               <New />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Shopee />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Pool />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Pear />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Movley />
              </div>
              {/* <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <GChallenge />
              </div> */}
            </Body>
            </div>
              <Nav />
          </Wrapper>
        </>
      }
  </LayoutHack>
  )
}
