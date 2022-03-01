
import { useContext } from "react";
import { CustomContext } from "../../Context/Context";


const Cart = () => {

    const { order } = useContext(CustomContext)

    // useEffect(() => {
    //     let quantity = products.length
    // }, [])


    return (
        <div>
            <i class="large material-icons">shopping_cart</i>
            {order.length ? <span>{order.length}</span> : null}
        </div>
    );
}


export default Cart;