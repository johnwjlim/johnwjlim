import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useSelector } from "react-redux"
import Img from "gatsby-image"
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/header"

import * as Styled from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 76px;
`

const ConstrainedImage = styled(Styled.ImageWrapper)`
  max-width: 1024px;
`

const ImageWithMargin = styled(Styled.ImageWrapper)`
  margin-top: 3.5rem;
`

export default function SmartShower() {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: {eq: "383-hero.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image1: file(relativePath: {eq: "383-1.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image2: file(relativePath: {eq: "383-2.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const menuState = useSelector(state => state.menuState)
  const [active, setActive] = useState(0)

  function handleTabSwitch(value) {
    setActive(value);
  }

  return (
    <Layout>
      <SEO title="Smart  Shower" />
      <Header pageTitle={"Smart Shower"} />
      {
        menuState ? 
         <MobileNav active={active} onChange={handleTabSwitch}/> :
        <Wrapper>
          {
            <Styled.Container>
              <Styled.ImageWrapper>
                <Img fluid={data.HeroImage.childImageSharp.fluid} />
              </Styled.ImageWrapper>
              <Styled.FlexWrapper>
                <Styled.InfoPanel>
                  <h1 style={{marginBottom: "0.5rem"}}>Smart Shower</h1>
                  <p style={{lineHeight: "1.4"}}>Experience Design</p>
                </Styled.InfoPanel>
                <Styled.IntroBody>
                  <Styled.TextBlock>
                    <p><strong>The What</strong></p>
                    <p>A voice activated, digitally controlled shower.</p>
                  </Styled.TextBlock>
                  <Styled.TextBlock>
                    <p><strong>The Why</strong></p>
                    <p>
                    The initial brief called for ways to think about household energy and water consumption. Excessively long showers appear to be one of the most frivolous uses of water, and also one of the most avoidable. The intent is to tackle shower room karaoke syndrome and help users be more conscious about their water use in the shower
                    </p>
                  </Styled.TextBlock>
                  <Styled.TextBlock>
                    <p><strong>And the How</strong></p>
                    <p>
                    Full authority digital shower control that accepts inputs through voice or a connected mobile device. Real time feedback is provided through a physical display in the shower or through a voice-based interface. Post activity feedback is delivered through mobile device
                    </p>
                  </Styled.TextBlock>
                </Styled.IntroBody>
              </Styled.FlexWrapper>
              <Styled.ImageWrapper>
                <Img fluid={data.Image1.childImageSharp.fluid} />
              </Styled.ImageWrapper>
              <ImageWithMargin>
                <Img fluid={data.Image2.childImageSharp.fluid} />
              </ImageWithMargin>
            </Styled.Container>
          }
          <Nav active={active} onChange={handleTabSwitch}/>
        </Wrapper>

    
      }
      
    </Layout>
  )
}