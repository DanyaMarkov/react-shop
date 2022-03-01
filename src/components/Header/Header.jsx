/* eslint-disable jsx-a11y/anchor-is-valid */

import Cart from '../Cart/Cart';
import css from './Header.module.css'

const Header = () => {
    return (<header className={css.header}>
        <div className={css.header__logo}>
            <h4>React Shop</h4>
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
                <i class="large material-icons">account_circle</i>
            </div>
            <div className={css.header__icons_el}>
                <Cart />
                {/* <i class="large material-icons">shopping_cart</i> */}
            </div>
            <div className={css.header__icons_el}>
                <i class="large material-icons">language</i>
                <span>RUS</span>
            </div>
        </div>

    </header>);
}

export default Header;