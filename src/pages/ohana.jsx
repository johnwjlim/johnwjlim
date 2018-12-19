import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const Container = styled.div`
  margin-top: 5em`
;

class Ohana extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Container>
          <h3>about blank</h3>
        </Container>
      </Layout>
    )
  }
}

export default Ohana;

export const query = graphql`
  {
    hero:file(relativePath: {eq:"images/nimbus-hero.png"}) {
      childImageSharp {
        fluid (quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`