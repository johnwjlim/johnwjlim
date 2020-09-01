import React, {useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import Img from "gatsby-image"

import Layout from "../components/layout-dark"
import SEO from "../components/seo"
import Header from "../components/header-dark"
import MobileNav from "../components/mobile-nav"
import Nav from "../components/nav-dark"

import * as Styled from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 76px;
  padding-bottom: 10rem;
  
`

const Hero = styled.div`
  // max-width: 36rem;
  // width: 38rem; 
  width: 28rem;
  max-width: 26rem;
  margin: 0 3rem;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  padding-right: 8rem;

  @media (max-width: 1440px) {
    padding-right: 4rem;
  }

  @media (max-width: 1380px) {
    padding-right: 2rem;
    max-width: 24rem;
  }

  @media (max-width: 1240px) {
    margin: 0 auto;
    padding: 0;
  }

`




const Container = styled.div`
  margin: 0 auto;
`

const FlexContainer = styled(Styled.Container)`
  display: flex;
  margin: 3.5rem;
  margin-top: 10rem;
  justify-content: center;

  @media (max-width: 1380px) {
    margin-left: 0;
  }

  @media (max-width: 1240px) {
    margin: 4rem 0;
    display: block;
  }
`
const Text = styled.p`
  max-width: 28rem;
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: -0.1px;
  line-height: 1.5;
  color: #666;
  color: #dddddd; 
  margin-bottom: 1.25rem;
`

const Highlight = styled.span`
  font-weight: 500;
  color: #333333;
  color: #ffffff;
` 
const ImageSubCaption = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-weight: 300;
  line-height: 1.45;
  letter-spacing: 0;
  color: #ddd;
  // text-align: center;
`

const OffsetBody = styled.div`
  margin: 2rem 0rem;

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
      Hero: file(relativePath: {eq: "franklin-falls.jpg"}) {
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
                <Img fluid={data.Hero.childImageSharp.fluid} />
                <ImageSubCaption >"Grit your teeth and smile" – smiling because I knew my legs were about to get really cold after the snow melts and soaks through my cotton joggers.</ImageSubCaption>
              </Hero>
            </div>
            <div data-sal="fade" data-sal-delay="300" data-sal-duration="1200" data-sal-easing="ease">
              <OffsetBody>
                <Text>
                  <Highlight>I'm John, and I study Human Computer Interaction and Political Economy at the University of Washington.</Highlight>
                </Text>
                <Text>
                With a background in business, product and policy, I’m a generalist at heart. Product design was the only place where I could see myself melding all of my disparate interests into a cohesive role.
                </Text>
                <Text>
                I thrive on engaging in bigger picture strategic and product thinking. Yet as a designer, I’m also fascinated by the complexities of what makes us human – why are some things intuitive to us and others not? I believe in designing intentionally; Because the decisions we make have consequences, and because less is more and every element we put on should have a reason for being. 
                </Text>
                <Text>
                  If not skiing, I can probably be found hunched over my laptop nursing my second latte of the day in a North Seattle coffee shop. Running is my release, cooking is my therapy, and a weird wildest dream of mine would be to cruise down the Champs-Élysées in Paris as a finisher in the Tour de France.
                </Text>
                {/* <Text>
                  If you’ve tried hovering your mouse over the site title on the top left hand corner of the page, you may have noticed that it transitions from my name to “Make It Better”. It's a sort of personal mantra of mine; Because while each small step and improvement may seem insignificant by itself, done repeatedly and consistently over time they eventually come together to collectively form a significant improvement over what I started out with.
                </Text>     
                <Text>
                In a way, “make it better” also kind of underpins much of what we do as designers. We’re problem solvers – our job serves to better the lives of others. It doesn’t matter the field we work in, or the scale of the problem that we’re trying to solve; at the end of the day, we’re really just trying to take an existing state of being and make it a little better. And if we’re not trying to make it better, why do we bother to begin with? :D
                </Text>  */}
              </OffsetBody>
            </div>
          </FlexContainer>
          <Nav />
        </Wrapper>
      
      }
    </Layout>

  )
}