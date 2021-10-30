import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (

  
  
  <Layout>
    <Seo title="Welcome" />
    <h1>Michael Winser</h1>
    <p>Welcome to the portfolio of Michael Winser, web developer </p>
    {console.log(data.allPortfolioProject.nodes)}
    {data.allPortfolioProject.nodes.map(project=>
        <>
        <p>{project.name}</p>
        <img src={project.image}/>
        </>
      )}
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export const query = graphql`
  {
    allPortfolioProject {
      nodes {
        title
        wip
        link
        git
        description
      }
    }
  }
`

export default IndexPage
