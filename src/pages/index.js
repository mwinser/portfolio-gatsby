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
    
    {data.allPortfolioProject.nodes.map(project=>
        
        <div key={project.title}>
          {console.log(data.allImageSharp.nodes.filter(image=>image.fluid.originalName===project.image)[0]?.fluid.srcSet)}
          <p>{project.title}</p>
          <img 
            srcset={data.allImageSharp.nodes.filter(image=>image.fluid.originalName===project.image)[0]?.fluid.srcSet}
            sizes="500px"
          />
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

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fluid {
          originalName
          srcSet
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
