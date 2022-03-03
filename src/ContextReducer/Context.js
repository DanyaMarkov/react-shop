import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    products: [],
    productsLoading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
    language: "ru"
}

export const ContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    state.getProductsList = (data, language) => {
        dispatch({ type: "GET_PRODUCTS_LIST", payload: { data: data, language: language } })
    }

    state.addToBasket = (item) => {
        dispatch({ type: "ADD_TO_BASKET", payload: item })
    }

    state.removeFromBasket = (itemID) => {
        dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemID } })
    }

    state.changeQuantity = (itemID, operationMove) => {
        dispatch({ type: "CHANGE_QUANTITY", payload: { id: itemID, operation: operationMove } })
    }

    state.handleBasketShow = () => {
        dispatch({ type: "TOGGLE_BASKET" })
    }

    state.handleChangeLanguage = () => {
        dispatch({ type: "TOGGLE_LANGUAGE" })
    }

    state.closeAlert = () => {
        dispatch({ type: "CLOSE_ALERT" })
    }

    return <ShopContext.Provider value={state}>
        {props.children}
    </ShopContext.Provider>

}