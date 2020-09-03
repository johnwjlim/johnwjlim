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

  transition: 0.2s;

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

  // @media (max-width: 768px) {
  //   &:hover ${CaseCaption} {
  //     font-weight: 500;
  //     letter-spacing: -0.5px;
  //   }
  // }

  &:hover ${CaseCaption} {
      // color: #666666;
    }
`;

const Filler = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 52rem;
  height: 4.5rem;
  // background-color: #47C3A0;
  // background-color: #FF6699;
  // background-color: #ffffff;
  // background-color: #F0AC83;
  // background-color: #FFB169;
  background-color: #ffffff;
  opacity: 1;
  // border-right: 3px #ffb169 solid;
  // border: none;

  @media (max-width: 1240px) {
    display: none;
  }
  
`

const ImageCaption = styled.h2`
  position: absolute;
  color: #111111;
  // color: #ff6699;
  // bottom: 3vh;
  // left: 6vh;
  bottom: 0;
  left: 0;
  // padding-top: 1rem;
  max-width: 50rem;
  letter-spacing: -0.7px;
  font-weight: 500;
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

export default function GThumbnail() {
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: {eq: "pool-thumbnail.png"}) {
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
      to="/pool/"
    >
      <ImageParent
        onMouseEnter={() => set(true)}
        onMouseLeave={() => set(false)}
      >
        <Img fluid={data.HeroImage.childImageSharp.fluid} />
        {
          transitions.map(({item, key, props}) => 
            item && <animated.div key={key} style={props}>
              <Filler>
                <ImageCaption>How might we reimagine household utilities tracking with the technologies of tommorow?</ImageCaption>
              </Filler>
              {/* <ImageCaption>How do you empower control over our water and energy consumption in a unique and engaging manner?</ImageCaption> */}
              {/* <ImageCaption>How might we reimagine household utilities tracking with the technologies of tommorow?</ImageCaption> */}
            </animated.div>
          )
        }
      </ImageParent>
      <CaseCaption>
        Encouraging responsible household resource consumption with mixed reality ideas.
      </CaseCaption>
      <CaseCaption style={{marginTop: "0.2rem", fontWeight: "400"}}>POOL</CaseCaption>
    </CaseLink>
  )

}

