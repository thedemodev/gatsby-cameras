import React, { useContext } from 'react';
import { Link } from 'gatsby'
import {
    GlobalDispatchContext,
    GlobalStateContext,
  } from "../context/GlobalContextProvider";


const CartSummary = (props) => {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);
    let cart = state.cart;
    let items = cart.length;
    let message = ``;
    if (items === 0) {
        message = `No items in your shopping cart`;
    }
    else if (items === 1) {
        message = `1 item in your shopping cart`;
    }
    else {
        message = items + ` items in your shopping cart`;
    }
    return (
        <div className="flex items-center font-sans font-normal text-lg text-right text-gray-600 hover:text-red-600">
            <Link className="" to={ `/shoppingcart/` }>
                <svg className="inline h-5 w-5 fill-current mr-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                { message }
            </Link>
        </div>
    )
}

export default CartSummary;