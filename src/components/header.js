import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Title = styled.h2`
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.45rem 1.0875rem;
`;

const Nav = styled.div`
  display: flex;
  margin-top: 0.4rem;
`;

const StyledLink = styled(Link)`
  color: #484848;
  text-decoration: none;
`

const Subtitle = styled.h4`
  font-family: "Avenir Next Light";
  color: #484848;
  margin: 0 1rem;
`;

class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        style={{
          marginTop: '0.6rem',
          marginBottom: '1.5rem',
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
