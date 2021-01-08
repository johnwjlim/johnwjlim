import React, {useState} from "react"
import { Waypoint } from 'react-waypoint';
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Animated from "../images/pool.mp4"

import Individual from "../components/pool-2/pool-individual"
import Footer from "../components/pool-2/footer"


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;


`

const HeaderLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  padding: 1.3rem 0;
`;

const Wrapper = styled.div`
  padding: 0px 2.5rem 1.45rem;

  @media (max-width: 425px) {
    padding: 0 1.25rem 1.45rem;
  }
`

const MobileMenu = styled.div`
  display: flex;
  padding: 1.3rem 2.5rem;


  @media (max-width: 1240px) {
    padding: 1.15rem 0;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-right: 2.5rem;
    margin-right: 1rem;
  }
`

const MobileLink = styled(Link)`
  // font-family: Sohne, sans-serif;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.8;
  margin-left: 2rem;
  transition: 0.2s;
  color: #333;


  :hover {
    // text-decoration: underline;
    color: #a5a5a5;
  }
`

const HeaderTitle = styled.h2`
  margin: 0;
  letter-spacing: -0.4px;
  font-weight: 500;
  line-height: 1;
  font-size: 1.4rem;

  transition: 0.3s;


  @media (max-width: 425px) {
    font-size: 1.25rem
  }

  &:hover {
    color: #a5a5a5;
  }
`

const Container = styled.div`
  padding: 6rem 4rem;
  margin: 0 auto;
  max-width: 1680px;

  @media (max-width: 1440px) {
    padding: 6rem 0;
  }


  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const TitleContainer = styled.div`
  padding: 4rem 8rem;
  margin: 0 auto;
  max-width: 1680px;
  // padding-bottom: 3rem;

  @media (max-width: 1440px) {
    padding: 2rem 0;
  }
  
`

const Title = styled.h1`
  font-family: Sohne, sans-serif;
  font-weight: 600;
  font-size: 3rem;
  margin-top: 0rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.1;
  max-width: 64rem;

  letter-spacing: -0.01rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    line-height: 1.1;
  }
    
`

const Subtitle = styled.h2`
  font-family: Sohne, sans-serif;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.5px;
  // font-size: 1.3rem; 
  margin-bottom: 0;
`

const HeroImage = styled.div`
  width: 100%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;


  @media (max-width: 1024px) {
    display: block;
  }
`

const Col = styled.div`
  flex: 1 1 40rem;
  padding: 2rem 4rem;

  @media (max-width: 1440px) {
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`

const ProjectBlurb = styled.p`
  font-family: Sohne, sans-serif;
  font-weight: 500;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.4;
  letter-spacing: 0;
  max-widdth: 40rem;
`

const MicroHeader = styled.h4`
  font-family: Sohne, sans-serif;
  font-weight: 400;
  color: #c5c5c5;
  margin-bottom: 0.5rem;
`

const MicroText = styled(MicroHeader)`
  color: #fff;
  margin-bottom: 2rem;
`

const PortfolioLink = styled.a`
  text-decoration: none;
  transition: 0.2s;
  color: #ffffff;

  font-family: Sohne, sans-serif;
  font-weight: 400;
  letter-spacing: 0;

  :hover {
    color: #b5b5b5;
    cursor: pointer;
  }
`

const SectionTitle = styled.h2`
  font-family: Sohne, sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  max-width: 28rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: 0px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

const SectionText = styled.p`
  font-family: Sohne, sans-serif;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.01rem;
  letter-spacing: 0.15px;
  max-width: 40rem;
  margin-bottom: 2rem;
  // font-size: 1.05rem;
`

const FeatureTitle = styled(SectionTitle)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  // font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`

const ListText = styled(SectionText)`
  margin-bottom: 1rem;
`

const ImageWrapper = styled.div`
  margin: 4rem 0;
`

const Poster = styled.div`
  max-width: 900px;
  margin: 4rem auto;
`


const ImageCaption = styled.p`
  font-family: Sohne, sans-serif;
  font-weight: 400;
  color: #888;
  letter-spacing: 0.2px;
  font-size: 0.8rem;
`

const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  padding-top: 76%;
  // padding-top: 0;
  // margin-top: 3.5rem;
`

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`

const Frame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    
`


export default function Pool() {
  const data = useStaticQuery(graphql`
    query {
      Patrick: file(relativePath: {eq: "patrick-bezel.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PatrickFull: file(relativePath: {eq: "patrick-1-bezel.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CityLight: file(relativePath: {eq: "citylight.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Graph: file(relativePath: {eq: "Graph.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Ideation: file(relativePath: {eq: "pool-ideation-color-2.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      } 
      Shower: file(relativePath: {eq: "shower.jpg"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PoolPoster: file(relativePath: { eq: "pool-poster.png"}) {
        childImageSharp {
          fluid (maxWidth: 3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [color, setColor] = useState("#333333"); 

  function handleWaypointEnter() {
    // setColor("#ffffff")
    console.log("waypoint entered")
  }

  function handleWaypointLeave() {
    setColor("#333333")
    console.log("waypoint left")
  }

  return (
  <>
    <SEO title="POOL" />
    {/* <FauxHeader> */}
    <Wrapper style={{ }}>
      <HeaderWrapper>
        <HeaderLink to="/">
          <HeaderTitle>John Lim</HeaderTitle>
        </HeaderLink>
        <MobileMenu>
            <MobileLink to="/about">About</MobileLink>
            <MobileLink 
              as="a"
              target="_blank"   
              href="https://drive.google.com/file/d/1zf2wjFeNlD-gDA0sN-ENI_ViZbj4yLGc/view?usp=sharing"
            >
              Resume
            </MobileLink>
        </MobileMenu>
      </HeaderWrapper>
      <div data-sal="fade" data-sal-delay="150" data-sal-duration="1200" data-sal-easing="ease">
      <TitleContainer>
        <Title>Encouraging better and more responsible consumption of household utilities.</Title>
        <Subtitle>POOL</Subtitle>
      </TitleContainer>
      </div>
    </Wrapper>
    <HeroImage>
      <Img fluid={data.Patrick.childImageSharp.fluid} />
    </HeroImage>
    <Wrapper style={{backgroundColor: "#000"}}>
      <Container>
        <Row style={{margin: "auto"}}>
          <Col style={{flex: "1 1 30rem"}}>
            <div data-sal="fade" data-sal-delay="000" data-sal-duration="1200" data-sal-easing="ease">
            <ProjectBlurb>
            It's easy to overlook our day to day consumption of water and energy, especially in the comfort of our homes. Yet as climate change continues to intensify, it is now more imperative than ever for us to take better control of our resource use.
            <br/><br/>POOL was the cumulative deliverable of a group project that aimed to find solutions to encourage more responsible consumption of household utilities.
            </ProjectBlurb>
            </div>
          </Col>
          <Col style={{flex: "1 1 32rem", paddingRight: "0" }}>
          <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease">
            <MicroHeader>
              Timeline
            </MicroHeader>
            <MicroText>
              Fall 2019
            </MicroText>
            <MicroHeader>
              Team
            </MicroHeader>
            <MicroText>
              <PortfolioLink href="https://abooneportfolio.com/" target="_blank">Ashley Boone</PortfolioLink>, &nbsp;
              <PortfolioLink href="https://www.isabellearmstrong.me/" target="_blank">Isabelle Armstrong</PortfolioLink>, &nbsp; 
              <PortfolioLink href="http://stephensherwood.me/" target="_blank">Stephen Sherwood</PortfolioLink>, &nbsp;
              Myself
            </MicroText>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    {/* <Wrapper style={{backgroundColor: "#fff"}}>
      <Container>
        <Row>
          <Col style={{paddingRight: "0", flex: "1 1 32rem"}}>
          <div data-sal="fade" data-sal-delay="000" data-sal-duration="1200" data-sal-easing="ease">
          <SectionTitle>The Failure of the Free Market</SectionTitle>
          </div>
          </Col>
          <Col>
          <div data-sal="fade" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease">
          <SectionText>
            The provision of public utilities sounded very much like a government thing, and so I took the chance to put on my policy hat and approach this from an economic lens. As with any finite resource that requires responsible allocation, the economist would more than likely suggest letting the "invisible hand" of the free market guide the equilibrium level of demand and supply. Most utilities already do this by setting a price on water and electricity. 
          </SectionText>
          <SectionText>
            Yet even with consumption regulated by market forces, it is largely agreed by most people that our consumption of resources is still too high. This overconsumption can be attributed to market failure due to negative externality, where the costs borne by a third party as a result of our consumption of utilities, such as climate change and the depletion of resources, are not fully accounted for by the free market equilibrium price.
          </SectionText>
          <ImageWrapper>
            <Img fluid={data.Graph.childImageSharp.fluid} />
            <ImageCaption>Without intervention, the market will produce utilities at Point A, resulting in a welfare loss due to externalities such as climate change which are not accounted for by the market. The socially optimal equilibrium would be at Point B.  </ImageCaption>
          </ImageWrapper>
          <SectionText>
          The market-based solution would be to tax my way to the socially efficient equilibrium price and quantity, which in this case would be the equivalent value of P2 - P1 on the graph. However, I didn't quite fancy being the person that suggested imposing a tax on a basic household necessity because that it is just about the most socio-economically regressive form of policy possible. A more elegant solution was needed. A design solution was necessary. 
          </SectionText>
          </div>
          </Col>
        </Row>
      </Container>
    </Wrapper> */}
    <div data-sal="fade" data-sal-delay="200" data-sal-duration="1200" data-sal-easing="ease">
    <Wrapper style={{backgroundColor: "#f5f5f5"}}>
      <Container>
        <Col>
          <SectionTitle>
            An Imperfect Source of Information
          </SectionTitle>  
        </Col>
        <Row>
          <Col >
            {/* <SectionText>
              We conducted preliminary research by engaging with friends and family on their views of our topic. Most agreed with our premise that overconsumption of household utilities was a problem. The key theme that stood out to me was that of <strong>imperfect information</strong>; Almost all of the people I spoke to had little understanding of their real time resource use as well as the environmental impact of their consumption.   
            </SectionText> */}
            <SectionText>
              Have you ever looked at your water meter at home and wonder, "What in the world is going on here?" — I certainly have; And so have countless others I spoke to who couldn't figure how to intepret a water meter even if they tried. With little means to track consumption until the bill shows up at the end of the month, it's no wonder we don't know how much water & energy we're using as well as the impact of our consumption.
            </SectionText>
            {/* <SectionText>
            Further research into existing systems for measuring household utilities consumption revealed additional findings: 
            </SectionText> */}
            <SectionText>The theme of <strong>imperfect information</strong> also stood out through my research process in other ways: </SectionText>
            <SectionText>
              <ul style={{marginTop: "0"}}>
                <li>
                    <ListText>Few people knew how to interpret a water or electric meter; they're clearly not designed to be used by an everyday consumer.</ListText>
                </li>
                <li>
                    <ListText>Utility bills are great at helping you understand your total consumption, but not helpful if you're trying to understand how you're consuming it.</ListText>
                </li>
                <li>
                  <ListText>
                    Utility bills often come in units that are alien to most – kilowatt hour and centum cubic feet are not units of measurement that are seen everyday.
                  </ListText>
                </li>
                <li>
                  <ListText>
                    Monthly cycle of bills makes it harder to gauge effects of behavioral change.
                  </ListText>
                </li>
              </ul>
            </SectionText>
          </Col>
          <Col>
            <div style={{margin: "0 2rem"}}>
            <Img fluid={data.CityLight.childImageSharp.fluid} />
            <ImageCaption style={{marginTop: "1rem"}}>
              Other than the monetary amount due, much of what's on the bill is not very useful at helping users understand their consumption
            </ImageCaption>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    </div>
    <Wrapper>
      <Container>
        <Row>
          <Col style={{paddingRight: "0", flex: "1 1 32rem"}}>
            <SectionTitle>The Approach</SectionTitle>
          </Col>
          <Col>
          <div data-sal="fade" data-sal-delay="00" data-sal-duration="1200" data-sal-easing="ease">
            {/* <SectionText>
              I've established that economic theory holds that we are over-consuming household utilities due to us not fully accounting for all of the costs related to our consumption (externalities such as impact to environment). Furthermore, our research shows that this is due to <strong>imperfect information</strong> stemming from inadequacies in present means of measuring and understanding consumption.
            </SectionText> */}
            <SectionText>With imperfect information about consumption being a key reason behind our over-consumption of resources, we set our to find ways to better address how consumption data is presented to the useer. </SectionText>
          </div>
          </Col>
        </Row>
        <Col>
        <div data-sal="fade" data-sal-delay="00" data-sal-duration="1500" data-sal-easing="ease">
          <ImageWrapper>
            <Img fluid={data.Ideation.childImageSharp.fluid} />
            <ImageCaption style={{marginTop: "1rem"}}> We undertook a series of ideation exercises (brainstorming, sketching, crazy 8s) as a group and emerged with dozens of ideas on how to approach this problem. We sorted through the ideas we had and managed to synthesize them down to a couple of themes, which we then carried forward for both our individual and team deliverables.</ImageCaption>
          </ImageWrapper>
        </div>
        </Col>
          <Col>
            <SectionText style={{margin: "0 auto", marginBottom: "2rem"}} >
            We performed ideation exercises as a team. While we had the opportunity to explore some uniquely creative ideas such as doing the ice-bucket challenge as forfeit for showers gone long to cycling a dynamo to power appliances, most of our ideas ultimately revolved around the theme of addressing <strong>imperfect information</strong> through helping users better measure and understand the impact and extent of their consumption.
            </SectionText>
            <SectionText style={{margin: "0 auto", marginBottom: "2rem"}} >
              {/* <br/><br/> */}
              By tackling imperfect information and helping users understand the true costs and impact of overconsumption, the goal was to drive behavior change through individual incentive (without having to resort to something as crude as taxation)
            </SectionText>
        </Col>
      </Container>
    </Wrapper>
    <Individual />
    <Wrapper style={{backgroundColor: "#000"}}>
      <Container>
        <Row>
          <Col style={{flex: "1 1 32rem"}}>
            <SectionTitle style={{color: "#ffffff"}}>The Headliner</SectionTitle>
          </Col>
          <Col>
          <SectionText style={{color: "#fff"}}>
            As our team deliverable, we were to design a solution to the problem with <strong style={{fontWeight: "600", color: "#fff"}}> the technologies of tommorow.</strong>  Building off the idea of tackling imperfect information through providing real-time feedback, <strong style={{fontWeight: "600", color: "#fff"}}>POOL</strong> is a mixed reality experience that projects real-time resource impact at the point of use in order to provide users a better awareness of their consumption and encourage responsibility.
          </SectionText>
          <SectionText style={{color: "#fff"}}>
            We called it <strong style={{fontWeight: "600", color: "#fff"}}>POOL</strong> as kind of as a playful way to reflect the way our design aimed to visualize resource footprints as "pools of impact" on the ground. I created a one page poster to showcase through storyboard what our design was about and how it worked.
          </SectionText>
          </Col>
        </Row>
        <Col>
          <Poster>
            <Img fluid={data.PoolPoster.childImageSharp.fluid} />
          </Poster>
        </Col>
      </Container>
    </Wrapper>
    <Wrapper style={{backgroundColor: "#f5f5f5"}}>
      <Container>
        <Row>
          <Col style={{flex: "1 1 32rem"}}>
            <SectionTitle style={{color: "#333"}}>End Notes</SectionTitle>
          </Col>
          <Col>
            <SectionText>
            As a blue-sky speculative project, we were given just two rules when designing POOL: 1. Assume that any technology that we needed exists – so holograms, virtual reality contact lenses, wearables and anything we could think of were basically in play, and 2. No screens.
           </SectionText>
           <SectionText>
           If rule 1 encouraged me to think out of the box, rule 2 forced me to open my mind. Was I out of my comfort zone? Most definitely. Yet it was refreshing and exhilarating to be able to design unshackled by the constraints of feasibility. Putting POOL together was one of the most rewarding projects I got to be a part of – the ideas we got to throw around were almost out of this world – and I am glad to have had the experience.
           </SectionText>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    <Footer />
  </>
  )
}