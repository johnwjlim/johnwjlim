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
  }

  @media (max-width: 768px) {
    &:hover ${CaseCaption} {
      font-weight: 500;
      letter-spacing: -0.5px;
    }
  }
`;

const Filler = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #47C3A0;
  // background-color: #e8e8e8;
  // background-color: #f5f5f5;
  // background-color: #F6FFFA;
  opacity: 0.9;
`

const ImageCaption = styled.h1`
  position: absolute;
  color: #ffffff;
  // color: #333333;
  // color: #47c3a0;
  bottom: 3vh;
  left: 6vh;
  max-width: 36rem;
  // letter-spacing: -0.8px;
  // font-weight: 700;
  // font-size: 1.8rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    max-width: 20rem;
  }
`

const ImageParent = styled(ImageWrapper)`
  position: relative;
`

export default function Nimbus() {
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

  const [show, set] = useState(false)
  const transitions = useTransition(show, null, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto'},
    leave: { opacity: 0, height: 0 },
  })

  return (
    <CaseLink
      to="/nimbus/"
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
              <ImageCaption>How do you expand access to the outdoors for the increasingly interconnected society of today?</ImageCaption>
              {/* <ImageCaption>
                HOW DO YOU EXPAND ACCESS TO THE OUTDOORS FOR THE INCREASINGLY INTERCONNECTED SOCIETY OF TODAY
              </ImageCaption> */}
            </animated.div>
          )
        }
      </ImageParent>
      <CaseCaption>
        Nimbus: A mobile app design that aims to redefine access to the outdoors.
      </CaseCaption>
    </CaseLink>
  )
}
