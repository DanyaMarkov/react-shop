
export function reducer(state, { type, payload }) {
    switch (type) {

        case "GET_PRODUCTS_LIST":
            return {
                ...state,
                products: payload.data || [],
                productsLoading: false
            }

        case "TOGGLE_LANGUAGE":
            let currentLang = state.language === "ru" ? "en" : "ru"
            // getProductsList(currentLang);
            return {
                ...state,
                language: currentLang,
                // isBasketShow: !state.isBasketShow
            }
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: ""
            }

        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex(ordertItem => ordertItem.id === payload.id);
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        }

        case "CHANGE_QUANTITY": {
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        let newQuantity = 0;
                        payload.operation === "increase"
                            ? newQuantity = item.quantity + 1
                            : newQuantity = item.quantity - 1
                        return {
                            ...item,
                            quantity: newQuantity > 0 ? newQuantity : 0
                        }
                    } else {
                        return item;
                    }
                })
            }
        }

        case "TOGGLE_BASKET":
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }

        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        default:
            return state
    }

}