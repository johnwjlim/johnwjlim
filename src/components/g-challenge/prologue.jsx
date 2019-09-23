import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as Styled from "../constants"

const ListItem = styled(Styled.ListItem)`
  font-weight: 400;
`


export default function Prologue(props) {
  const data = useStaticQuery(graphql`
    query {
      Hero: file(relativePath: { eq: "prologue-hero.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Img fluid={data.Hero.childImageSharp.fluid} />
      </Styled.ImageWrapper>
      <Styled.OffsetBody>
        <p><strong>A Little Backstory</strong></p>
        <Styled.BodyText>
          The first thing that came to mind when I saw the prompt was for a student organization directory, which in its present form for the University of Washington, was a little garbage. The straightforward solution was therefore to address the prompt directly and clean up the design of the directory with some additional provision for students to propose new student organizations, which was what I ultimately ended up submitting as my deliverable. 
        </Styled.BodyText>
        <Styled.BodyText>
          <strong>They never actually got back to me, which is why I went back to the drawing block to rethink the whole thing. </strong>
        </Styled.BodyText>
        <Styled.BodyText>
          While the initial timeline given to deliver a solution was limited, I did manage to squeeze in some research based on a number of ad-hoc interviews that I conducted with people I knew. Some of the findings I got were as follows:
        </Styled.BodyText>
        <Styled.TextBlock>
          <Styled.StyledList>
            <ListItem>
            The existing student organization directory was almost unanimously regarded as unsatisfactory
            </ListItem>
            <ListItem>
             While some respondends sought out organizations based on interest, social aspects, such as who they knew within the organization and whether they got along with the people within the organization, determined whether people joined and stayed in an organization.  
            </ListItem>
            <ListItem>
            Annual student organization fair rated favorably because it gave people an opportunity to engage with organizations in person
            </ListItem>
          </Styled.StyledList>
        </Styled.TextBlock>
        <Styled.BodyText>
          Based on the fact that the existing directory was a little rubbish and that the student organization fair was fairly well received, my initial solution was centered around trying to replicate the student organization fair experience in a mobile app, where users could search for organizations and direct message them, which upon second thought, is pretty much what the existing directory is already supposed to do (whether it actually did that in practice is another story but besides the point). While I took pains to clean up the design in my initial solution, I haven’t actually given users any additional compelling reason to use my solution.  
        </Styled.BodyText>
        <Styled.TextBlock>
          <p><strong>A Late Revelation</strong></p>
        </Styled.TextBlock>
        <Styled.BodyText>
          Looking back, the given prompt was rather vague and I probably was interpreting it a little too literally. While I had fulfilled the given scope, I wasn’t quite thinking about the problem critically enough. I never managed to incorporate social aspects into my solution, even though a major motivation behind joining student organizations was to build and foster social connections. I failed to consider the fact an organization was first and foremost defined by its people, and that joining an organization was fundamentally a social experience.
        </Styled.BodyText>
        <Styled.TextQuote>
          This was never just about helping new students find student organizations, this was about the business of forming and sustaining connections. 
        </Styled.TextQuote>
        <Styled.BodyText>These connections are what determines whether someone joins and stays in an organization, and for a new student, these connections might just come to form the bedrock that would define his or her college experience.</Styled.BodyText>
        <Styled.TextBlock>
          <p><strong>Exploring Human Connection</strong></p>
        </Styled.TextBlock>
        <Styled.BodyText>
          Recognizing the fact that the process of finding an organization was multi-faceted and that whatever I cooked up had to fit in with whatever else the user was going to do when looking for a new organization, my intent was to create a more social experience, one that allowed for both two-way and communal engagement between organizations and students. It needed to go beyond being a directory and deliver individualized recommendations to the user, much as a friend would.
        </Styled.BodyText>
        <Styled.BodyText>
          Events are a central tenet of a college student’s social experience and often the lifeblood of a student organization looking to stay relevant, therefore the solution also needed to be an events hub where organizations can readily share and publicize events to the student population, as well as be a place where students can search and discover events. The solution needed to be tailored not just to new students, but also to existing students in order to provide the level of content and community necessary to engage new students. 
        </Styled.BodyText>
        <Styled.BodyText>
          With these goals in mind and now largely unrestricted from the shackles of trying to directly address a prompt, I decided to go about solving the problem my own way. 
        </Styled.BodyText>
      </Styled.OffsetBody>
    </Styled.Container>
  )
}