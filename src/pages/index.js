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
  // margin: 0 2rem;

  // margin-bottom: 1rem; 
  // margin-bottom: 10rem;

  // margin-top: 10rem;
  // margin-top: 10rem;
  // margin-top: 80px;
  // margin-bottom: 14rem;
  margin-bottom: 10rem;
  margin-top: 8.5rem;
  // margin-top: 7rem;
  // margin-top: 5rem;

  // margin-bottom: 3.5rem;
  // margin-top: 12rem;

  // margin-top: 10rem;
  // margin-bottom: 12rem;

  // margin: 0 auto;

  margin-bottom: 10rem;
  margin-top: 8rem;
  // margin-left: 1rem;

  // margin-top: 6rem;


  @media (max-width: 1240px) {
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

`

const Emoji = styled.span`
  font-size: 1.75rem;
  vertical-align: middle;
  
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
  // letter-spacing: -5px;  
  letter-spacing: -2.3px;
  font-size: 3.5rem;
  font-weight: 500;
  color: #333;
  line-height: 1.45;
  margin-bottom: 1.5rem;

  line-height: 1.4;

  // font-weight: 500;
  // letter-spacing: -0px;
  // font-size: 3rem;

  // text-align: center;

    font-size: 3.2rem;
    letter-spacing: -2.5px;
  // font-weight: 400;
  // color: #979797;


  @media (max-width: 1340px) {
    font-size: 3rem;  
    letter-spacing: -1.6px;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    letter-spacing: -1.5px;
  }
`

const Text = styled.p`
  // color: #b5b5b5;
  color: #666666;
  letter-spacing: -0.5px;
  font-weight: 400;
  max-width: 41rem;
  max-width: 38.5rem;
  max-width: 39rem;
  // max-width: 56rem;
  font-size: 1.25rem;

  font-size: 1.2rem;
  max-width: 38rem;

  letter-spacing: -0.35px;
  line-height: 1.45;
  // color: #888888;

  font-size: 1.2rem;
  max-width: 38.rem;
  letter-spacing: -0.35px;
  line-height: 1.4;
  color: #666;

  // font-size: 1rem;

  // max-width: 45rem;  

  // text-align: center;
  // margin: 0 auto;
  // margin-bottom: 1rem;
  // max-width: 45rem;

  @media (max-width: 1024px) {
      font-size: 1.2rem;
      letter-spacing: -0.4px;
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
  color: #979797;
  // color: #333;
  // color: #1D4094;
  transition: 0.2s;
  text-decoration: none;
  // border-bottom: 2.5px solid #b5b5b5;


  :hover {
    color: #484848; 
    border-bottom: 4px solid #484848;
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
                    {/* HELLO THERE, I'M <Name to="/about">JOHN</Name><span className="blinking">.</span> &nbsp; */}
                    <Emoji> ✌️ </Emoji>
                    </div>
                  </Title> 
                </div>
                <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">
                  <Text>I'm an undergraduate student at the <Highlight>University of Washington</Highlight> majoring in <Highlight>Human Computer Interaction</Highlight> and enthralled by the factors that make us <Highlight>human.</Highlight></Text>
                  <Text>If not <Highlight>pushing pixels</Highlight> in a Seattle coffee shop, catch me <Highlight>chasing powder</Highlight> on my local ski hill or wherever there is good snow to be found.</Text>
                </div>
                
              </TitleBox>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease" id="nimbus"> 
               <New />
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
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <GChallenge />
              </div>
            </Body>
            </div>
              <Nav />
          </Wrapper>
        </>
      }
  </LayoutHack>
  )
}
