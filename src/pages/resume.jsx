import React, {useEffect} from "react"
import { Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import MobileNav from "../components/mobile-nav"
import Nav from "../components/nav"

import * as Styled from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`


const InlineLink = styled(Link)`
  color: blue;
  font-weight: 600;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    color: #ffb7b7;
  }
`;


export default function Resume() {
  const menuState = useSelector(state => state.menuState)

  return (
    <Layout>
      <SEO title={"Resume"} />
      <Header />
      {
        menuState ? <MobileNav /> :
        <Wrapper>
          <Styled.Container>
            <Styled.OffsetBody>
              <Styled.TextBlock>
                <h1>Oops...</h1>
              </Styled.TextBlock>
              <Styled.TextBlock>
                <p>So I don't quite have a resume yet...mainly because I kind of lost the inDesign file that I made my resume on. I'm presently working on making a new one.</p>
              </Styled.TextBlock>
              <Styled.TextBlock>
                <p><strong>In the meantime, feel free to <InlineLink to="/">view my work</InlineLink></strong></p>
              </Styled.TextBlock>
            </Styled.OffsetBody>
          </Styled.Container>
          <Nav />
        </Wrapper>
      }
    </Layout>
  )
}