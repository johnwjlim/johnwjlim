import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Container = styled.div`
  margin: 2em auto;
  padding: 1.29rem;
  max-width: 1080px;
  border-top: solid 1px #dddddd;
`;

const Text = styled.p`
  font-family: "Proxima Nova Light";
  color: #767676;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const A = styled.a`
`;

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <Text>Built with <a href={"https://www.gatsbyjs.org/"} target={"_blank"}>GatsbyJS</a> in a bunch of coffee houses around Seattle. Pardon the dust, it's very much a work in progress.</Text>
      </Container>
    )
  }
}

export default Footer