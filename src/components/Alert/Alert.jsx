
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../ContextReducer/Context';
import css from './Alert.module.css'

const Alert = (props) => {

    const { alertName, closeAlert } = useContext(ShopContext)

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerID);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alertName])

    return (
        <div className={css.alertContainer}>
            <div className={css.alertContainer__el}>
                Товар "{alertName}" добавлен в корзину
            </div>
        </div>
    );
}

export default Alert;