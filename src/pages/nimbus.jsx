import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import {useTransition, animated} from 'react-spring'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import MobileNav from "../components/mobile-nav"
import Header from "../components/header"

import Showcase from "../components/nimbus/showcase"
import SurveyIdeation from "../components/nimbus/survey-ideation"
import Solution from "../components/nimbus/flows-wireframes"
import HighFidelity from "../components/nimbus/high-fidelity"
import Redesign from "../components/nimbus/redesign"
import PersonalThoughts from "../components/nimbus/personal-thoughts"

import { sections } from "../components/constants"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // max-width: 1680px;
`

export default function Nimbus() { 
  const [active, setActive] = useState(0)
  const menuState = useSelector(state => state.menuState)
  const dispatch = useDispatch()

  // const transitions = useTransition(index, p => p, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })

  const transitions = useTransition(active, null, {
    from: { opacity: 0 },
    enter: { opactity: 1 },
    leave: { opacity: 0 },
  })
  // useEffect(() => {
  //   dispatch({type: "CLOSE"})
  // },[])

  const pages = [
      ({ style }) => 
        <animated.div>
          <Showcase onChange={handleTabSwitch} active={active}/>
        </animated.div>,
      ({ style }) => 
      <animated.div>
        <SurveyIdeation onChange={handleTabSwitch} active={active} />
      </animated.div>,
      ({ style }) => 
      <animated.div>
        <Solution onChange={handleTabSwitch} active={active}/>
      </animated.div>,
      ({ style }) => 
      <animated.div>
        <HighFidelity onChange={handleTabSwitch} active={active} />
      </animated.div>,
      ({ style }) => 
      <animated.div>
         <Redesign onChange={handleTabSwitch} active={active} />
      </animated.div>,
  ] 

  const test = [
    <Showcase onChange={handleTabSwitch} active={active}/>,
    <SurveyIdeation onChange={handleTabSwitch} active={active} />,
    <Solution onChange={handleTabSwitch} active={active}/>,
    <HighFidelity onChange={handleTabSwitch} active={active} />,
    <Redesign onChange={handleTabSwitch} active={active} />,
    <PersonalThoughts onChange={handleTabSwitch} active={active} />
  ]
  
  function handleTabSwitch(value) {
    setActive(value);
  }

  function renderActiveSection() {
    switch (active) {
      case 0 : 
        return <Showcase onChange={handleTabSwitch} active={active} />
      case  1:
        return <SurveyIdeation onChange={handleTabSwitch} active={active} />
      case  2:
        return <Solution onChange={handleTabSwitch} active={active}/>
      case 3:
        return <HighFidelity onChange={handleTabSwitch} active={active} />
      case 4:
        return <Redesign onChange={handleTabSwitch} active={active} />
      case 5:
        return <PersonalThoughts onChange={handleTabSwitch} active={active} />
      default:
        return <Showcase onChange={handleTabSwitch} active={active} />
    }
    // const Page = pages[active]
    // return <Page  />
  }

  function transitionSections() {
    {transitions.map(({ item, props, key }) => {
      // const Page = pages[active]
      // return <Page key={key} style={props} />
      return <animated.div key={key} style={props}>
        {renderActiveSection()}
      </animated.div>
    })}
  }

  return (
    <Layout>
      <SEO title="Nimbus" />
      <Header pageTitle={"Nimbus"} />
      {
        menuState ?
          <MobileNav components={sections} active={active} onChange={handleTabSwitch}/>
        :
        <Wrapper>
            {
              // transitions.map(({item, props, key}) => {
              //   switch (item) {
              //     case 0 :
              //       return (
              //       <animated.div key={key} style={props}>
              //         <Showcase onChange={handleTabSwitch} active={active} />
              //       </animated.div>
              //       )
              //     case 1:
              //       return (
              //       <animated.div key={key} style={props}>
              //         <SurveyIdeation onChange={handleTabSwitch} active={active} />
              //       </animated.div>
              //       )
              //     case 2: 
              //       return (
              //       <animated.div key={key} style={props}>
              //         <Solution onChange={handleTabSwitch} active={active}/>
              //       </animated.div>
              //       )
              //     case 3: 
              //       return (
              //       <animated.div key={key} style={props}>
              //         <HighFidelity onChange={handleTabSwitch} active={active} />
              //       </animated.div>
              //       )
              //     case 4:
              //       return (
              //       <animated.div key={key} style={props} >
              //         <Redesign onChange={handleTabSwitch} active={active} />
              //       </animated.div>
              //       )
              //     case 5:
              //       return (
              //       <animated.div key={key} style={props}>
              //         <PersonalThoughts onChange={handleTabSwitch} active={active} />
              //       </animated.div>
              //       )
              //     default:
              //       return (
              //       <animated.div key={key} style={props}>
              //         <Showcase onChange={handleTabSwitch} active={active} />
              //       </animated.div>
              //       )
              //   } 
              // }) 
              renderActiveSection()
            }
          <Nav components={sections} active={active} onChange={handleTabSwitch}/>
        </Wrapper>
      }
    </Layout>
  )
}



