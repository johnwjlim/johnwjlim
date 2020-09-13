import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import {useTransition, animated} from 'react-spring'

import { ImageWrapper } from "../constants"


const CaseCaption = styled.h4`
  font-weight: 500;
  margin: 0;
  margin-top: 1rem;
  letter-spacing: -0.2px;
  max-width: 55rem;
  transition: 0.3s

`

const CaptionWrapper = styled.div`
  // ${CaseLink}:hover & {
  //   opacity: 0;
  // }
`

const CaseLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  margin: 5rem 0;
  margin-bottom: 0;
  display: block;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }

  @media (max-width: 1024px) {
    margin: 3.5rem 0;
    margin-bottom: 0;
  }

  &:hover ${CaseCaption} {
    color: #333333;
  }


`;

const Filler = styled.div`
  position: absolute;
  // top: 0;
  bottom: 0;
  left: 0;
  width: 52rem;
  height: 4.5rem;
  // background-color: #47C3A0;
  // background-color: #e8e8e8;
  background-color: #ffffff;
  // background-color: #fafafa;
  // background-color: #F6FFFA;
  opacity: 1;
  border: none;

  @media (max-width: 1240px) {
    display: none;
  }
`

const ImageCaption = styled.h2`
  position: absolute;
  color: #333333;
  // color: #111;
  // color: #333333;
  // color: #47c3a0;
  // bottom: 3vh;
  // left: 6vh;
  bottom: 0;
  left: 0;
  max-width: 50rem;
  letter-spacing: -0.7px;
  font-weight: 500;
  // font-weight: 400;
  // font-size: 1.8rem;
  margin: 0;
  line-height: 1.2;

  // @media (max-width: 1024px) {
  //   font-size: 1.5rem;
  //   max-width: 20rem;
  // }
  
  :hover {
    // color: #666666;
  }
  @media (max-width: 1240px) {
    display: none;
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
              <ImageCaption>How might we expand access to the outdoors for the increasingly interconnected society of today?</ImageCaption>
              {/* <ImageCaption>Nimbus: A mobile app design that aims to expand access to the outdoors</ImageCaption> */}
              {/* <ImageCaption>
                HOW DO YOU EXPAND ACCESS TO THE OUTDOORS FOR THE INCREASINGLY INTERCONNECTED SOCIETY OF TODAY
              </ImageCaption> */}
            </animated.div>
          )
        }
      </ImageParent>
      <CaptionWrapper>
        <CaseCaption>
        Expanding access to the outdoors by bringing community to your fingertips.
          {/* Nimbus: A mobile app design that aims to redefine access to the outdoors. */}
          {/* How do you expand access to the outdoors for the increasingly interconnected society of today? */}
        </CaseCaption>
        <CaseCaption style={{marginTop: "0.2rem", fontWeight: "400"}}>Nimbus</CaseCaption>
      </CaptionWrapper>
    </CaseLink>
  )
}
