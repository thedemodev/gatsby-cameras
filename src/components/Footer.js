import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
    const logo = useStaticQuery(graphql`
      query ImageQuery {
        file(relativePath: { eq: "logo-64.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)

    return (
      <footer className="flex justify-center bg-gray-200 py-16">
        <div className="w-16">
          <a href="https://bob-humphrey.com" >
            <Img
              alt="Bob Humphrey website"
              fluid={logo.file.childImageSharp.fluid}
            />
          </a> 
        </div>
      </footer>
    )
}

export default Footer;