import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import projectImage from "../images/rho.svg"
const ProjectContainer = styled.div`
  background-color: yellow;
  color: #555555;
  height: 100vh;
  font-family: sans-serif;
  display: relative;
`
const ProjectText = styled.div`
  position: block;
  margin: 5em 5% 0;
  div {
    display: block;
    overflow: hidden;
    white-space: nowrap;
  }

  .hello {
    animation: showup 3s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }

  .slidingtext {
    display: block;
    animation: slidein 3s infinite;
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

  @keyframes slidein {
    0% {
      margin-right: -1500px;
      width: 0;
    }
    25% {
      margin-right: -1500px;
      width: 0;
    }
    50% {
      margin-right: 0px;
      width: 0;
    }
    60% {
      margin-right: 0px;
      width: 100%;
    }
    100% {
      margin-top: 0px;
      width: 100%;
    }
  }

  h1 {
    text-align: right;
    font-size: 6em;
    margin: 0;
  }
  .content {
    display: flex;
    justify-content: space-between;
  }
  .text {
    text-align: right;
    width: 46%;
    font-size: 3em;
  }
  .letter {
    width: 46%;
    display: flex;
    justify-content: center;
    // align-items: center;
    margin-top: 0.2em;
    background: url(${projectImage});
    height: 100vh;
    background-repeat: no-repeat;
  }
  h1 {
    font-size: 2.5em;
    margin-left: 0.4em;
  }
  h3 {
    width: 100%;
    margin: 0 1em;
    padding-bottom: 0.2em;
    transition: all 0.3s;
    :hover {
      width: 0%;
      color: #777744;
      cursor: pointer;
      transform: scale(1.05);
      .line {
        width: 0%;
      }
    }
  }
  .line {
    margin: 0.5em 0;
    width: 100%;
    background-color: #555555;
    height: 3px;
    transition: all 1s;
  }
`
const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectText>
        <div className="content">
          <div className="letter"></div>
          <p className="text">
            <h1 className="hello">PROJECTS</h1>
            <div
              style={{
                marginTop: "2em",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <h3 className="slidingtext">
                MOODPODVR
                <div className="line"></div>
              </h3>
              <h3 className="slidingtext">
                INDIGENE<div className="line"></div>
              </h3>
              <h3 className="slidingtext">
                some project<div className="line"></div>
              </h3>
            </div>
          </p>
        </div>
      </ProjectText>
    </ProjectContainer>
  )
}

export default Projects
