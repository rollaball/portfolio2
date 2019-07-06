import React from "react"
import styled from "styled-components"
import ScrollAnimation from "react-animate-on-scroll"
import blogpostImage from "../images/beta.svg"
const BlogpostContainer = styled.div`
  background-color: yellow;
  color: #555555;
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
    margin-top: -1em;
  }
  .text {
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
    margin-top: 0.5em;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.2em;
    transition: all 0.3s;
    :hover {
      content: "";
      color: #777744;
      cursor: pointer;
      transform: scale(1.05);
      .line {
        width: 0;
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
const Blogposts = () => {
  return (
    <BlogpostContainer>
      <BlogpostText>
        <div className="letter"></div>
        <h1>BLOGPOSTS</h1>
        <div className="content">
          <p className="text">
            <h3>
              <a
                style={{ color: "inherit", textDecoration: "inherit" }}
                href="https://medium.com/@saurabh.shetty100/74b94c126cba"
              >
                Crash-Only Software
              </a>
              <div className="line"></div>
            </h3>
            <h3>
              <a
                style={{ color: "inherit", textDecoration: "inherit" }}
                href="https://medium.com/@saurabh.shetty100/74b94c126cba"
              >
                Blog
              </a>
              <div className="line"></div>
            </h3>
            <h3>
              <a
                style={{ color: "inherit", textDecoration: "inherit" }}
                href="https://medium.com/@saurabh.shetty100/74b94c126cba"
              >
                Blog
              </a>
              <div className="line"></div>
            </h3>
          </p>
        </div>
      </BlogpostText>
    </BlogpostContainer>
  )
}

export default Blogposts
