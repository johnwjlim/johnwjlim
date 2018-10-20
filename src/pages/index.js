import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Typist from '../components/typist'

import Card from '../components/card'
import Line from '../components/line'

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.5rem;
  padding-top: 0;
`;

const Subtitle = styled.p`
  font-family: "Avenir Next Light";
  font-weight: 100;
  font-size: 18pt;
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
  // flex-wrap: wrap;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Column = styled.div`
  flex: 1;
`;

class IndexPage extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        {/* <Container> */}
          <Typist
            strings={[
              'I am a front end web dev',
              'I am a UX engineer'
            ]}
          />
          <Subtitle>I'm currently studying Human Computer Interaction at the University of Washington.</Subtitle>
          <CardGrid>
            <Column>
            <Card image={this.props.data.nimbus} title={"Nimbus "} subtitle={"A mobile app design that aims to redefine access to the outdoors"}/>
            </Column>
            <Line/>
            <Column>
              <Card image={this.props.data.nimbus} title={"Ohana "} subtitle={"An Amazon Alexa skill that aims to simplify the division of household chores"}/>
            </Column>
          </CardGrid>
        {/* </Container> */}
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
  }
`;
