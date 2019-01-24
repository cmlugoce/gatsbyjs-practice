import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby'



const Blog =(props)=> {
    const post = props.data.markdownRemark;
    const { title, author, description } = post.frontmatter;
    
    
  
    
     
    return (
        <Layout>
            <Metatags
                title={title}
                description={description}
                
                pathname={props.location.pathname}
            />
            <div>
                <h1>{title}</h1>
                <p> Posted by: {author}</p>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
               
  
            </div>

            
        </Layout>
    )
}
export default Blog
export const query = graphql`

 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       id
       frontmatter {
        title
        description
        author
        image {
            childImageSharp {
              resize(width: 1500, height: 1500) {
                src
              }
              fluid(maxWidth: 786) {
                ...GatsbyImageSharpFluid
              }
            }
         }
         }
     }
  }
  `