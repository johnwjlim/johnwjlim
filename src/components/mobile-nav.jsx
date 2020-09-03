import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useDispatch } from 'react-redux'

const Container = styled.nav`
  // width: 15em;
  margin-top: 76px;
`

const List = styled.ul`
  list-style: none;
  margin-bottom: 3.5rem;
  text-align: center;
`
const ListItem = styled.li`
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  line-height: 1.7;

  :hover {
    text-decoration: underline;
  }
`

const StyledText = styled.a`
  line-height: 1.7;
  color: #111111;
  margin: 0;
  font-weight: 500;
  font-size: 1.1rem;

  :hover {
    text-decoration: underline;
    cursor: pointer;  
  }   
`

const GreyText = styled(StyledText)`
  color: #767676;
  font-weight: 400;
`

const DetailText = styled.p`
  color: #767676;
  margin-bottom: 3.5rem;
  line-height: 1.5;

  @media (max-width: 1240px) {
    display: none
  }

`

export default function Nav(props) {
  const [sections, setSections] = useState(props.components)
  const dispatch = useDispatch()

  function handleClick(index) {
    props.onChange(index)
    dispatch({type: "CLOSE"})
  }

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "active" } : {}
  }


  function handleComponents() {
    if (sections) {
      return sections.map((section, index) => {
        if (index === props.active) {
          return (
            <ListItem key={index} onClick={() => handleClick(index)}>
              <StyledText>{sections[index]}</StyledText>
            </ListItem>
          )
        } else {
          return (
            <ListItem key={index} onClick={() => handleClick(index)}>
              <GreyText style={{margin: "0", lineHeight: "1.7"}}>{sections[index]}</GreyText>
            </ListItem>
          )
        }
      })
    }
  }

  return (
    <Container>
      <List>
        <ListItem>
          <StyledLink onClick={() => dispatch({type: "CLOSE"})} to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink onClick={() => dispatch({type: "CLOSE"})}  to="/about">About</StyledLink>
        </ListItem>
        <ListItem>
          {/* <StyledLink onClick={() => dispatch({type: "CLOSE"})}  to="/resume">Resume</StyledLink>
         */}
         <StyledLink 
                as="a"
                target="_blank"
                href="https://drive.google.com/file/d/1r5To1P3Oc8Dn9Ucbe_WxWWBi5bCVeYri/view?usp=sharing"
                onClick={() => dispatch({type: "CLOSE"})} 
              >
                Resume
              </StyledLink>
        </ListItem>
      </List>
 
      <List>
        {
          handleComponents()
        }
      </List>
    </Container>
  )
}