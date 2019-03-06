import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 5em;
`;

const Content = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

const Opener = styled.h4`
  font-family: neue-haas-unica;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: -0.5px;
`;

const Text = styled.p `
  font-family: neue-haas-unica;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8em;
`;



class AboutPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Container>
          <Content>
            <Img style={{maxHeight: "720px"}} fluid={this.props.data.posthole.childImageSharp.fluid}/>
            <p>my legs were fairly frozen afterwards</p>
            <Opener>Hello, I'm John. I'm a Human Computer Interaction student based in Seattle (I'm sitting in Zoka Coffee Roasters as I write this) and I believe in designing for connection.</Opener>
            <p>As humans, we all have some innate desire to seek connection. We connect through emotion, which is probably the one thing that most defines us as human; the warm fuzzy feeling we get in the presence of someone we love, the little voice in our head telling us that our next steps could be our last, the raw rush of euphoria that courses through our veins when we accomplish a goal that has long eluded our grasp. Emotion surrounds us. It consumes us. It is a core tenet of the human experience.</p>
            <p>Designers often talk about empathy as being the value that all good designers should have, yet I’m not quite sure what I feel about the word “empathy” because its a buzzword that’s been thrown around so much that I feel that nobody really knows what it actually means anymore. It’s become just another checkbox for people to tick without actually having to experience the significance of what it means to be emphatic. To me, design is about connection;  the connections that I form with my users as I am designing for them, the connections that my users form with the product that I have designed for them. And connection, I believe, is driven by emotion at its very core.</p>
            <Text>“What’s the story” is a phrase that I use a lot. And when I say that I mean it in every sense of the word.  Besides the fact that I’m way too awkward for meaningless small talk which means I’d rather let other people do the talking, I’m driven by a curiosity to understand the world around me; why things work the way they do, why people behave in certain ways, why decisions were made the way they were. Stories provide context, an avenue for a shared understanding of the circumstances of the moment. It is in this shared understanding that trust is formed and an emotional connection is established. And once this connection is formed, it becomes a lot easier to understand motivations and intentions, to read between the lines into what was left unsaid, to get a glimpse of what it feels like to walk in somebody else’s shoes.</Text>
            <Text>I try to tell a story with every project that I work on. A big part of what I do is to figure out what story I want to convey and it’s so important to get that right because when it comes to the product every interaction is a conversation, and every conversation is a window to connection. A great product to me is one which is genuine about it’s story and isn’t shy about letting that authenticity shine through.</Text>
            <Text>Design is a window to humanity. While technology is binary, humanity largely thrives in eclectic splashes of color. What we do as designers have a direct impact in keeping the humanity in technology; We want our technology to be a reflection of us and not the other way round. Designing for connection, and by extension humanity, is something that drives me and I can’t wait to see what the future will bring. </Text>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default AboutPage;

export const query = graphql`
  {
    profile:file(relativePath: {eq:"images/profile.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    posthole:file(relativePath: {eq:"images/posthole.jpg"}){
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;