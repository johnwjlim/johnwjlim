import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

const Container = styled.nav`
  width: 16em;
  position: fixed;   
  height: 91%;
  right: 0;
  margin: 0 1rem;
  margin-left: 0;
  margin-top: 64px;
  @media (max-width: 1240px) {
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
  line-height: 1.68;
  transition: 0.2s;
  // font-size: 0.95rem;

  :hover {
    // text-decoration: underline;
    color: #ffb7b7;
  }
`



const StyledText = styled.a`
  line-height: 1.68;
  color: #333333;
  margin: 0;
  font-weight: 500;
  border-bottom: 1px solid #333333; 
  margin: 0.25rem 0.5rem;
  letter-spacing: -0.3px;

`

const GreyText = styled.a`
  line-height: 1.68;
  color: #b8b8b8;
  font-weight: 300;
  transition: 0.2s;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  letter-spacing: -0.3px;

  :hover {
    cursor: pointer;  
    color: #666666;
    background-color: #f5f5f5;
  }   
`

const GreyLink = styled(Link)`
  line-height: 1.68;
  text-decoration: none;
  color: #b8b8b8;
  font-weight: 300;
  transition: 0.2s;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;


  :hover {
    cursor: pointer;  
    color: #666666;
    background-color: #f5f5f5;
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
  color: #666666;
  font-weight: 300;
  font-size: 0.83rem;
  line-height: 1.44;  
  width: 12.5rem;
`


const InlineLink = styled.a`
  text-decoration: none;
  transition: 0.2s;
  color: #565656;
  font-weight: 400;
  :hover {
    color: #8c8c8c;
    cursor: pointer;  
  }  
`


const Footer = styled.footer`
  margin-top: 5rem;
  padding: 0 3rem;
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
            <ListItem key={index} onClick={() => navigate(props.routes[index])}>
              <GreyText  style={{margin: "0", lineHeight: "1.7"}}>{sections[index]}</GreyText>
            </ListItem>
          )
        }
      })
    }
  }

  function handleMain() {
    if (sections) {
      return (
        <>
          <ListItem>
            <GreyLink to="/">Home</GreyLink>
          </ListItem>
          <ListItem>
            <GreyLink to="/about">About</GreyLink>
          </ListItem>
          <ListItem>
            <GreyText
              style={{textDecoration: "none"}}
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/1kvO-BrRQxthxxyGf8pKdkJA42L1sJBEX/view?usp=sharing"
            >
              Resume
            </GreyText>
          </ListItem>
        </>
      )
    } else {
      return (
        <>
          <ListItem>
            <StyledLink to="/">Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/about">About</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink 
              as="a"
              target="_blank"
              href="https://drive.google.com/file/d/1kvO-BrRQxthxxyGf8pKdkJA42L1sJBEX/view?usp=sharing"
            >
              Resume
            </StyledLink>
          </ListItem>
        </>

      )
    }
  }

  function handleLinks() {
    if (sections) {
      return (
        <>
          <ListItem>
            <GreyText
              as="a"
              href="https://github.com/johnwjlim/"
              target="_blank"
              style={{textDecoration: "none"}}
            > 
              Github
            </GreyText>
          </ListItem>
          <ListItem>
            <GreyText
              as="a"
              href="mailto:wjlim@uw.edu"
              target="_blank"
              style={{textDecoration: "none"}}
            > 
              wjlim@uw.edu
            </GreyText>
          </ListItem>
        </>
      )
    } else {
      return (
        <>  
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

        </>

      )
    }
  }

  return (
    <Container>
      <FlexHack>
        <Row>
          <List>
            {
              handleMain()
            }
          </List>
          <List>
            {
              handleComponents()
            }
          </List>
        </Row>
        <Row>
          <List>
            {
              handleLinks()
            }
          </List>
          <Footer>
            <FooterText>
              Hand-coded with ❤️ on
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