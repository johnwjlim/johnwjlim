import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1680px;
  position: fixed;
  padding: 1.15rem 2.5rem;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  // background-color: rgba(255,255,255,0.75);
  // border-bottom: 1px solid #f1f1f1;
  // box-shadow: 1px 1px #c5c5c5;

  @media (max-width: 425px) {
    padding: 1.5rem;
  }

`

const Wrapper = styled.div`
  display: flex;
`

const Title = styled.h2`
  margin: 0;
  // margin-right: 3.6rem;
  letter-spacing: -0.8px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.1;
  font-size: 1.4rem;


  @media (max-width: 425px) {
    font-size: 1.25rem
  }

  // &:hover {
  //   color: #a5a5a5;
  //   font-weight: 800;
  //   letter-spacing: -0.5px;
  // }
`

const TitleDark = styled(Title)`
  color: #888888;
`

const SecondaryTitle = styled(Title)`
  color: #979797;
  color: #ffb7b7;
  // color: #f67599;
  // margin: 0;
  font-weight: 800;
  letter-spacing: -0.5px;
  // position: fixed;
  // left: 10vw;
`

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 1.2rem;  
  margin: 0;
  margin-left: 1.5rem;
  padding-left: 1.5rem;
  text-align: bottom;   
  border-left: 1px solid #767676;
  color: #ffffff;
  // position: absolute;
  // left: 10vw;

  @media (max-width: 425px) {
    margin-left: 0.9rem;
    padding-left: 0.9rem;
    font-size: 1rem;
  }

`
const Filler = styled.div`
  // height: 100%;
  padding-top: 26px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
`;

const Menu = styled.a`
  display: none;
  margin: 0;
  letter-spacing: -0.3px;
  font-weight: 400;
  color: #111111;
  // color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.5;
  cursor: pointer;
  margin-right: 5rem;

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-right: 2.5rem;
  }

  @media (max-width: 1240px) {
    display: block;
  }
`


export default function Header(props) {
  // const [title, setTitle] = useState("John Lim")
  const [hover, setHover] = useState(false)
  const menuState = useSelector(state => state.menuState)
  const dispatch = useDispatch()

  const transitions = useTransition(hover, null, {
    from: { opacity: 0, height: 0},
    enter: { opacity: 1, height: 0 },
    leave: { opacity: 0, height: 0 },
    // config: {tension: 200}
  })

  // useEffect(() => {
  //   console.log(menuState);
  // })

  useEffect(() => {
    dispatch({type: "CLOSE"})
  }, [])

  function triggerMenu() {
    if (menuState) {
      dispatch({type: "CLOSE"})
    } else {
      dispatch({type: "OPEN"})
    }
  }

  return (
    <Container>
      <Wrapper>
        <StyledLink 
          to="/"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* {
            hover ?
            <SecondaryTitle>Make It Better.</SecondaryTitle> :
            <Title>John Lim</Title>
          } */}
          {
            transitions.map(({item, key, props}) => item ?
            <animated.div style={props}>
              {/* <SecondaryTitle>Make It Better.</SecondaryTitle> */}
              <TitleDark>John Lim</TitleDark>
            </animated.div> :
            <animated.div style={props}>
              <Title>John Lim</Title>
            </animated.div>
            )
          }
        </StyledLink>
        {
          props.pageTitle ?
          <>
           <Filler />
          </>: <Filler />
        }
      </Wrapper>
      <Menu onClick={() => triggerMenu()}>Menu</Menu>
    </Container>
  )
}