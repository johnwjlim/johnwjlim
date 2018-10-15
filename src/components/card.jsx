import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Container = styled.span`
  // flex-basis: 100%;
  // flex: 1;
  // display: block;
`

const ImageWrapper = styled.div`;
  // flex-basis: max-content;
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
      <Link to='/page-2' style={{textDecoration: "none"}}>
        <Container>
          <ImageWrapper>
            <Img fluid={this.props.image.childImageSharp.fluid} />
          </ImageWrapper>
          <TextCard>
            <Title>{this.props.title}</Title>
            <Subtitle>{this.props.subtitle}</Subtitle>
          </TextCard>
        </Container>
      </Link>
      
    )
  }
}

export default Card;