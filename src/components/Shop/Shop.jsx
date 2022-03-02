import css from './Shop.module.css'
import Products from '../Products/Products';
import BasketList from '../BasketList/BasketList';


import { useContext } from "react";
import { ShopContext } from "../../ContextReducer/Context";
import Alert from '../Alert/Alert';



const Shop = () => {
    const { isBasketShow, alertName } = useContext(ShopContext)
    return (
        <div className={css.shop}>
            <div>
                <Products />
            </div>
            <div>
                {
                    isBasketShow && <BasketList />
                }
            </div>
            <div>
                {
                    alertName && <Alert />
                }
            </div>
        </div>
    );

}

export default Shop;