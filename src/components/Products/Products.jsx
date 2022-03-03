/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { ShopContext } from '../../ContextReducer/Context';
import { Preloader } from '../../Utilities/Preloader';
import css from './css/Products.module.css'
import ProductsItem from '../ProductsItem/ProductsItem';
import { shopAPI } from '../../api/api';


const Shop = () => {

    const { products = [], getProductsList } = useContext(ShopContext)

    useEffect(() => {
        getProducts();
        async function getProducts() {
            let data = await shopAPI.getProducts("ru");
            return getProductsList(data, "ru");
        }
    }, []);

    return (
        <div className={css.products}>

            {
                products.length
                    ? products.map(product => {
                        return (
                            <ProductsItem key={product.id} product={product} />
                        )
                    })
                    : <Preloader />
            }

        </div>
    );

}

export default Shop;