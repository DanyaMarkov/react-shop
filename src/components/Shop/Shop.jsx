import css from './Shop.module.css'
import Products from './Products/Products';


const Shop = () => {
    return (
        <div className={css.shop}>
            <Products />
        </div>
    );

}

export default Shop;