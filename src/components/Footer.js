import React from "react"
import styled from "styled-components"
const FooterContainer = styled.footer`
  background-color: #333333;
  color: yellow;
  position: relative;
`
const Icons = styled.div`
    margin: 0 10em;
    padding: 10em 0;
`
const Footer = () => {
  return <FooterContainer>
      <Icons>footer</Icons></FooterContainer>
}

export default Footer
