import React, {useEffect} from "react"
import { Link, useStaticQuery } from "gatsby"
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
`

const Image = styled.div`
  max-width: 36rem;
  margin-bottom: 0.5rem;
`

const ImageOffset = styled(Styled.OffsetBody)`
  margin: 5rem 0;
  
  // margin-bottom: 3rem;
`


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
          <Styled.Container>
            {/* <Image>
              <Img fluid={data.HeroWide.childImageSharp.fluid} />
            </Image> */}
            <ImageOffset>
              <Image>
                <Img fluid={data.Hero.childImageSharp.fluid} />
              </Image>
              <p style={{fontSize: "0.9rem"}}><strong>Me, Jamie and Alice at the University District Farmer's Market</strong></p>
            </ImageOffset>
            <Styled.OffsetBody style={{marginTop: "3.5rem"}}>
              <Styled.BodyText>
                If you’ve tried hovering your mouse over the site title on the top left hand corner of the page, you may have noticed that it transitions from my name to “Make It Better”. This phrase was actually a working header that I used back when I was building this site; I was going through a bit of a rut at the time and “make it better” sort of became a motivational quote for me; a reminder to myself to take whatever I had on hand and make it a little better, a sort of a mantra to push myself to keep going every single day. <strong> Because while each small step and improvement may seem insignificant by itself, done repeatedly and consistently over time they eventually accumulate. </strong> And once aggregated, they come together to collectively form a significant improvement over what I started out with. 
              </Styled.BodyText>
              <Styled.BodyText>
                In a way, “make it better” also kind of underpins much of what we do as designers. We’re problem solvers. The things we do have the potential to better the lives of others. It doesn’t matter the field of design that we work in, or the scale of the problem that we’re trying to solve; at the end of the day, we’re really just trying to take an existing state of being and make it a little better. And if we’re not trying to make it better, why do we bother upending the status quo to begin with? :D
              </Styled.BodyText>
              <Styled.BodyText>
                <strong>I’m John, and I’m a student studying Human Computer Interaction at the University of Washington. </strong> If I’m not skiing, I can be found hunched over my laptop nursing my second latte of the day in a coffee shop up in North Seattle. Running is my release, cooking is my therapy, and a weird wildest dream of mine would be to cruise down the Champs-Élysées in Paris as a finisher in the Tour de France. 
              </Styled.BodyText>
            </Styled.OffsetBody>
          </Styled.Container>
          <Nav />
        </Wrapper>
      
      }
    </Layout>

  )
}