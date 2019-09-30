import React, {useState} from "react"
import styled from "styled-components"
import { Link, navigate } from "gatsby"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/header"

import Showcase from "../components/nimbus-smooth-scroll/showcase"
import SurveyIdeation from "../components/nimbus-smooth-scroll/survey-ideation"
import FlowsWireframes from "../components/nimbus-smooth-scroll/flows-wireframes"
import HighFidelity from "../components/nimbus-smooth-scroll/high-fidelity"
import Redesign from "../components/nimbus-smooth-scroll/redesign"
import EndNotes from "../components/nimbus-smooth-scroll/end-notes"

import { sections } from "../components/constants"

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 76px;
  // max-width: 1680px;
`

const Content = styled.div`
  display: block;
  overflow: auto;
  height: 89vh;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    overflow: visible;

  }
`


export default function Nimbus() {
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)

  function handleTabSwitch(value) {
    setActive(value);
    handleScroll(value);
  }

  function handleScroll(value) {
    if (value === 0) {
      navigate("/nimbus-smooth-scroll/#overview")
    } else if (value === 1) {
      navigate("/nimbus-smooth-scroll/#survey")
    }
  }

  return (
    <>
    <Layout>
      <SEO title="Nimbus" />
      <Header pageTitle="Nimbus"/>
      {
        menuState ? 
          <MobileNav components={sections} active={active} onChange={handleTabSwitch}/> :
          <FlexWrapper>
            <Content>
              <Showcase onChange={handleTabSwitch} active={active} />
              <SurveyIdeation onChange={handleTabSwitch} active={active} />
              <FlowsWireframes onChange={handleTabSwitch} active={active}/>
              <HighFidelity onChange={handleTabSwitch} active={active} />
              <Redesign onChange={handleTabSwitch} active={active} />
              <EndNotes onChange={handleTabSwitch} active={active} />
            </Content>
            <Nav components={sections} active={active} onChange={handleTabSwitch}/>
        </FlexWrapper>
      }
    </Layout>
    </>
  )
}