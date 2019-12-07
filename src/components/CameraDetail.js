import React, { useContext } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from './layout';
import Img from 'gatsby-image';
import {
    GlobalDispatchContext,
    GlobalStateContext,
  } from "../context/GlobalContextProvider";

export const query = graphql`
    query CameraDetailQuery($directusId: Int!) {
        directusCamera(directusId: {eq: $directusId}) {
            directusId
            description
            price
            image_creator
            image_creator_url
            details
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
`;

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
            return true;
        }
    }
    return false;
}

const CameraDetail = (props) => {
      const { directusCamera } = props.data;
      const dispatch = useContext(GlobalDispatchContext);
      const state = useContext(GlobalStateContext);
      // Determine if this camera is already in the shopping cart.
      const camera = {
          directusId: directusCamera.directusId,
          description: directusCamera.description,
          price: directusCamera.price
      }
      const alreadyInCart = containsObject(camera, state.cart);
       return (
        <Layout>
            <article className="flex justify-center w-full mt-10 mb-6">
                <div className="w-11/12 lg:w-1/2">
                    <div className="flex justify-center mb-4">
                        <div className="w-3/5">
                            <Img
                                alt={directusCamera.description}
                                className="rounded-lg"
                                fluid={directusCamera.image.localFile.childImageSharp.fluid}
                            />
                        </div>
                    </div>
                    <div className="text-xs text-gray-600 text-center mb-4"> 
                        <a href={ directusCamera.image_creator_url }
                        rel="noopener noreferrer"
                        target="_blank">
                            Photo credit: { directusCamera.image_creator }
                        </a>
                    </div>
                    <h2 className="font-bold text-3xl text-center mb-4">
                        {directusCamera.description} 
                    </h2>
                    <div className="font-serif text-center mb-4">
                        ${ directusCamera.price }
                    </div>
                    <div className="mb-6" dangerouslySetInnerHTML={{ __html: directusCamera.details }} />
                    <div className="flex justify-center w-full pt-2 pb-8">
                        {alreadyInCart ? (
                            <div className="font-bold">This item is in your cart</div>
                        ) : (
                            <button className="w-24 bg-gray-600 hover:bg-red-600 text-white text-center rounded py-3 w-48" 
                                onClick={() => { dispatch( { 
                                    type: `ADD_TO_CART`,
                                    directusId: directusCamera.directusId,
                                    description: directusCamera.description,
                                    price: directusCamera.price
                                } )
                            }}>
                                Add to Your Cart
                            </button>
                        )
                        }  
                    </div>
                    <div className="text-center mb-4">
                        <Link to={ `/` }>
                            <div className="hover:text-red-600 underline">
                            Home
                            </div>
                        </Link> 
                    </div>
                </div>
            </article>    
        </Layout>
      )
  }

export default CameraDetail;



