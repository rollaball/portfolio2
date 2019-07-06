import React from "react"
import styled from "styled-components"
const FooterContainer = styled.footer`
  background-color: #333333;
  color: yellow;
  position: relative;
`
const Icons = styled.div`
  margin: 0 30em;
  padding: 10em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Icon= styled.div`
  height: 7em;
  width: 7em;
  background-color: yellow;
  border-radius 50%;
`
const Footer = () => {
  return (
    <FooterContainer>
      <Icons><Icon/><Icon/><Icon/><Icon/></Icons>
    </FooterContainer>
  )
}

export default Footer
