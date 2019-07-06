import React from "react"
import styled from "styled-components"
import ScrollAninmation from "react-animate-on-scroll"
import aboutImage from "../images/lambda.svg"
const AboutContainer = styled.div`
  background-color: yellow;
  color: #555555;
  height: 200vh;
  font-family: Raleway, sans-serif;
  display: relative;
`
const AboutIntro = styled.div`
  height: 100vh;
  position: relative;
  margin: 1.5em 5% 0;
  h1 {
    font-size: 13em;
    margin: 0;
  }
  div {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13em;
  }

  .hello {
    animation: showup 7s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  span {
    display: block;
    animation: slidedown 7s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  @keyframes showup {
    0% {
      opacity: 0;
      margin-top: 20%;
    }
    30% {
      opacity: 1;
      margin-top: 20%;
    }
    45% {
      opacity: 1;
      margin-top: 0%;
    }
    100% {
      opacity: 1;
      margin-top: 0%;
    }
  }

  @keyframes slidedown {
    0% {
      margin-top: -1500px;
    }
    25% {
      margin-top: -1500px;
    }
    50% {
      margin-top: 0px;
    }
    100% {
      margin-top: 0px;
    }
  }
`
const AboutText = styled.div`
  position: block;
  margin-top: 7em;
  margin-left: 5%;
  h1 {
    font-size: 5.5em;
    margin: 0;
  }
  .content {
    display: flex;
  }
  .text {
    width: 46%;
    font-size: 2.5em;
  }
  .letter {
    width: 46%;
    font-size: 70em;
    display: flex;
    justify-content: center;
    // align-items: center;
    margin-top: -0.1em;
    background: url(${aboutImage});
    height: 100vh;
    background-repeat: no-repeat;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <AboutIntro>
        <div className="hello">HELLO</div>
        <div>
          <span>
            I'M <br />
            SHETTY <br />
            SAURABH
          </span>
          <span></span>
          <span></span>
        </div>
      </AboutIntro>
      <AboutText>
        <h1>ABOUT ME</h1>
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            feugiat sem id lobortis tincidunt. Etiam ut mauris sed mauris
            iaculis laoreet. Morbi faucibus eget lectus id placerat. Sed
            eleifend imperdiet nulla at maximus.
          </p>
          <div className="letter"></div>
        </div>
      </AboutText>
    </AboutContainer>
  )
}

export default About
