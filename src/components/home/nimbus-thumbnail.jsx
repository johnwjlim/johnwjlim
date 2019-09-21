import React, {useEffect, useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import Img from "gatsby-image"
import {useTransition, animated} from 'react-spring'

import { Container, OffsetBody,  ImageWrapper, TextQuote, sections, SmallWidth, LargeWidth } from "../constants"

const CaseLink = styled(Link)`
  text-decoration: none;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(0.8);
  }
`;

const CaseCaption = styled.h3`
  // font-weight: 500;
  color: #333333;
  margin-top: 1rem;
  // letter-spacing: -0.3px;
`

const ScaledImage = styled(ImageWrapper)`
  // transition: transform 0.2s;
  position: relative;

  :hover {
    // transform: scale(1.03)
  }
`

// const Title = styled.h3`
//   color: #333333;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `

// const Subtitle = styled(Title)`
//   font-weight: 400;
//   color: #767676;
//   margin-bottom: 0.5rem;
// `

const Filler = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #47C3A0;
  opacity: 0.6;
`

const ImageCaption = styled.h1`
  position: absolute;
  color: #ffffff;
  bottom: 4vh;
  left: 6vh;
  max-width: 36rem;
  letter-spacing: -0.3px;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    max-width: 20rem;
  }
`


export default function Nimbus() {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Alternate: file(relativePath: { eq: "nimbus-thumbnail-alternate.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [hover, setHover] = useState(false)
  const transitions = useTransition(hover, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto'},
    leave: { opacity: 0, height: 0 },
    // config: {tension: 200}
  })

  return (
    <CaseLink 
      to="/nimbus/"
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      {/* <ScaledImage>
        <Img fluid={data.HeroImage.childImageSharp.fluid} />
      </ScaledImage> */}
      <ScaledImage
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
      {/* {
        transitions.map(({item, key, props}) => item ?
        <animated.div style={props}>
          <Img fluid={data.Alternate.childImageSharp.fluid} />
          <Filler/>
          <ImageCaption>How do you expand access to the outdoors for the increasingly interconnected society of today</ImageCaption>
        </animated.div> :
        <animated.div style={props}>
          <Img fluid={data.HeroImage.childImageSharp.fluid} />
        </animated.div>
        )
      } */}
        <Img fluid={data.HeroImage.childImageSharp.fluid} />
        <Filler />
      </ScaledImage>
      <CaseCaption>
        Nimbus: A mobile app design that aims to redefine access to the outdoors.
      </CaseCaption>
    </CaseLink>
  )
}