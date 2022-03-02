
import { useContext } from "react";
import { ShopContext } from "../../ContextReducer/Context";

const Cart = () => {

    const { order, handleBasketShow } = useContext(ShopContext)

    return (
        <div onClick={() => { handleBasketShow() }}>
            <i class="large material-icons">shopping_cart</i>
            {order.length ? <span>{order.length}</span> : null}
        </div>
    );
}


export default Cart;