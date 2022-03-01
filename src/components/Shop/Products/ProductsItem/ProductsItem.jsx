import css from './css/ProductsItem.module.css'

import { useContext } from "react";
import { CustomContext } from '../../../../Context/Context';


const ShopItem = ({ product }) => {


    const { addToBasket } = useContext(CustomContext)


    return (
        <div className={css.product} id={product.id}>
            <img src={product.images.full_background} alt={product.name} />

            <div className={css.product__title}>
                {product.name}
            </div>

            <br></br>
            <div className={css.product__buy}>
                <button className={css.product__button}
                    onClick={() => addToBasket(
                        {
                            id: product.id,
                            name: product.name,
                            price: product.price
                        }
                    )}>В корзину</button>
                <span>  {product.price + 200} рублей</span>
            </div>
        </div>
    );

}

export default ShopItem;


