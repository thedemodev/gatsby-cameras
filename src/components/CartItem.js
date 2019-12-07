import React, { useContext } from 'react';
import { Link } from 'gatsby'
import {
    GlobalDispatchContext,
    GlobalStateContext,
  } from "../context/GlobalContextProvider";


const CartItem = (props) => {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);
    return (
        <div className="flex font-bold text-2xl text-gray-500 mb-6">
            <Link className="w-1/2 hover:text-red-600" to={ `/cameras/` + props.camera.directusId }>
                { props.camera.description }
            </Link> 
            <Link className="w-1/6 text-right pr-10 hover:text-red-600" to={ `/cameras/` + props.camera.directusId }>
                { props.camera.price }
            </Link> 
            <div className="w-1/3 text-right hover:text-red-600 cursor-pointer"
                onClick={() => { dispatch( { 
                    type: `REMOVE_FROM_CART`,
                    directusId: props.camera.directusId
                } )
            }}>
                Remove from your cart
            </div>
        </div>
    )
}

export default CartItem;