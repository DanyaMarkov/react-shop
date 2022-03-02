import css from './css/ProductsItem.module.css'

import { useContext } from "react";
import { ShopContext } from '../../ContextReducer/Context';


const ShopItem = ({ product }) => {


    const { addToBasket } = useContext(ShopContext)


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
                            //сделал цену +50, чтобы не было 0
                            price: product.price + 50
                        }
                    )}>В корзину</button>
                <span>  {product.price + 50} рублей</span>
            </div>
        </div>
    );

}

export default ShopItem;


