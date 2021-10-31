import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {

  const projects = data.allPortfolioProject.nodes
  const images = data.allFile.nodes
  return (
  <Layout>
    <Seo title="Welcome" />
    <h1>Michael Winser</h1>
    <p>Welcome to the portfolio of Michael Winser, web developer </p>
    
    {projects.map(project=>
        
        <div key={project.title}>
          <p>{project.title}</p>
          <GatsbyImage 
            image={images.filter(image=>image.relativePath===project.image)[0]?.childImageSharp.gatsbyImageData}
            alt={`${project.title}-image`}/>
        </div>
      )}
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    allPortfolioProject {
      nodes {
        image
        description
        git
        link
        title
        wip
      }
    }
  }
`

export default IndexPage
