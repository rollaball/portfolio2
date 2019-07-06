import React from "react"
// import { Link } from "gatsby"
import About from "../components/About"
import Blogposts from "../components/Blogposts"
import Projects from "../components/Projects"
import Layout from "../components/layout"
import Skills from "../components/Skills"

const IndexPage = () => (
  <Layout>
    <About />
    <Projects />
    <Blogposts />
    <Skills />
  </Layout>
)

export default IndexPage
