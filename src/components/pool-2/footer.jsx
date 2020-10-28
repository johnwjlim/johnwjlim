import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"

const Wrapper = styled.div`
  padding: 0px 2.5rem 1.45rem;
  background-color: #eeeeee;

  @media (max-width: 425px) {
    padding: 0 1.25rem 1.45rem;
  }
`
const Container = styled.div`
  padding: 2rem 4rem;
  margin: 0 auto;
  max-width: 1680px;
  padding-bottom: 0rem;

  @media (max-width: 1440px) {
    padding: 2rem 0;
    padding-bottom: 0;
  }


  @media (max-width: 768px) {
    padding: 2rem 0;
    padding-bottom: 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  // padding: 2rem 0;
  // padding: 0;

  @media (max-width: 1024px) {
    display: block;
  }
`

const Col = styled.div`
  // flex: 1 1 40rem;
  padding: 2rem 4rem;

  @media (max-width: 1440px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 0;
  }
`

const Links = styled(Col)`
  display: flex;
`

const SectionTitle = styled.h2`
  font-family: Sohne, sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  color: #333;
  max-width: 28rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`

const LocalLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  padding: 1rem 0;
  font-family: Sohne, sans-serif;
  color: #888;
  font-size: 1.1rem;
  margin-right: 2.5rem;
  font-weight: 500;

  :hover {
    color: #333;
    border-bottom: 1px solid #333;
  }
`;

const Text = styled.p`
padding: 1rem 0;
font-family: Sohne, sans-serif;
color: #888;
font-size: 1rem;
margin-right: 2.5rem;
line-height: 1.4;


`




export default function Individual() {
  const data = useStaticQuery(graphql`
    query {
      Shower: file(relativePath: {eq: "shower.jpg"}) {
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
    }
  `)
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <Col >
              <LocalLink to="/" >
                Home
              </LocalLink>
              <LocalLink to="/about" >
                About
              </LocalLink>
              <LocalLink as="a" href="https://drive.google.com/file/d/1r5To1P3Oc8Dn9Ucbe_WxWWBi5bCVeYri/view?usp=sharing" target="_blank">Resume</LocalLink>
            </Col>

          </Row>
          <Row>
            <Col style={{paddingBottom: "0"}}>
              <Text>© 2020 John Lim <br/>johnwjlim.com </Text>
              {/* <LocalLink as="a" href="mailto:wjlim@uw.edu" target="_blank">wjlim@uw.edu</LocalLink> <br/> */}
         

            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  )
}