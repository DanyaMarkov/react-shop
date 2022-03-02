import BasketItem from "../BasketItem/BasketItem";



import { useContext } from "react";
import { ShopContext } from "../../ContextReducer/Context";
import css from './BasketList.module.css'


const BasketList = () => {

    const { order = [], handleBasketShow, removeFromBasket, changeQuantity } = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        return sum + (el.price * el.quantity)
    }, 0)
    // useEffect(() => {
    //     getProductsList("ru");
    // }, [order]);

    return (
        <div className={css.basket}>

            <div className={css.basket__title}>
                <div>
                    <span>Корзина</span>
                </div>
                <div onClick={() => handleBasketShow()}>
                    <i class="large material-icons">close</i>
                </div>

            </div>
            <div className={css.basket__items}>
                {
                    order.length
                        ? order.map(orderItem => (
                            <BasketItem key={orderItem.id}
                                order={orderItem} deleteItem={removeFromBasket}
                                changeQuantity={changeQuantity} />
                        ))
                        : <span>Корзина пуста</span>
                }
            </div>
            <div className={css.basket__totalPrice}>
                <div>Общая стоимость: {totalPrice} руб.</div>
                <div>
                    <button>К оплате</button>
                </div>
            </div>


        </div>
    );

}

export default BasketList;