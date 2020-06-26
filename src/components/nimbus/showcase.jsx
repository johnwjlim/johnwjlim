import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"

import { Container, ImageWrapper, FlexWrapper, IntroBody, OffsetBody, RightButton, ButtonHeader, ButtonText, sections, TextQuote, Image, InfoPanel } from "../constants"

const Title = styled.h1`
  // font-weight: 600;
  font-weight: 700;
  margin-bottom: 0.5rem;
`


const TextBlock = styled.div`
  max-width: 52rem;
  margin: 0 auto;
  margin-bottom: 1.25rem;
`


const SpecialWrapper = styled(ImageWrapper)`
  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`

const HeroText = styled.p`
  font-size: 1.85rem;
  font-weight: 200;
  // color: #666666;
  letter-spacing: -0.035em;
  line-height: 1.45;

  @media (max-width: 1240px) {
    font-size: 1.5rem;
  }

`

const HeroSub = styled.h4`
  font-weight: 600;
  // color: #333333;
`


const PrototypeSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1240px) {
    display: block;
  }

  @media (max-width: 768px) {
    // display: none;
  }
`

const PrototypeWrapper = styled.div`
  margin: 0 6rem;

  @media (max-width: 768px) {
    margin: 0;
    display: none;
  }
`

const PrototypeWrapperSmall = styled(PrototypeWrapper)`
  display: none;  

  @media (max-width: 768px) {
    display: block;
  }
`



const PrototypeText = styled(TextBlock)`
  max-width: 28rem;

  @media (max-width: 1240px) {
    max-width: 34rem;
  }
`
const ImageWithMargin = styled(ImageWrapper)`
  margin-top: 3.5rem;
`

const ImageCaption = styled.a`
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1.5rem;
  display: block;
  text-align: center;
  transition: 0.2s;
  color: #4353ff;

  :hover {
    color: #ffb7b7;
    cursor: pointer;  
  }  
`;

const PrototypeLink = styled(ImageCaption)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const PitchDeckLink = styled(ImageCaption)`
  text-align: left;
  // font-family: "EB Garamond", serif;
  // font-style: italic;
  // font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  
`


const SectionTitle = styled.h2`
  font-weight: 600;
  letter-spacing: -0.025em;
  font-size: 1.7rem;

  @media (max-width: 1240px) {
    font-size: 1.5rem;
  }

`

const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #4353ff;
  border-radius: 8px;
  color: #4353ff;
  padding: 1rem 1.5rem;
  font-weight: 600;
  transition: 0.2s;

  :hover {
    cursor: pointer; 
    background-color: #4353ff;
    color: #ffffff
  }
`

const Box = styled.div`
  // border: 1px solid #dddddd;
  border-radius: 16px;
  background-color: #fafafa;
  // width: 100%;
  text-align: center;
  margin-top: 5rem;
  padding: 4rem 2rem;
`

const ColumnBlock = styled(TextBlock)`
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;

  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;

  @media (max-width: 1024px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
`

const Quote = styled(TextQuote)`
  font-family: "EB Garamond", serif;
  font-size: 1.7rem;
  border-left: solid 1px #333333;
  letter-spacing: -0.02em;
  font-weight: 400;
  padding-left: 3.5rem;
  max-width: 48rem;
  line-height: 1.3;
  color: #111111;

  @media (max-width: 1240px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }
`

const Divider = styled.div`
  border-top: 1px solid #d2d2d7;
  padding-top: 4rem;

  @media (max-width: 1240px) {
    padding-top: 2rem
  }
`

const ImageOffset = styled(OffsetBody)`
  background-color: #f5f5f5;
  padding: 10rem 8rem;

  @media (max-width: 1240px) {
    background-color: #ffffff;
    padding: 0;
  }
`

const ImageSubCaption = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
`

const iFrameStyle = {
  transform: "scale(0.6)",
}



export default function Showcase(props) {
  
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200, maxHeight: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Deck: file(relativePath: { eq: "screen-deck-overlap.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PaperPrototypes: file(relativePath: {eq: "paper-prototypes.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Grid: file(relativePath: {eq: "image-grid.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GridFull: file(relativePath: {eq: "image-grid-full-width.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ProfileMontage: file(relativePath: {eq: "profile-montage.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RevisedScreens: file(relativePath: {eq: "revised-screen-deck.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RevisedScreensWhite: file(relativePath: {eq: "revised-screen-deck-white.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      UserFlow: file(relativePath: {eq: "user-flow.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Wireframes: file(relativePath: {eq: "wireframes-nimbus.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TestFrame: file(relativePath: {eq:"test-frame.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TestFrameFullWidth: file(relativePath: {eq:"test-frame-full-width.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Mockup: file(relativePath: {eq: "hero-secondary.png"}) {
        childImageSharp {
          fluid (maxWidth:3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <ImageWrapper>
          <Img fluid={data.HeroImage.childImageSharp.fluid} />
        </ImageWrapper>
        <FlexWrapper>
          {/* <InfoPanel>
            <Title>Nimbus</Title>
            <p style={{lineHeight: "1.35", color: "#666666"}}>
              Mobile App Design <br/>User Experience
            </p>
          </InfoPanel> */}
          <IntroBody>
            <TextBlock style={{marginBottom: "5rem"}}>
              <HeroSub>
               User Experience • Product Design • Rapid Prototyping
              </HeroSub>
            </TextBlock>
            <TextBlock>
              <HeroText> 
                <strong>Nimbus</strong> is a mobile experience that aims to solve the transportation challenges of remote outdoor exploration by connecting adventurers with one another and having them share transport to outdoor recreation areas. 
              </HeroText>
              <PitchDeckLink href="https://www.figma.com/proto/rqb3pn14vDM8drmDBvJGWY/Nimbus-Pitch-Deck?node-id=92%3A3&scaling=scale-down" target="_blank">View the condensed pitch deck here!</PitchDeckLink>
            </TextBlock>
          </IntroBody>
        </FlexWrapper>
        <ImageWrapper>
          <Img fluid={data.RevisedScreens.childImageSharp.fluid}/>
        </ImageWrapper>
        <OffsetBody>
          <TextBlock>
            <SectionTitle>
              A Brief Background
            </SectionTitle>
          </TextBlock>
          <ColumnBlock style={{marginBottom: "4rem"}}>
            <p>
              The outdoors is one of the few places on earth that is truly free and open to all. However, getting there is often the biggest obstacle in itself with many areas existing in remote locales accessible only by car. This leads to a condition where purportedly <strong>free and open lands</strong> are in reality <strong>exclusive to people with access to cars.</strong>
            </p>
            <p>Recognizing the rise of social media & the Instragram generation as key drivers behind the new found popularity of outdoor destinations, we set out to design a mobile experience that would solve the transportation conundrum by connecting outdoor enthusiasts with like-minded peers and have them carpool to outdoor destinations.</p>
          </ColumnBlock>
            <TextBlock>
              <SectionTitle>
                Initial Blockers
              </SectionTitle>
            </TextBlock>
            <ColumnBlock>
              <p>
                Our initial ideas revolved around having users join or create groups to ride-share/carpool to outdoor destinations. <strong>User safety</strong> immediately emerged as the <strong>primary concern</strong> that our professor and mentor, Brian Fling, had for our proposed concept.
              </p>
              <p>
              His concerns were most certainly justified; We were after all, proposing to put strangers together in a car and have them drive out to the middle of nowhere. It was in effect akin to a more extreme version of a blind date with the very real risk of running into a potential serial killer.
              </p>
              <p>
              In response, we were proactive in including mitigating features that we hoped would reassure users such as having <strong>public user profiles</strong> as well as <strong>mandatory user verifications</strong>.  
              </p>
            </ColumnBlock>
          </OffsetBody>
        <ImageOffset>
            <ImageWrapper>
              <Img fluid={data.PaperPrototypes.childImageSharp.fluid} />
            </ImageWrapper>
        </ImageOffset>
        <OffsetBody>
          <ColumnBlock>
            <p> With successful mitigative measures in place, multiple rounds of testing and iteration further revealed that much of our target users were essentially <strong>less concerned for their own safety</strong> than we as designers were. They had in fact expressed <strong>more concern over chemistry & compatibility</strong> with potential travel companions than with their own personal safety.</p>
            <p>It was almost as if that the age old adage of not getting into cars with strangers was somehow less applicable in the 21st century. This suprising takeaway would be key towards underscoring the feasability of our proposed concept.</p>
          </ColumnBlock>
          <TextBlock>
            <Box>
              <p style={{maxWidth: "24rem", margin:"1.7rem auto"}}><strong>View my in-depth deep dive into the research and ideation process:</strong></p>
              <Button onClick={() => navigate("/nimbus/survey-ideation")}>Survey & Ideation</Button>
            </Box>
          </TextBlock>
        </OffsetBody>
        <OffsetBody>
          <TextBlock>
            <Divider />
          </TextBlock>
          <TextBlock>
            <SectionTitle>
              Process and Flows
            </SectionTitle>
            <p>Our solution was fleshed out over a series of design sprints, where use cases as well as features were iterated and tested through <strong>rapid prototyping</strong>. Test, iterate and then test it again was the mantra we lived by. Most of our tests were conducted with <strong>low-fidelity wireframes.</strong></p>
          </TextBlock>
        </OffsetBody>
        <OffsetBody>
          <TextBlock>
            <ImageWrapper>
              <Img fluid={data.UserFlow.childImageSharp.fluid}/>
            </ImageWrapper>
          </TextBlock>
        </OffsetBody>
        <OffsetBody>
          <TextBlock>
            <p>We attempted to take advantage of existing <strong>conceptual models</strong> whenever possible. The idea was to maximize intuitiveness by <strong>leveraging a user’s familiarity with existing processes.</strong> The above diagram depicts a rough flow of our “join a group” process here which was really modelled after AirBnb’s flow for making a reservation with a host</p>
          </TextBlock>
          <TextBlock>
            <Box>
              <p style={{maxWidth: "24rem", margin:"1.7rem auto"}}><strong>View wireframe flows used to test primary use cases</strong></p>
              <Button onClick={() => navigate("/nimbus/flows-wireframes")}>Flows + Wireframes</Button>
            </Box>
          </TextBlock>
        </OffsetBody>
        {/* <ImageWrapper>
          <Img fluid={data.TestFrame.childImageSharp.fluid} />
        </ImageWrapper> */}
        <OffsetBody>
          <TextBlock>
            <ImageWrapper>
              <Img fluid={data.TestFrameFullWidth.childImageSharp.fluid}  />
            </ImageWrapper>
            <ImageSubCaption>User tests were conducted in both controlled settings and guerilla style where unwitting passer-bys were recruited to be impromptu testers.</ImageSubCaption>
           </TextBlock>
        </OffsetBody>
        <OffsetBody>
          {/* <TextBlock>
            <p>Our <strong>user tests</strong> were largely conducted in the form of <strong>semi-structured interviews.</strong> This not only allowed us to observe in person how our testers responded to the screens and prompts posed to them but more importantly, it afforded us the opportunity for <strong>face to face connections</strong> with potential users and helped us <strong>expand our understanding of the problem space.</strong></p>
          </TextBlock>
          <TextBlock>
            <p>The conversations we had with our testers were instrumental towards helping us refine the vision and scope of our designs across multiple sprint cycles. This <strong>user-centered approach</strong> not only allowed us to better <strong>incorporate testing feedback,</strong> but also yielded surprising takeaways and insights about user behavior that allowed us greater freedom to evolve the design in ways that nobody anticipated from the start.</p>
          </TextBlock> */}
          <ColumnBlock>
            <p>Our <strong>user tests</strong> were largely conducted in the form of <strong>semi-structured interviews.</strong> This not only allowed us to observe in person how our testers responded to the screens and prompts posed to them but more importantly, it afforded us the opportunity for <strong>face to face connections</strong> with potential users and helped us <strong>expand our understanding of the problem space.</strong></p>
            <p>These conversations and connections were instrumental towards helping us refine the vision and scope of our designs across multiple sprint cycles. Our <strong>user-centered approach</strong> not only allowed us to better <strong>incorporate testing feedback,</strong> but also yielded surprising takeaways and insights about user behavior that allowed us greater freedom to evolve the design in ways that nobody anticipated from the start.</p>
          </ColumnBlock>
        </OffsetBody>
        <OffsetBody>
          <TextBlock>
            <Quote>
            Our solution was fleshed out over a series of design sprints, where use cases as well as features were iterated and tested through rapid prototyping. Test, iterate and then test it again was the mantra we lived by.
            </Quote>
          </TextBlock>
        </OffsetBody>
        <OffsetBody style={{marginBottom: "0"}}>
          {/* <div style={{padding: "1rem 0"}} /> */}
          <TextBlock>
            <Divider />
          </TextBlock>
          <TextBlock>
            <SectionTitle>
              Putting It Together
            </SectionTitle>
          </TextBlock>
          <ColumnBlock>
            <p>Feedback and observations from our process of <strong>continous iterations</strong> helped us discover a range of <strong>pain points</strong> that our testers experienced when embarking or planning for outdoor travel.</p>
            <p>In addition to the issue of user safety that came up in out initial sprints, one of the most cited pain points that came up was the difficulty in finding <strong>localized and current information</strong> that’s specific to outdoor areas, such as the weather, trail conditions, localized risk factors etc. </p>
            <p>This was something we sought to address in our <strong>high-fidelity screens,</strong> with our location screen seeking to provide crucial information that could be relevant to people adventuring in that particular location. </p>
          </ColumnBlock>
        </OffsetBody>
        <ImageWrapper>
          <Img fluid={data.Deck.childImageSharp.fluid}/>
        </ImageWrapper>
        <OffsetBody style={{margin: "0"}}>
          <TextBlock>
              <Box>
                <p style={{maxWidth: "24rem", margin:"1.7rem auto"}}><strong>View deep dive and screen descriptions for high-fidelity screens</strong></p>
                <Button onClick={() => navigate("/nimbus/high-fi")}>High Fidelity Screens</Button>
              </Box>
            </TextBlock>
        </OffsetBody>
        <OffsetBody style={{marginBottom: "0"}}>
          <TextBlock style={{marginBottom: "0"}}>
            <Divider style={{padding: "0"}} />
          </TextBlock>
        </OffsetBody>
        <PrototypeSection>
          <PrototypeWrapper>
            <iframe src="https://marvelapp.com/3f9161c?emb=1&iosapp=false&frameless=false" style={iFrameStyle} width="452" height="901" allowTransparency="true" frameborder="0"></iframe>
          </PrototypeWrapper>
          <IntroBody>
              <PrototypeText>
                <SectionTitle>Prototype Commentary</SectionTitle> 
              </PrototypeText>
              <PrototypeText>
                <p>We utilized a variety of prototypes ranging from <strong>hand sketches</strong> to <strong>interactive mockups</strong> to test the usability of the flows and designs we made. </p>
                <p>This is a high-fidelity interactive prototype that we utilized to conduct user tests with. While rudimentary, it served as an effective tool in helping us <strong>identify usability issues</strong> and <strong>potential pain points.</strong>  </p>
                <p>The <strong>use goal</strong> that we set out for our testers with this prototype was to create a group travelling to hike a popular local trail known as Mailbox Peak.</p>
              </PrototypeText>
              <PrototypeText>
                <PrototypeLink href="https://marvelapp.com/3f9161c" target="_blank">View the prototype here!</PrototypeLink>
              </PrototypeText>
          </IntroBody>
        </PrototypeSection>
        <OffsetBody style={{marginBottom: "0"}}>
          <TextBlock style={{marginBottom: "0"}}>
            <Divider style={{padding: "0"}} />
          </TextBlock>
        </OffsetBody>
        <OffsetBody>
          <TextBlock>
            <ImageWrapper>
              <Img fluid={data.ProfileMontage.childImageSharp.fluid} />
            </ImageWrapper>
          </TextBlock>
        </OffsetBody>
        <OffsetBody >
          <TextBlock>
            <SectionTitle>Hindsight = 20/20</SectionTitle>
          </TextBlock>
          <ColumnBlock>
            <p>It's always refreshing to be able to come back to a past project with fresh eyes to see what was done and what could have been improved. </p>
            <p>This project is no exception and while perfect is certainly the enemy of good, the pursuit of excellence is more often than not rooted in incremental progress undertaken over time and that was what I sought to achieve with my <strong>redesign</strong> of Nimbus.</p>
            <p>The immediate objective with this redesign was to improve the <strong>visual clarity</strong> of the interface through cleaning up the information hierachy, removing unnecessary information as well as reworking some of the symbology.</p>
          </ColumnBlock>
        </OffsetBody>
        <ImageWithMargin>
          <Img fluid={data.RevisedScreensWhite.childImageSharp.fluid} />
          <ImageCaption onClick={() => navigate("/nimbus/redesign")} >
              View the redesign here!
          </ImageCaption>
        </ImageWithMargin>
        <OffsetBody>
          <ColumnBlock>
            <p>
              There was never really a big aha moment that led to us arriving at our solution in its present form. Instead, it came about as a result of multiple evolutions of prototyping and testing as we strove to incorporate user feedback as much as possible at every stage.
              This user-centered approach not only allowed us to better incorporate testing feedback, but also yielded surprising takeaways and insights about user behavior that allowed us greater freedom to evolve the design in ways that nobody anticipated from the start.
            </p>
          {/* </TextBlock>
          <TextBlock> */}
            <p>
              This project was conducted over multiple sprints with a round of user testing at the end of each sprint to validate ideas and garner feedback from prospective users. I aimed to document my insights as I experienced them over the course of the project and as such, I've broken up this case study into multiple sections with each section roughly corresponding to a sprint cycle that we worked.   
            </p>
          </ColumnBlock>
        </OffsetBody>
        <RightButton onClick={() => navigate("/nimbus/survey-ideation")}>
          <ButtonHeader>NEXT SECTION</ButtonHeader>
          <ButtonText>{sections[props.active + 1]}</ButtonText>
        </RightButton>
      </Container>
    </>
  )
}   