import React, {useState} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav-nimbus"
import MobileNav from "../components/mobile-nav-nimbus"
import Header from "../components/header"

import Showcase from "../components/nimbus/showcase"
// import SurveyIdeation from "../components/nimbus/survey-ideation"
// import Solution from "../components/nimbus/flows-wireframes"
// import HighFidelity from "../components/nimbus/high-fidelity"
// import Redesign from "../components/nimbus/redesign"
// import PersonalThoughts from "../components/nimbus/personal-thoughts"

import { sections } from "../components/constants"
import { nimbusRoutes } from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  // justify-content: space-between;
`

export default function Nimbus() { 
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)


  function handleTabSwitch(value) {
    setActive(value);
  }

  return (
    <Layout>
      <SEO title="Nimbus" />
      <Header pageTitle={"Nimbus"} />
      {
        menuState ?
          <MobileNav components={sections} active={active} onChange={handleTabSwitch} routes={nimbusRoutes}/>
        :
        <Wrapper>
          <div style={{width: "100%", marginTop: "64px"}}>
            <Showcase onChange={handleTabSwitch} active={active}/>
          </div>
          {/* <Showcase onChange={handleTabSwitch} active={active}/> */}
          <Nav components={sections} active={active} onChange={handleTabSwitch} routes={nimbusRoutes} />
        </Wrapper>
      }
    </Layout>
  )
}



