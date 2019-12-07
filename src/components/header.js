import { Link } from "gatsby";
import React from "react";
import CartSummary from "./CartSummary.js";

const Header = () => {
    return (
        <header className="flex justify-center bg-gray-200 font-bold font-heading text-4xl text-center py-4">
            <div className="flex justify-between w-11/12 lg:w-2/3">
                <div className="flex justify-start self-center hover:text-red-600"> 
                    <Link to={`/`}>
                        Vintage Cameras
                    </Link>
                </div>
                <div className="flex justify-end self-center">
                    <CartSummary />
                </div>
            </div>  
        </header>
    )
}

export default Header;
