import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
  border-right-style: solid;
  border-width: 1px;
  border-color: #969696;
  margin: 1em;

  @media (max-width: 768px) {
    border-bottom-style: solid;
    border-right-style: none;
  }
`;

class Line extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Border/>
    )
  }
}

export default Line;