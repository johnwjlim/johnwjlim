import React, {useState} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/header"

import Body from "../components/movley/movley-body"

import * as Styled from "../components/constants"

import { poolSections } from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 64px;
`

export default function Movley() {
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)

  function handleTabSwitch(value) {
    setActive(value);
  }


  return (
    <Layout>
      <SEO title="Movley" />
      <Header pageTitle={""} />
      <Wrapper>
        <Body />
        <Nav active={active} onChange={handleTabSwitch}/>
      </Wrapper>
    </Layout>
  )
}
