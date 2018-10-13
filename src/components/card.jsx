import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: block;
`

const ImageWrapper = styled.div`;
  flex-basis: 512px;
  margin: 1rem;
  display: block;
`;

const TextCard = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  display: inline;
  font-family: "Avenir Next Medium";
`;

const Subtitle = styled.h3`
  display: inline;
  font-family: "Avenir Next Ultra Light";
  font-size: 1.5em;
  color: #767676;
`;

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <ImageWrapper>
          <Img fluid={this.props.image.childImageSharp.fluid} />
        </ImageWrapper>
        <TextCard>
          <Title>Nimbus </Title>
          <Subtitle>A mobile app design that aims to redefine access to the outdoors.</Subtitle>
        </TextCard>
      </Container>
      
    )
  }
}

export default Card;