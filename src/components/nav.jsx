import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.nav`
  width: 15em;
  // z-index: 10;
  @media (max-width: 768px) {
    display: none; 
  }
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 3.5rem;

`
const ListItem = styled.li`
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.7;
  transition: 0.2s;

  :hover {
    // text-decoration: underline;
    color: #ffb7b7;
  }
`



const StyledText = styled.a`
  line-height: 1.7;
  color: #111111;
  margin: 0;
  font-weight: 500;

  :hover {
    // text-decoration: underline;
    // cursor: pointer;  
  }   
`

const GreyText = styled(StyledText)`
  color: #767676;
  font-weight: 400;
  transition: 0.2s;

  :hover {
    color: #ffb7b7;
    cursor: pointer;  
  }  
`

const DetailText = styled.p`
  color: #767676;
  margin-bottom: 3.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    display: none
  }
`

const FooterText = styled.p`
  color: #767676;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.3;  
  width: 15em;
`

const InlineLink = styled.a`
  text-decoration: none;
  transition: 0.2s;
  color: #565656;
  font-weight: 400;
  :hover {
    color: #ffb7b7;
    cursor: pointer;  
  }  
`


const Footer = styled.footer`
  margin-top: 5rem;
  width: 15em;
  padding-left: 2.5rem;
`

const FlexHack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
const Row = styled.div``

export default function Nav(props) {
  const [sections, setSections] = useState(props.components)

  function handleComponents() {
    if (sections) {
      return sections.map((section, index) => {
        if (index === props.active) {
          return (
            <ListItem key={index} onClick={() => props.onChange(index)}>
              <StyledText>{sections[index]}</StyledText>
            </ListItem>
          )
        } else {
          return (
            <ListItem key={index} onClick={() => props.onChange(index)}>
              <GreyText style={{margin: "0", lineHeight: "1.7"}}>{sections[index]}</GreyText>
            </ListItem>
          )
        }
      })
    }
  }

  return (
    <Container>
      <FlexHack>
        <Row>
          <List>
            <ListItem>
              <StyledLink to="/">Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about">About</StyledLink>
            </ListItem>
            <ListItem>
              {/* <StyledLink to="/resume">Resume</StyledLink> */}
              <StyledLink 
                as="a"
                target="_blank"
                href="https://drive.google.com/file/d/1YC67UCd-V7o0Y1ZEp1y9AnxiSgOHiiy7/view?usp=sharing"
              >
                Resume
              </StyledLink>
            </ListItem>
          </List>
          <List>
            {/* <DetailText>Nimbus <br/> Mobile App Design</DetailText> */}
            {
              handleComponents()
            }
          </List>
        </Row>
        <Row>
          <List>
            <ListItem>
              <StyledLink 
                as="a"
                href="https://github.com/johnwjlim/"
                target="_blank"
              > 
                Github
              </StyledLink>
            </ListItem>
            <ListItem>
             <StyledLink 
                as="a"
                href="mailto:wjlim@uw.edu"
                target="_blank"
              > 
                wjlim@uw.edu
              </StyledLink>
            </ListItem>
          </List>
          <Footer>
            <FooterText>
              Hand-coded with ❤️on
              <InlineLink href="https://www.gatsbyjs.org" target="_blank"> React</InlineLink>, 
              <InlineLink href="https://redux.js.org" target="_blank"> Redux</InlineLink>, 
              <InlineLink href="https://www.styled-components.com" target="_blank"> styled-components</InlineLink>, 
              and a little magic from 
              <InlineLink href="https://www.react-spring.io" target="_blank"> react-spring</InlineLink>.
            </FooterText> 
            <FooterText>
              View <InlineLink href="https://github.com/johnwjlim/johnwjlim" target="_blank"> the source</InlineLink>.
            </FooterText>
          </Footer>
        </Row>
      </FlexHack> 
    </Container>
  )
}