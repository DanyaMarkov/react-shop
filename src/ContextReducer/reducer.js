

export function reducer(state, { type, payload }) {
    switch (type) {

        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: ""
            }

        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }

        case "GET_PRODUCTS_LIST":
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)

                // setProductsLoading(true)
                // let data = await shopAPI.getProducts(language);
                // setProducts(data);
                // setProductsLoading(false)

            }
        default:
            return state
    }

}