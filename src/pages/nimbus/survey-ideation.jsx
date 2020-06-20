import React, {useState} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Nav from "../../components/nav-nimbus"
import MobileNav from "../../components/mobile-nav-nimbus"
import Header from "../../components/header"

import SurveyIdeation from "../../components/nimbus/survey-ideation"


import { sections } from "../../components/constants"
import { nimbusRoutes } from "../../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 76px;
`

export default function Survey() { 
  const [active, setActive] = useState(1)
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
          <SurveyIdeation onChange={handleTabSwitch} active={active}/>,
          <Nav components={sections} active={active} onChange={handleTabSwitch} routes={nimbusRoutes}/>
        </Wrapper>
      }
    </Layout>
  )
}



