import React, {useState} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/header"

import Intro from "../components/pool/intro"

import * as Styled from "../components/constants"

import { poolSections } from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // margin-top: 64px;
`

export default function Pool() {
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)

  function handleTabSwitch(value) {
    setActive(value);
  }

  function renderActiveSection() {
    switch (active) {
      case 0 : 
        return <Intro onChange={handleTabSwitch} active={active} />
      // case  1:
      //   return <Individual onChange={handleTabSwitch} active={active} />
      // case  2:
      //   return <Team onChange={handleTabSwitch} active={active}/>
      default:
        return <Intro onChange={handleTabSwitch} active={active} />
    }
  }

  return (
    <Layout>
      <SEO title="POOL" />
      <Header pageTitle={"POOL"} />
      {
        menuState ?
          <MobileNav active={active} onChange={handleTabSwitch}/> :
          <Wrapper>
            {
              renderActiveSection()
            }
            <Nav active={active} onChange={handleTabSwitch}/>
          </Wrapper>
      }
    </Layout>
  )
}
