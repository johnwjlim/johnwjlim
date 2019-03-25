import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import Resume from "../images/resume.pdf"

import styled from 'styled-components'

const Title = styled.h3`
  margin: auto 0;
  line-height: 1.7;
  font-weight: 500;
`;

const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  // padding: 1.45rem 1.0875rem;  
  padding: 1.2rem 1.0875rem;
  // padding: 1.2rem 0;
`;

const Nav = styled.div`
  display: flex;
  // margin-top: 0.35rem;
  padding-top: 0.32em;
`;

const StyledLink = styled(Link)`
  color: #484848;
  text-decoration: none;
`

const Subtitle = styled.p`
  font-family: "Proxima Nova Light";
  color: #484848;
  margin: 0 0.8rem;
  font-size: 18px;
`;

class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div
        style={{
          // marginTop: '0.5em',
          // marginBottom: '0.6rem',
        }}
      >
        {/* <Headroom style={{backgroundColor: "white"}} > */}
        <Fixed>
          <Container>
            <Title>
              <StyledLink to="/">
                {this.props.siteTitle}
              </StyledLink>
            </Title>
            <Nav>
              <StyledLink to="/about">
                <Subtitle>About</Subtitle>
              </StyledLink>
              <a href={"https://drive.google.com/file/d/1Ibt0CKeFX_oAH8hd85Pm5COmKF7WbiNT/view?usp=sharing"} target="_blank" style={{color: "#484848", textDecoration: "none"}}>
                <Subtitle>Resume</Subtitle>
              </a>
            </Nav>
          </Container>
        </Fixed>
        {/* </Headroom> */}
      </div>
    )
  }
}

export default Header
