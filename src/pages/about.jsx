import React, {useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import MobileNav from "../components/mobile-nav"
import Nav from "../components/nav"

import * as Styled from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 76px;
  
`

const Hero = styled.div`
  // max-width: 36rem;
  max-width: 28rem;
  margin: 0 3.5rem;
  margin-bottom: 0.5rem;
  margin-top: 2rem;

`

const Constraint = styled.div`
  max-width: 26rem;
`


// const ImageOffset = styled(Styled.OffsetBody)`
//   margin: 5rem auto;
  
// `

const ImageOffset = styled.div`
  // margin: 5rem auto;
  // width: 100%;
  // margin: 0 auto;

`

const Container = styled.div`
  margin: 0 auto;
`

const FlexContainer = styled(Styled.Container)`
  display: flex;
  margin: 8rem 2rem;
  justify-content: center;

  @media (max-width: 1024px) {
    margin: 4rem 0;
    display: block;
  }
`
const Text = styled.p`
  max-width: 33rem;
  margin: 0 auto;
  font-size: 1.1rem;
  letter-spacing: -0.3px;
  line-height: 1.45;
  color: #666;
  margin-bottom: 1.25rem;
`

const Highlight = styled.span`
  font-weight: 500;
  color: #333333;
` 
const ImageSubCaption = styled.p`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-weight: 500;
  line-height: 1.4;
`

const  OffsetBody = styled.div`
  margin: 2rem 7rem;

  @media (max-width: 1240px) {
    margin: 4rem 0;
  }
`;

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      HeroWide: file(relativePath: {eq: "me-wide.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Hero: file(relativePath: {eq: "me.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const menuState = useSelector(state => state.menuState)

  return (
    <Layout>
      <SEO title="About" />
      <Header />
      {
        menuState ?
        <MobileNav /> :
        <Wrapper>
          <FlexContainer >
            {/* <Image>
              <Img fluid={data.HeroWide.childImageSharp.fluid} />
            </Image> */}
            {/* <ImageOffset> */}
            <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
              <Hero>
                <Constraint>
                  <Img fluid={data.Hero.childImageSharp.fluid} />
                  <ImageSubCaption >Jamie, Alice and I at the University District Farmers Market in Seattle</ImageSubCaption>
                </Constraint>
              </Hero>
            </div>
            <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">
              <OffsetBody>
                <Text>
                  <Highlight>I'm John, and I'm a student of Human Computer Interaction at the University of Washington. </Highlight>
                </Text>
                <Text>
                  If not skiing, I can probably be found hunched over my laptop nursing my second latte of the day in a North Seattle coffee shop. Running is my release, cooking is my therapy, and a weird wildest dream of mine would be to cruise down the Champs-Élysées in Paris as a finisher in the Tour de France.
                </Text>
                <Text>
                  If you’ve tried hovering your mouse over the site title on the top left hand corner of the page, you may have noticed that it transitions from my name to “Make It Better”. It's a sort of personal mantra of mine; Because while each small step and improvement may seem insignificant by itself, done repeatedly and consistently over time they eventually come together to collectively form a significant improvement over what I started out with.
                </Text>     
                <Text>
                In a way, “make it better” also kind of underpins much of what we do as designers. We’re problem solvers – our job serves to better the lives of others. It doesn’t matter the field we work in, or the scale of the problem that we’re trying to solve; at the end of the day, we’re really just trying to take an existing state of being and make it a little better. And if we’re not trying to make it better, why do we bother to begin with? :D</Text> 
              </OffsetBody>
            </div>
          </FlexContainer>
          <Nav />
        </Wrapper>
      
      }
    </Layout>

  )
}