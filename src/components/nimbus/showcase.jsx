import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import joinGif from "../../images/giphy.gif"

import { Container, ImageWrapper, FlexWrapper, IntroBody, OffsetBody, RightButton, ButtonHeader, ButtonText, sections, TextQuote, Image, InfoPanel } from "../constants"

const TextBlock = styled.div`
  max-width: 46rem;
  margin: 0 auto;
  // letter-spacing: -0.15px;
  // margin-bottom: 1.25rem;
`



const HeroText = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: #666666;
  letter-spacing: -1px;
  // letter-spacing: -0.8px;
  line-height: 1.4;
  max-width: 60rem;
  margin-bottom: 3.5rem;  

  @media (max-width: 1240px) {
    font-size: 1.5rem;
  }
`

const Highlight = styled.span`
  font-weight: 500;
  color: #333333;
`

const HeroSub = styled.h4`
  font-weight: 500;
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

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin: 7rem 0;
  padding: 3.5rem;
  justify-content: space-between;
 
  @media (max-width: 1440px) {
    padding: 1.75rem 0;
  }

  @media (max-width: 1240px) {
    display: block;
    margin: 3.5rem 0;
    padding: 1.5rem;
  }
`

const FlexBody = styled.div`
margin: 7rem auto;

@media (max-width: 1440px) {
  margin: 7rem 3.5rem;
}

@media (max-width: 1240px) {
  margin: 3.5rem 0; 
}

`

const BlockIntro = styled.h2`
  font-size: 2rem;
  margin: 2rem 0;
  max-width: 32rem;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -1px;
  // letter-spacing: -0.5px;
  // font-family: "Founders Grotesk"; 
  // font-weight: 600;
  // font-size: 2.5rem;
  // letter-spacing: 0;
  // line-height: 1;

  // font-size: 1.75rem;
  // font-weight: 500;
  // letter-spacing: -0.8px; 
  // margin: 1.75rem 0;


  @media (max-width: 1024px) {
    font-size: 1.5rem;
    letter-spacing: -0.8px
  }
`

const FlexBlockIntro = styled(BlockIntro)`
  // margin: 3.5rem 0;
`

const PrototypeWrapper = styled.div`
  margin: 0 3.5rem;

  @media (max-width: 768px) {
    margin: 0;
    display: none;
  }
`




const PrototypeText = styled(TextBlock)`
  max-width: 28rem;



  @media (max-width: 1240px) {
    max-width: 46rem;
  }
`
const ImageWithMargin = styled(ImageWrapper)`
  margin-top: 3.5rem;
`

const ImageCaption = styled.a`
  font-weight: 500;
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

const FlexImage = styled.div`
  width: 30rem;
  padding: 0 3.5rem;
  // max-width: 20%;

  @media (max-width: 1320px) {
    width: 25rem;
  }


  @media (max-width: 1240px) {
    max-width: 25rem;
    // width: auto;
    padding: 0;
    margin: 0 auto;
  } 
  
`

const PitchDeckLink = styled(ImageCaption)`
  text-align: left;
  // font-family: "EB Garamond", serif;
  // font-style: italic;
  // font-size: 1.2rem;
  // font-weight: 500;
  text-decoration: none;
  
`



const Box = styled.div`
  // border: 1px solid #dddddd;
  border-radius: 16px;
  // background-color: #fafafa;
  background-color: #F9FAFE;
  // width: 100%;
  text-align: center;
  margin-top: 5rem;
  padding: 4rem 2rem;
`

const ColumnBlock = styled(TextBlock)`
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  // color: #666;

  -webkit-column-gap: 2rem;
  -moz-column-gap: 2rem;
  column-gap: 2rem;
  // max-width: 42rem;

  @media (max-width: 1024px) {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 1;
  }
`

const Quote = styled(TextQuote)`
  // font-family: "EB Garamond", serif;
  font-size: 1.8rem;
  border-left: solid 2px #333333;
  letter-spacing: -1px; 
  font-weight: 400;
  padding-left: 3.5rem;
  max-width: 45rem;
  line-height: 1.3;
  color: #333;

  @media (max-width: 1240px) {
    padding-left: 2rem;
    font-size: 1.5rem;
  }
`

const ImageOffset = styled(OffsetBody)`
  padding: 0 3.5rem;

  @media (max-width: 1240px) {
    padding: 0;
  }
`

const ImageSubCaption = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  // color: #666666;
`

const JohnMuir = styled.div`
  box-sizing: border-box;
  background-color: #113731;
  // background-color: #225c4e;
  // background-color: #2e6b34;
  width: 96vw; 
  padding: 11rem 9rem;
  

  // @media (max-width: 1440px) {
  //   width: 
  // }

  @media (max-width: 1320px) {
    padding: 10rem 7.5rem;
  }


  @media (max-width: 1240px) {
    width: auto;
    padding: 8rem 6rem;
  }

  @media (max-width: 1024px) {
    padding: 4rem 3rem;
  }
`

const JohnMuirQuote = styled.p`
  font-family: "Founders Grotesk";
  font-size: 3.8rem;
  font-weight: 500;
  color: #fff;
  color: #f9f8f6;
  line-height: 1.05;
  max-width: 60rem;
  // letter-spacing: 0.1px;

  @media (max-width: 1400px) {
    max-width: 52rem;
  }

  @media (max-width: 1240px) {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

const JohnMuirCaption = styled.p`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
`

const ImageBackground = styled.div`
  background-color: #f5f5f5;
  padding: 7rem;

  @media (max-width: 1120px) {
    padding: 0;
  }
`

const iFrameStyle = {
  transform: "scale(0.75)"
}





export default function Showcase(props) {
  
  const data = useStaticQuery(graphql`
    query {
      HeroImage: file(relativePath: { eq: "Hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 3200) {
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
      LocationScreen: file(relativePath : {eq: "Location-Screen-New.png"}) {
        childImageSharp {
          fluid(maxWidth:3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Bundy: file(relativePath: {eq: "Bundy.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Process: file(relativePath: {eq: "process.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Location: file(relativePath: {eq: "location.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ColorCoding: file(relativePath: {eq: "color-coding.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      NewColorCoding: file(relativePath: {eq: "new-color-coding.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      FinalScreen: file(relativePath: {eq: "final-screens.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PNW: file(relativePath: {eq: "mockup.png"}) {
        childImageSharp {
          fluid(maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <section id="section-1">
        <ImageWrapper>
          <Img fluid={data.HeroImage.childImageSharp.fluid} />
        </ImageWrapper>
        <OffsetBody>
            <TextBlock>
              <HeroText> 
                <Highlight>Nimbus</Highlight> is a mobile experience that aims to solve the transport challenges of remote outdoor exploration by connecting adventurers with one another and having them share transport to outdoor recreation areas. 
              </HeroText>
              {/* <PitchDeckLink href="https://www.figma.com/proto/rqb3pn14vDM8drmDBvJGWY/Nimbus-Pitch-Deck?node-id=92%3A3&scaling=scale-down" target="_blank">View the condensed pitch deck here!</PitchDeckLink> */}
            </TextBlock>
        </OffsetBody>
        <OffsetBody style={{}}>
          <TextBlock >
            {/* <SectionTitle>
              A Brief Background.
            </SectionTitle> */}
            <BlockIntro>Why are we doing this?</BlockIntro>
            <p>
              I love being in the outdoors. It matters not if I’m on the beach, the mountains or the rainforest – there’s something about getting lost in nature that reinvigorates the soul. And I’m not alone in feeling this way; With over 300 million National Park visits in 2019 alone, the outdoors is absolutely exploding in popularity.
              Getting there however, is often the biggest obstacle in itself. With a majority of outdoor destinations in remote locales, access to a personal vehicle is almost all but necessary.
            </p>
          </TextBlock>
          <TextBlock>
            <p>
              This seemingly innocuous obstacle also brings about the specter of socioeconomic inequity; By basing access to a vehicle as a precondition,  it's almost as if the outdoors has become a playground that's exclusive to the well-off. Nimbus is our take on solving this problem. By connecting outdoor enthusiasts with like-minded peers and have them carpool to outdoor destinations, our hope was to bridge the transportation barrier and enable access to the outdoors to all. 
            </p>
          </TextBlock>
        </OffsetBody>
        <JohnMuir>
          <JohnMuirQuote>
          “Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity.”
          </JohnMuirQuote>
          <JohnMuirCaption>
            – John Muir, <span style={{fontWeight: "400"}}>Our National Parks</span>
          </JohnMuirCaption>
        </JohnMuir>
        </section>
        <section id="section-2">
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <FlexBox>
          <FlexImage>
            <Img fluid={data.Bundy.childImageSharp.fluid} />
            <ImageSubCaption>"What if I end up with a serial killer?" was the soundbite that stood out during our surveys. The specter of Ted Bundy, one of America's most notorious serial killers, loomed large.</ImageSubCaption>
          </FlexImage>
          <FlexBody>
              <PrototypeText>
                <FlexBlockIntro>
                  Getting into cars with strangers. (Or not)
                </FlexBlockIntro>
                <p>
                  User safety was the primary concern expressed by our professor and mentor, Brian Fling. The initial plan was to have users ride-share to outdoor destinations – sort of like Uber for the outdoors. However, the idea of having users travel with strangers to remote locales left a fair degree of apprehension. Our surveys indicated a similar sentiment amongst our users as well.
                </p>
                <p>The immediate priority in our following sprint was therefore to alleviate potential safety issues. One of our key mitigative measures was the introduction of user profiles.  </p>
              </PrototypeText>
          </FlexBody>
        </FlexBox>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease" style={{backgroundColor: "#f5f5f5", padding: "1.75rem"}}>
        <OffsetBody>
          <TextBlock>
            <BlockIntro>Designing for Trust and Community.</BlockIntro>
            <p>
            We hypothesized that user profiles would help build trust & social proof; by encouraging users to share a little piece of themselves, it opens up a small window of mutual vulnerability that we hoped would dispel fear or uncertainty with using the platform. It also offers users a perception of control by allowing them to research their counterparts rather than stepping off blind into the unknown. 
            </p>
            <p>
              As we tested our user profiles further, we discovered that many of our users were in fact expressing more concern over chemistry & compatibility with potential travel companions than with their own personal safety. It was almost as if the safety concerns went out the window when our users got to see a user profile for themselves
            </p>
          </TextBlock>
        </OffsetBody>
        <ImageOffset >
            <Img fluid={data.PaperPrototypes.childImageSharp.fluid} />
            <ImageSubCaption>First impressions matter. While we believed that full profiles go a long way towards building trust, we wanted to test that hypothesis nonetheless. We designed user profiles with varying degrees of sketchy personas and had testers rate their comfort levels with each profile.  </ImageSubCaption>
        </ImageOffset>
        <OffsetBody>
          <TextBlock>
            <p>
              In addition, we realized that the sheer remoteness means that there is safety in numbers. For example, if you were backcountry skiing and somehow got caught in an avalanche, having a partner on hand to call rescue or dig you out could mean the difference between life or death.
            </p>
            <p>
              With the introduction of profiles and emphasis on safety in numbers, Nimbus evolved from "National Park Uber" to something more akin to a hybrid of AirBnb and a local outdoor Facebook community.
              Our concept was now premised on having users group up and adventure outdoors together. 
            </p>
          </TextBlock>
          {/* <ImageCaption style={{textAlign: "center", marginTop: "3.5rem"}} onClick={() => navigate("/nimbus/survey-ideation")} >
              View the deep dive into the research & ideation process
          </ImageCaption> */}
        </OffsetBody>
        </div>
        </section>
        <section id="section-3">
        <OffsetBody style={{marginBottom: "3.5rem"}}>
          <TextBlock>
            <BlockIntro>
              Test. Iterate. Then test it again. 
            </BlockIntro>
            <p>
              If that sounds like Groundhog Day to you, you’re probably not wrong. We adopted a <strong>rapid prototyping</strong> based approach and let our users steer where we went with our designs through frequent iteration and testing. You’ve already seen the paper prototypes up top. I've also interspesed the rest of this case study with various screens and prototypes of differing fidelities. 
            </p>
          </TextBlock>
        </OffsetBody>
        <OffsetBody style={{marginTop: "3.5rem"}}>
          <TextBlock style={{maxWidth: "56rem"}}>
            <ImageWrapper>
              <Img fluid={data.UserFlow.childImageSharp.fluid}/>
            </ImageWrapper>
            <ImageSubCaption style={{marginTop: "3.5rem"}}>
              We attempted to take advantage of existing conceptual models whenever possible. The idea was to maximize intuitiveness by leveraging a user’s familiarity with existing processes. The above diagram depicts a rough flow of our “join a group” process here which was really modelled after AirBnb’s flow for making a reservation with a host
            </ImageSubCaption>
            {/* <ImageCaption style={{marginTop: "3.5rem"}}  onClick={() => navigate("/nimbus/flows-wireframes")} >
              View wireframes used to test primary use cases
            </ImageCaption> */}
          </TextBlock>
        </OffsetBody>
        <div data-sal="fade" data-sal-delay="150" data-sal-duration="1200" data-sal-easing="ease">
          <OffsetBody>
            <TextBlock>
              <BlockIntro>
                We talked to people but more importantly, we listened.
              </BlockIntro>
              <p>
                We prized user feedback above all else. While we sought to test specific features and flows in our user tests, we also took the opportunity to conduct semi-structured interviews with our testers. As product designer, this was especially critical to me; Because as much as I thought I understood the problem space, I was not the user. Conversations with testers and potential users helped us check assumptions that we may have carried and also yielded insight that helped us evolve the product.
              </p>
            </TextBlock>
          </OffsetBody>
          <ImageOffset style={{marginBottom: "1.75rem"}} >
            <Img fluid={data.Process.childImageSharp.fluid}  />
            <ImageSubCaption>Our solution was fleshed out over a series of design sprints, where use cases as well as features were iterated and tested through rapid prototyping. Test, iterate and then test it again was the mantra we lived by.</ImageSubCaption>
          </ImageOffset>
          <ImageOffset style={{marginTop: "1.75rem"}} >
            <Img fluid={data.TestFrameFullWidth.childImageSharp.fluid}  />
            <ImageSubCaption>User tests were conducted in both controlled settings and guerilla style where unwitting passer-bys were recruited to be impromptu testers. Conversations with testers were critical towards helping us expand our understand of the problem space and evolve our vision for the product.</ImageSubCaption>
          </ImageOffset>
        </div>
        <OffsetBody>
          <TextBlock>
            <p>
              We conducted most of our tests with low-fidelity wireframes. This allowed us a certain freedom to experiment and make changes because of the relatively low investment and effort put into the prototypes.
            </p>
            <p>
              High-fidelity mockups were saved for last and only worked on after we validated our key flows and features with lower-fidelity prototypes. We were also constantly uncovering other pain points associated with outdoor travel during our testing process, and we sought to address some of them with our high-fi prototypes. 
            </p>
          </TextBlock>
        </OffsetBody>
        </section>
        <section id="section-4">
        <FlexBox style={{backgroundColor: "#f5f5f5"}}> 
          <FlexBody>
            <img src={joinGif} />
            <ImageSubCaption style={{maxWidth: "270px"}}>Users can search for and join groups based on location, difficulty, length, popularity etc.</ImageSubCaption>
          </FlexBody>
          <OffsetBody>
            <PrototypeText>
              <FlexBlockIntro >
                Passing the vibe check.
              </FlexBlockIntro>
              <p>
                Adventures in the outdoors are only as good as the company you’re with. With chemistry and compatibility cited as a major user concern, I wanted to let users be able to size each other up before committing to a group. 
              </p>
              <p>
                This was done through allowing users to search for groups through various criterias, encouraging users to talk to group hosts when requesting to join a group, having descriptive group listings and encouraging full profiles by all users.
              </p>
            </PrototypeText>
          </OffsetBody>
        </FlexBox>
        <FlexBox style={{alignItems: "flex-start"}}>
          <FlexBody>
            <PrototypeText>
              <FlexBlockIntro>
                Streamlining the preflight.
              </FlexBlockIntro>
              <p>
               Difficulty in finding information relevant to the area of travel was one of our most cited pain points, with data either hard to find or out of date. I’ve personally been subject to this and have had close calls after being caught out by unexpected conditions or hazards in the outdoors. 
             
              </p>
              <p>
                I sought to address this by aggregating information relevant to the location such as conditions, terrain and hazards into a single page to help streamline the research and aid in user preparation.
              </p>
              {/* <ImageCaption style={{textAlign: "left", marginTop: "3.5rem"}} onClick={() => navigate("/nimbus/high-fi")} >
                View the high-fidelity screen descriptions
              </ImageCaption> */}
            </PrototypeText>
          </FlexBody>
          <FlexImage style={{padding: "0rem"}}>
            <Img fluid={data.Location.childImageSharp.fluid} />
          </FlexImage>
        </FlexBox>
        <div data-sal="fade" data-sal-delay="150" data-sal-duration="1200" data-sal-easing="ease">
        <ImageOffset style={{padding: "3.5rem"}}>
          <Img fluid={data.FinalScreen.childImageSharp.fluid}/>
        </ImageOffset>
        </div>
        </section>
        <section id="section-5">
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1200" data-sal-easing="ease">
        <OffsetBody>
          <TextBlock>
            <BlockIntro>
              An expression of vanity.
            </BlockIntro>
            <p>
              A couple of months after this project, the iPhone X became all the rage and designing for screens with a notch was to become flavor of the month/year. With the benefit of hindsight and fresh eyes, I set out on a little redesign exercise; mostly on the visual front with some work to clean up the alignment on a soft 8-point grid, strengthening the visual hierarchy etc. 
            </p>
          </TextBlock>
        </OffsetBody>
        <ImageWrapper>
          <Img fluid={data.RevisedScreensWhite.childImageSharp.fluid} />
          {/* <ImageCaption onClick={() => navigate("/nimbus/redesign")} >
              View the redesign here
          </ImageCaption> */}
        </ImageWrapper>
        </div>
        <OffsetBody>
          <TextBlock>
            <p>
            Brian (our prof) wasn’t too keen on us using traffic light color coding to denote difficulty in our original versions– and he’s got a point. Colors are loaded with meaning – for example: when we coded “hard” with the color red, the connotation is that there is danger to be expected. Yet that isn’t necessarily the case, because hard is just that – hard. There may be technical skillsets required but that doesn’t mean that something is or should be dangerous. 
            </p>
          </TextBlock>
        </OffsetBody>
        <ImageOffset>
          <TextBlock>
            <Img fluid={data.ColorCoding.childImageSharp.fluid} />
            <ImageSubCaption>Difficult ≠ Dangerous. While Mailbox Peak here is known to be a thigh-burner of a hike, it is by no means dangerous with much of the trail being well marked and well maintained.</ImageSubCaption>
          </TextBlock>
        </ImageOffset>
        <OffsetBody>
          <TextBlock>
            <p>
              After some research, I decided to adopt the trail difficulty symbology system used by the National Ski Area's Association (NSAA).
            </p>
            <p>
            The NSAA first adopted a system of signage in the winter of 1964-65. Before that, as if skiing on wooden boards with leather boots wasn’t hard enough, it was every man for himself. The colors they used were different than today and also conflicted with the colors used in Europe. American Resorts used yellow to designate intermediate trails and the French used red because, well who knows why—they’re French.
            </p>
          </TextBlock>
        </OffsetBody>
        <FlexBox style={{alignItems: "flex-start", backgroundColor: "#f5f5f5"}}>
          <FlexImage style={{padding: "0rem"}}>
            <Img fluid={data.NewColorCoding.childImageSharp.fluid} />
          </FlexImage>
          <FlexBody>
            <PrototypeText>
              <FlexBlockIntro>  
                The anatomy of symbology.
              </FlexBlockIntro>
              <p>
                The Walt Disney Company was looking into opening a ski resort in the 1960s. As part of that project, they did studies and tests on which colors worked best. They had even tested skier’s reactions to different geometric figures, concluding for example, that the symbol for easy terrain should be a circle, which was perceived as soft, and that the color of the circle should be green, which was perceived as mellow. 
             </p>
             <p>The Walt Disney system was adopted by the NSAA in 1968 and has served North American skiing well for over 50 years. As such, this is also the system I have chosen to adopt for this purpose today. </p>
            </PrototypeText>
          </FlexBody>
        </FlexBox>
        </section>
        <section id="section-6">
        <OffsetBody>
          <TextBlock>
            <BlockIntro>Next Steps.</BlockIntro>
            <p>In terms of next steps, Nimbus has mostly covered the "before trip" aspect of outdoor travel, but there's also tremendous room to explore if we were thinking holistically about the outdoor experience. There are things we can implement “during the trip”, such as having trail maps, directories for nearest resources such as ranger stations, shelters and latrines, perhaps an ability to find out if there are other groups nearby (which dovetails into community). </p>
            <p>
              The experience doesn’t end “after the trip” as well, ideally we would want users to continue engaging with one another, expand communities, plan new trips etc. There’s room to grow for Nimbus if given the time and opportunity to do so.
            </p>
          </TextBlock>
        </OffsetBody>
        <OffsetBody>
          <TextBlock>
            <BlockIntro>The Last Bit.</BlockIntro>
            <p>
              There were many lessons from this project. Many. I’ll roughly go through them in no particular order: User research is never one and done, keep ideas at its lowest fidelity, test and test some more, never assume anything – always acknowledge your assumptions and validate them, you are not the user, and the list goes on.
            </p>
            <p>
            This is probably the project that has most influenced how I approach my role as a product designer. Huge props to Brian Fling for the mentorship. This case study is long because Brian made us document everything, and rightfully so because there was so much that I learnt from this project.
            </p>
          </TextBlock>
        </OffsetBody>
        </section>
        {/* <RightButton onClick={() => navigate("/nimbus/survey-ideation")}>
          <ButtonHeader>NEXT SECTION</ButtonHeader>
          <ButtonText>{sections[props.active + 1]}</ButtonText>
        </RightButton> */}
      </Container>
    </>
  )
}   