/* eslint-disable jsx-a11y/anchor-is-valid */

import Cart from '../Cart/Cart';
import Language from '../Language/Language';
import css from './Header.module.css'

const Header = () => {
    return (<header className={css.header}>
        <div className={css.header__logo}>
            <span>React Shop</span>
        </div>

        <div className={css.header__menu}>
            <a href="#">Товары</a>
            <a href="#">Бренды</a>
            <a href="#">О нас</a>
        </div>

        {/* <div className={css.header__search}>
            <input type="search" name="" id="" />
        </div> */}

        <div className={css.header__icons}>
            <div className={css.header__icons_el}>
                <i className="large material-icons">account_circle</i>
            </div>
            <div className={css.header__icons_el}>
                <Cart />
            </div>
            <div className={css.header__icons_el}>
                <Language />
            </div>
        </div>

    </header>);
}

export default Header;