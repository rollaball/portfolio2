import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import blogpostImage from "../images/beta.svg"
const BlogpostContainer = styled.div`
  background-color: yellow;
  color: #555555;
  height: 100vh;
  font-family: sans-serif;
  display: relative;
`
const BlogpostText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em 5% 0;
  h1 {
    font-size: 6em;
    margin: 0;
  }
  .content {
    display: flex;
    justify-content: space-between;
    margin-top: 0;
  }
  .text {
    width: 46%;
    font-size: 3em;
  }
  .letter {
    height: 18em;
    width: 18em;
    margin-bottom: 2em;
    margin-top: -0.1em;
    background: url(${blogpostImage});
    background-repeat: no-repeat;
  }
  h3 {
    padding-bottom: 0.2em;
    border-bottom: 3px #555555 solid;
    transition: all 0.3s;
    :hover {
      content: "";
      color: #777744;
      cursor: pointer;
      transform: scale(1.05);
      border-bottom: 3px rgba(0, 0, 0, 0) solid;
    }
  }
`
const Blogposts = () => {
  return (
    <BlogpostContainer>
      <BlogpostText>
        <div className="letter"></div>
        <h1>BLOGPOSTS</h1>
        <div className="content">
          <p className="text">
            <h3>BLOG1</h3>
            <h3>BLOG2</h3>
            <h3>BLOG3</h3>
          </p>
        </div>
      </BlogpostText>
    </BlogpostContainer>
  )
}

export default Blogposts
