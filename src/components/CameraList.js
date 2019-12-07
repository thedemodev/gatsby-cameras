import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import CameraCard from './CameraCard.js';

const CAMERA_LIST = graphql`
  query CameraList {
    allDirectusCamera(sort: {fields: sort, order: ASC}) {
      edges {
        node {
          directusId
          sort
          description
          price
          image_creator
          image {
            localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    }
  }
`

const CameraList = () => (
  <StaticQuery
    query={CAMERA_LIST}
    render={({allDirectusCamera}) => (
      allDirectusCamera.edges.map(({node}) => (
        <CameraCard camera={ node } key={ node.directusId }/>
      ))
    )}
  />
)

export default CameraList;
