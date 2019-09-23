import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import {useTransition, animated} from 'react-spring'

import { ImageWrapper } from "../constants"

const CaseCaption = styled.h3`
  font-weight: 400;
  color: #333333;
  margin-top: 1rem;
  letter-spacing: -0.2px;

  @media (max-width: 1024px) {
    color: #333333;
    // font-weight: 500;
    font-size: 0.9rem;
  }
`

const CaseLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  margin: 5rem 0;
  display: block;

  :hover {
    cursor: pointer;
    transform: scale(0.98);
  }

  &:hover ${CaseCaption} {
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #333333;
    // color: #ffb7b7;
  }

  @media (max-width: 1024px) {
    margin: 3.5rem 0;
    margin-bottom: 0;
  }
`;

const Filler = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  // background-color: #47C3A0;
  background-color: #FF6699;
  // background-color: #ffffff;
  opacity: 0.8;
`

const ImageCaption = styled.h1`
  position: absolute;
  color: #ffffff;
  // color: #ff6699;
  bottom: 3vh;
  left: 6vh;
  max-width: 36rem;
  // letter-spacing: -0.5px;
  // font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    max-width: 20rem;
  }
`

const ImageParent = styled(ImageWrapper)`
  position: relative;
`

export default function GThumbnail() {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: {eq: "g-hero-image.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto'},
    leave: { opacity: 0, height: 0 },
  })

  return (
    <CaseLink
      to="/g-challenge/"
    >
      <ImageParent
        onMouseEnter={() => set(true)}
        onMouseLeave={() => set(false)}
      >
        <Img fluid={data.HeroImage.childImageSharp.fluid} />
        {
          transitions.map(({item, key, props}) => 
            item && <animated.div key={key} style={props}>
              <Filler />
              <ImageCaption>How do you help new students find and sustain connections in a new school and social environment</ImageCaption>
            </animated.div>
          )
        }
      </ImageParent>
      <CaseCaption>
        ClubFinder: Helping new students find a right fit amongst hundreds of campus organizations
      </CaseCaption>
    </CaseLink>
  )

}

