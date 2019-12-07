import React, { useContext } from 'react';
import { Link } from "gatsby";
import currency from 'currency.js';
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import {
    GlobalDispatchContext,
    GlobalStateContext,
  } from "../context/GlobalContextProvider";

function cartTotal(cart) {
    const sum = cart.reduce((total, item) => total + Number(item.price), 0);
    return `$` + currency(sum);
}

const ShoppingCart = (props) => {
    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);
    return (
        <Layout>
            <div className="flex justify-center w-full mt-10 mb-6">
                <div className="w-11/12 lg:w-2/3">
                    <h2 className="font-bold text-3xl text-center mb-8">
                        Your Shopping Cart
                    </h2>
                    {
                        state.cart.length === 0 
                        ?
                        (
                            <div className="font-bold text-2xl text-center text-gray-500 pt-32 pb-40">
                                Your cart is empty
                            </div>
                        )
                        :
                        (   
                            <div className="">
                                <div className="">
                                    {state.cart.map((camera) => (
                                        <CartItem camera={ camera } key={ camera.directusId }/>
                                    ))}
                                </div>
                                <div className="border-t border-gray-600 pt-4">
                                    <CartTotal total={ cartTotal(state.cart) } />
                                </div>
                            </div>
                        )
                    }
                    <div className="text-center mb-4">
                        <Link to={ `/` }>
                            <div className="hover:text-red-600 underline">
                            Home
                            </div>
                        </Link> 
                    </div>
                </div>
            </div>    
        </Layout>
    )
  }

export default ShoppingCart;