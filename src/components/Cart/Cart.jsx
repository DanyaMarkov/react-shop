
import { useContext } from "react";
import { ShopContext } from "../../ContextReducer/Context";
import css from './Cart.module.css'

const Cart = () => {

    const { order, handleBasketShow } = useContext(ShopContext)

    return (
        <div className={css.cart} onClick={() => { handleBasketShow() }}>
            <i className="large material-icons">shopping_cart</i>
            {order.length ? <span>{order.length}</span> : null}
        </div>
    );
}

export default Cart;