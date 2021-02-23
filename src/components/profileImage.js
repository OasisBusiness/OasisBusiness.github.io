/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function ProfileImage({ data }) {
    const post = data.markdownRemark

    const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

    return (
        <Layout>
            <div>
                <Img fluid={featuredImgFluid} />
            </div>
        </Layout>
    )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
