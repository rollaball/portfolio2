import styled from "styled-components"
import React from "react"
const ProjectContainer = styled.div`
  font-family: sans-serif;
  color: #555555;
`
const TitleWithBackground = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: yellow;
  h1 {
    font-size: 7em;
  }
`
const Description = styled.div`
  margin: 5em 7em;
  font-size: 2.5em;
`
const Screenshots = styled.div`
  margin: 5em 0;
  font-size: 2.5em;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Screenshot = styled.div`
  height: 20em;
  width: 30em;
  margin-top: 1em;
  background-color: #333333;
`
const project = () => {
  return (
    <ProjectContainer>
      <TitleWithBackground>
        <h1>MoodpodVR</h1>
      </TitleWithBackground>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        feugiat sem id lobortis tincidunt. Etiam ut mauris sed mauris iaculis
        laoreet. Morbi faucibus eget lectus id placerat. Sed eleifend imperdiet
        nulla at maximus.
      </Description>
      <Screenshots>
        <Screenshot></Screenshot>
        <Screenshot></Screenshot>
        <Screenshot></Screenshot>
      </Screenshots>
    </ProjectContainer>
  )
}

export default project
