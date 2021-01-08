import styled from "styled-components"

export const sections = ["Overview", "Survey and Ideation", "Flows + Wireframes", "High Fidelity Screens", "Redesign", "End Notes"]
export const nimbusRoutes = ["/nimbus", "/nimbus/survey-ideation", "/nimbus/flows-wireframes", "/nimbus/high-fi", "/nimbus/redesign", "/nimbus/end-notes"]

export const gSections = ["Case Study", "Prologue / Motivations"]

export const poolSections = ["Intro + Ideation", "Individual Deliverable", "Team Deliverable"]


export const Container = styled.div`
  max-width: 1360px;
  // width: 85%;
  // overflow: auto;
  // height: 89vh;
  // height: 90vh;
  padding-right: 15rem;
  // width: 100%;

  @media (max-width: 1240px) {
    width: 100%;
    overflow: visible;
    padding: 0;

  }
`

export const IntroBody = styled.div`
  display: block;
  margin: 7.5rem 0;
  position: relative;

  @media (max-width: 1240px) {
    margin: 3.5rem 0;
  }
`

// export const OffsetBody = styled(IntroBody)`
//   // padding-left: 18vw;
//   // display: flex; 
//   // justify-content: center;
//   // margin: 0 auto;
//   // text-align: center;
//   // width: 100%;
//   // margin:  auto;
  

//   @media (max-width: 1240px) {
//     padding: 0;
//   }
// `

export const OffsetBody = styled.div`
  margin: 7rem auto;


  @media (max-width: 1240px) {
    margin: 3.5rem 0; 
  }
`;

export const TextBlock = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const BodyText = styled.p`
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const RightButton = styled.button`
  float: right;  

  background: none;
  border: none;
  text-align: right;
  max-width: 38vw;

  :hover {
    cursor: pointer;  
  }


  @media (max-width: 425px) {
    transform: scale(0.75);
  }
`

export const LeftButton = styled(RightButton)`
  float: left;
  text-align: left;
`
export const ButtonHeader = styled.h6`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #767676;
`

export const ButtonText = styled.h4`
  margin: 0;

  button & :hover {
    text-decoration: underline
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (max-width: 1240px) {
    display: block;
  }
`

export const TextQuote = styled.blockquote`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400; 
  max-width: 36rem;
  border-left: solid 3px #333333;
  padding-left: 2rem;
  margin: 3.5rem auto;

  @media (max-width: 1240px) {
    margin: 3.5rem auto;
  }

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 425px) {
    font-size: 1.2rem;
    padding-left: 1.5rem;
    font-size: 1rem;
  }
`;

export const LargeWidth = styled(ImageWrapper)`
  display: block;
  
  @media (max-width: 1024px) {
    display: none;
  }
`

export const SmallWidth = styled(ImageWrapper)`
  display: none;
  
  @media (max-width: 1024px) {
    display: block;
  }
`

export const InfoPanel = styled.div`
  margin: 7.5rem 0;
  position: absolute;
  left: 0;
  top: 0;
  // width: auto;

  @media (max-width: 1240px) {
    position: relative;
    margin: 3.5rem auto;
    max-width: 36rem;
    // margin: 0 auto;
    // justify-content: center;
  }
`

export const ImageWithMargin = styled(ImageWrapper)`
  // margin-top: 3.5rem;
`

export const ListItem = styled.li`
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 1rem;  
`
export const StyledList = styled.ul`
  margin: 2.5rem 0;

  @media (max-width: 1240px) {
    padding-left: 1rem;
  }
`;

export const Header = styled.p`
  font-weight: 600;

`;

