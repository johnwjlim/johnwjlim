import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Typist from '../components/typist'

const Subtitle = styled.p`
  font-family: "Avenir Next Light";
  font-weight: 100;
  font-size: 22pt;
  color: #484848;
  line-height: 1.3;
  max-width: 800px;
  text-rendering: optimizeLegibility;
`;

class IndexPage extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Typist
          strings={[
            // 'I am a front end web dev',
            // 'I am a UX designer'
            'Test legibility',
            'Test typist forward type',
            'Test typist backward type',
          ]}
        />
        <Subtitle>I'm currently studying Human Computer Interaction at the University of Washington.</Subtitle>
        {/* <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}

export default IndexPage
