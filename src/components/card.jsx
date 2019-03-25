import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const ImageWrapper = styled.div`;
  margin: 1rem;
  display: block;
`;

const TextCard = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h4`
  display: inline;
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  display: inline;
  font-family: proxima-nova, sans-serif;
  font-size: 22px;
  line-height: 1.2;
  color: #767676;
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 18px;
  }
`;

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Link to={this.props.link} style={{textDecoration: "none"}}>
        <ImageWrapper>
          <Img fluid={this.props.image.childImageSharp.fluid} />
        </ImageWrapper>
        <TextCard>
          <Title>{this.props.title}</Title>
          <Subtitle>{this.props.subtitle}</Subtitle>
        </TextCard>      
      </Link>
      
    )
  }
}

export default Card;