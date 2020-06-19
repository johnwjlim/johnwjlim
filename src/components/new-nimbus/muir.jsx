import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../constants"

const Wrapper = styled.div`
padding: 7rem 2rem;
background-color: #111111;

@media (max-width: 1240px) {
  padding: 6rem 0rem;
}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 3.5rem auto;
  @media (max-width: 1240px) {
    padding: 0 3.5rem;
  }
`
const Headline = styled.h1`
  font-family: "Inter";
  letter-spacing: -0.5px;
  color: #ffffff;
  // line-height: 1;
  margin-top: 6rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`

const Text = styled.p`
  font-family: "Inter";
  letter-spacing: -0.25px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
`

const SubText = styled.p`
  font-family: "Inter";
  letter-spacing: -0.1px;
  color: #c5c5c5;
`

const ImageText = styled.h4`
  font-family: "Inter";
  letter-spacing: -0.1px;
  color: #c5c5c5;
  font-weight: 400;
  font-style: italic;
  margin-top: 0.5rem;
`

const Row = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display: block;
  }
`
const Col = styled.div`
  margin: 1.5rem 0;
  max-width: 30rem;

  @media (max-width: 1024px) {
    padding-left: 0;
    max-width: none;
  }
`
const RightCol = styled(Col)`
  padding-left: 6rem;
  @media (max-width: 1024px) {
    padding-left: 0;
  }
`

export default function Muir() {
  const data = useStaticQuery(graphql`
    query {
      MuirGrid: file(relativePath : {eq: "muir-grid.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Wrapper>
        <Container>
          <Styled.ImageWrapper>
            <Img fluid={data.MuirGrid.childImageSharp.fluid} />
            <ImageText><strong>from L – R:</strong> North Cascades National Park, WA; Multnomah Falls, OR</ImageText>
          </Styled.ImageWrapper>
          <Headline>"The mountains are calling and I must go."</Headline>
          <SubText>–– John Muir: Author, naturalist and founder of the Sierra Club</SubText>
          <Row>
            <Col>
              <Text>
                The great outdoors remain one of the few places on earth that is truly free and open to all. With over 200 million National Park visits in 2018 alone, the mountains are calling out to us more than ever before.
              </Text>
            </Col>
            <RightCol>
              <Text>However, the remote nature of outdoor lands also mean that it is largely exclusive to those who have access to cars. Free and open ultimately means little if most people can't get there to begin with.  </Text>
            </RightCol> 
          </Row>
        </Container>
      </Wrapper>
    </>
  )
}