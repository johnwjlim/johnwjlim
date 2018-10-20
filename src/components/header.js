import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Title = styled.h3`
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1080px;
  padding: 1.45rem 1.0875rem;
`;

const Nav = styled.div`
  display: flex;
  // margin-top: 0.35rem;
  padding-top: 0.33em;
`;

const StyledLink = styled(Link)`
  color: #484848;
  text-decoration: none;
`

const Subtitle = styled.h4`
  font-family: "Avenir Next Light";
  color: #484848;
  margin: 0 0.8rem;
  font-size: 16px;
`;

class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        style={{
          marginTop: '0.5em',
          marginBottom: '0.6rem',
        }}
      >
        <Container>
          <Title>
            <StyledLink to="/">
              {this.props.siteTitle}
            </StyledLink>
          </Title>
          <Nav>
            <StyledLink to="/">
              <Subtitle>About</Subtitle>
            </StyledLink>
            <StyledLink to="/">
              <Subtitle>Resume</Subtitle>
            </StyledLink>
          </Nav>
        </Container>
      </div>
    )
  }
}

export default Header
