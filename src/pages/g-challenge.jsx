import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Header from "../components/header"
import MobileNav from "../components/mobile-nav"

import Overview from "../components/g-challenge/overview"
import Prologue from "../components/g-challenge/prologue"
import { gSections } from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // max-width: 1680px;
`

export default function Google() {
  const [active, setActive] = useState(0)
  const pageTitle = "ClubFinder"

  const menuState = useSelector(state => state.menuState)

  function handleTabSwitch(value) {
    setActive(value);
  }

  function renderActiveSection() {
    switch(active) {
      case 0: 
        return <Overview onChange={handleTabSwitch} active={active} />
      case 1:
        return <Prologue onChange={handleTabSwitch} active={active} />
      default:
        return <Overview onChange={handleTabSwitch} active={active} />
    }
  }

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Header pageTitle={pageTitle} />
      {
        menuState ? 
          <MobileNav components={gSections} active={active} onChange={handleTabSwitch} /> :
        <Wrapper>
          {
            renderActiveSection()
          }
          <Nav components={gSections} active={active} onChange={handleTabSwitch}/>
        </Wrapper>
      }
    </Layout>
  )
}