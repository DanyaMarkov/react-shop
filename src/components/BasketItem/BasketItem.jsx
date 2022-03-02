
import css from './BasketItem.module.css'

const BasketItem = (props) => {

    const {
        id,
        name,
        price,
        quantity
    } = props.order;

    return (
        <li className={css.item}>
            <div>
                {name}
            </div>

            <div>
                <button onClick={() => (
                    props.changeQuantity(id, "decrease")
                )}>-</button>

                x{quantity}

                <button onClick={() => (
                    props.changeQuantity(id, "increase")
                )}>+</button>

                = {price * quantity} руб.
            </div>
            <div onClick={() => (
                props.deleteItem(id)
            )}>
                <i class="large material-icons">close</i>
            </div>
        </li>
    );

}

export default BasketItem;