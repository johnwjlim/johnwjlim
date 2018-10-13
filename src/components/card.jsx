import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImageWrapper = styled.div`;
  flex-basis: 512px;
  margin: 1rem;
`;

class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ImageWrapper>
        <Img fluid={this.props.image.childImageSharp.fluid} />
      </ImageWrapper>
      
    )
  }
}

export default Card;