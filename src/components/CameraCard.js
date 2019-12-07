import React from 'react';
import { Link } from 'gatsby'
import Img from 'gatsby-image';

const CameraCard = (props) => {
    return (
        <article className="lg:w-1/3 px-2 mb-4 flex items-stretch" >
            <div className="flex flex-col w-full bg-gray-200 text-gray-700 rounded-lg text-center">
                <Img
                    alt={ props.camera.description }
                    className="rounded-t-lg"
                    fluid={props.camera.image.localFile.childImageSharp.fluid}
                />
                <div className="text-xs text-gray-600 pt-3 mb-2"> 
                    <a className=""
                    href={ props.camera.image_creator_url }
                    rel="noopener noreferrer"
                    target="_blank">
                        Photo credit: { props.camera.image_creator }
                    </a>
                </div>
                <div className="">
                    <div className="font-serif mb-1">
                        { props.camera.description }
                    </div>
                    <div className="font-serif mb-3">
                        ${ props.camera.price }
                    </div>
                    
                        <Link to={ `/cameras/` + props.camera.directusId }>
                            <div className="font-serif bg-gray-600 text-white py-3 rounded-b-lg cursor-pointer hover:bg-red-600">
                            Details
                            </div>
                        </Link> 
                    
                </div>
            </div>
        </article>
    )
}

export default CameraCard;