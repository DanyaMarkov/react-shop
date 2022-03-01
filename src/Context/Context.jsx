import { createContext, useState } from "react";
import { shopAPI } from "../api/api";

export const CustomContext = createContext();

export const Context = (props) => {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [order, setOrder] = useState([])

    async function getProductsList(language) {
        setProductsLoading(true)
        let data = await shopAPI.getProducts(language);
        setProducts(data);
        console.log("получил список продуктов")
        setProductsLoading(false)
    }

    function addToBasket(item) {
        const itemIndex = order.findIndex(ordertItem => ordertItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }
    }

    const value = {
        products,
        productsLoading,
        getProductsList,

        order,
        addToBasket
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}