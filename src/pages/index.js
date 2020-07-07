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
  // margin: 0 3rem;
  margin-bottom: 1rem; 
  // border-bottom: 1px solid #dddddd;

  // margin-top: 10rem;
  @media (max-width: 768px) {
    // font-size: 1rem;
    margin: 3.5rem 0 5rem;
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
  letter-spacing: -4px;
  font-weight: 700;
  font-size: 4rem;
  // margin: 4rem 0; 
  margin-bottom: 4rem;
  line-height: 0.99;
  color: #111111;
  // color: #4353ff;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    letter-spacing: -2px
  }

  // @media(max-width: 768px) {
  //   letter-spacing: -2px;
  //   font-size: 1.5rem;
  // }
`
const NewSubtitle = styled.h4`
  letter-spacing: -0.2px;
  font-weight: 400;
  margin-bottom: 21rem;
  margin-top: 3.8rem;
  color: #666;
  
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

const Sub = styled.h3`
  letter-spacing: -0.3px;
  color: #333333;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 1024px) {
    font-size: 1rem;
    letter-spacing: -0.2px;
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
  font-weight: 600;
  color: #111111;
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
  letter-spacing: -1.8px;
  font-size: 2.6rem;
  font-weight: 700;
  color: #333;
  line-height: normal;
  // margin-bottom: 2rem;
`

const Text = styled.p`
  // color: #b5b5b5;
  color: #888;
  letter-spacing: -0.6px;
  font-weight: 300;
  max-width: 32rem;
  line-height: 1.35;
  // line-height: normal;
  font-size: 1.3rem;
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
  color: #111;
  font-weight: 400;
`
const TitleFlip = styled.div`
  background-color: #333;
  color: #fff
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
                <NewSubtitle>Digital Product Designer</NewSubtitle> 
                {/* <NewTitle>
                  <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease"> 
                    <TitleStyle>John is</TitleStyle><br/>
                    <TitleStyle>A Pavement Pounder. </TitleStyle> <br/>
                  </div>
                    A Pixel Pusher. <Emoji> 🏃 👨‍🎓 ⛷</Emoji> <br/> 
                  <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease"> 
                    <TitleStyle>A Powder Hound. </TitleStyle> 
                  </div>
                </NewTitle>
                <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease"> 
                  <Sub>Enthralled by the things that make us human. <br/> Sustained by excessive amounts of coffee.</Sub>
                  <Arrow >
                    <div class="arrow" onClick={() => scrollTo('#nimbus')}/>
                  </Arrow>
                </div> */}
                <div data-sal="fade" data-sal-delay="150" data-sal-duration="1200" data-sal-easing="ease">
                  <Title>
                    <div>
                    Hello, I'm John. &nbsp;<Emoji> 👋 </Emoji>
                    </div>
                  </Title> 
                </div>
                <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">
                  {/* <Text>
                    I study <Highlight>Human Computer Interaction</Highlight> at the <Highlight>University of Washington</Highlight> enthralled by the things that make us <Highlight>human</Highlight> and driven by the 
                    pursuit of the elusive <Highlight>intersection</Highlight> between <Highlight>technology and humanity.</Highlight> 
                  </Text> */}
                  <Text>I'm a student at the <Highlight>University of Washington</Highlight> majoring in <Highlight>Human Computer Interaction</Highlight> and enthralled by the things that make us <Highlight>human.</Highlight></Text>
                  {/* <Text>
                    If not <Highlight>skiing,</Highlight> I can be found <Highlight>grinding</Highlight> out the miles on the gravel or <Highlight>pushing pixels</Highlight> while nursing my second coffee of the day in one of the many <Highlight>coffee</Highlight> shops around <Highlight>Seattle.</Highlight>
                  </Text> */}
                  <Text>If not <Highlight>pushing pixels</Highlight> in a Seattle coffee shop, catch me <Highlight>chasing powder</Highlight> in the local ski hill or wherever there is good snow to be found.</Text>
                </div>
                <div data-sal="fade" data-sal-delay="400" data-sal-duration="1200" data-sal-easing="ease">
                  <Dash>
                    ––
                  </Dash>
                </div>
                <div data-sal="fade" data-sal-delay="400" data-sal-duration="1200" data-sal-easing="ease">
                  <MicroText>
                    Scroll down to view select projects 
                  </MicroText>
                  <Arrow >
                      <div class="arrow" onClick={() => scrollTo('#nimbus')}/>
                  </Arrow>
                </div>
              </TitleBox>
              <Divider />
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease" id="nimbus" style={{paddingTop: "1rem"}}> 
               <New />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <Pool />
              </div>
              <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease"> 
                <GChallenge />
              </div>
              {/* </div> */}
            </Body>
            {/* <div style={{marginTop: "64px"}}> */}
              <Nav />
            {/* </div> */}
          </Wrapper>
        </>
      }
  </Layout>
  )
}
