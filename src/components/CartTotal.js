import React, { useContext } from 'react';
import { Link } from 'gatsby'
import {
    GlobalDispatchContext,
    GlobalStateContext,
  } from "../context/GlobalContextProvider";


const CartTotal = (props) => {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);
    return (
        <div className="flex font-bold text-2xl text-gray-500 mb-6">
            <div className="w-1/2">
                TOTAL
            </div> 
            <div className="w-1/6 text-right pr-10">
                { props.total }
            </div> 
            <div className="w-1/3 text-right hover:text-red-600 cursor-pointer"
                onClick={() => { dispatch( { 
                    type: `EMPTY_CART`
                } )
            }}>
                Empty your cart
            </div>
        </div>
    )
}

export default CartTotal;