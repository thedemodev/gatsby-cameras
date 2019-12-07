import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: `light`,
  cart: []
}

function reducer(state, action) {
  switch (action.type) {
    case `TOGGLE_THEME`: {
      return {
        ...state,
        theme: state.theme === `light` ? `dark` : `light`,
      }
    }
    case `ADD_TO_CART`: {
      let cart = state.cart;
      const camera = {
        directusId: action.directusId,
        description: action.description, 
        price: action.price
      };
      const alreadyInCart = containsObject(camera, cart);
      console.log(alreadyInCart);
      if (!alreadyInCart) {
        cart.push(camera);
      }
      return {
        ...state, cart: cart
      }
    }
    case `REMOVE_FROM_CART`: {
      const cart = state.cart;
      const updatedCart = removeObject(cart, action.directusId);
      return {
        ...state, cart: updatedCart
      }
    }
    case `EMPTY_CART`: {
      const cart = [];
      return {
        ...state, cart: cart
      }
    }
    default:
      throw new Error(`Bad Action Type`)
  }
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
          return true;
      }
  }
  return false;
}

function removeObject(list, id) {
  return list.filter(function(item){
    return item.directusId !== id;
  });
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
