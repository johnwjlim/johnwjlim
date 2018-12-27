import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Typist from '../components/typist'

import Header from '../components/header'
import Card from '../components/card'
import Line from '../components/line'


const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.5rem;
  padding-top: 2em;
`;

const Subtitle = styled.p`
  font-family: "Proxima Nova Light";
  font-size: 20pt;
  color: #767676;
  line-height: 1.3;
  max-width: 700px;
  text-rendering: optimizeLegibility;

  @media (max-width: 768px) {
    font-size: 16pt;
  }

  @media (max-width: 425px) {
    font-size: 12pt;
  }
`;

const CardGrid = styled.div`
  display: flex;
  margin-top: 4em;
  justify-content: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

class IndexPage extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Container>
          <Typist
            strings={[
              'I am a front end web dev',
              'I am a UX designer'
            ]}
          />
          <Subtitle>I'm currently studying Human Computer Interaction at the University of Washington.</Subtitle>
          <CardGrid>
            <Column>
              <Card image={this.props.data.nimbus} link={'/nimbus'} title={"Nimbus "} subtitle={"A mobile app design that aims to redefine access to the outdoors"}/>
            </Column>
            <Line/>
            <Column>
              <Card image={this.props.data.ohana} link={'/ohana'} title={"Ohana "} subtitle={"An Amazon Alexa skill that aims to simplify the division of household chores"}/>
            </Column>
          </CardGrid>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage;

export const query = graphql`
  query {
    nimbus:file(relativePath: {eq:"images/placeholder-thumb.png"}) {
      childImageSharp {
        fluid(maxWidth:512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ohana:file(relativePath: {eq:"images/ohana-thumb.png"}) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
