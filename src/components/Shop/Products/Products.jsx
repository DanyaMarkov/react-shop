/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { CustomContext } from '../../../Context/Context';
import { Preloader } from '../../../Utilities/Preloader';
import css from './css/Products.module.css'
import ProductsItem from './ProductsItem/ProductsItem';


const Shop = () => {

    const { products = [], getProductsList } = useContext(CustomContext)

    useEffect(() => {
        getProductsList("ru");
    }, []);

    return (
        <div className={css.products}>

            {
                products.length
                    ? products.map(product => {
                        return (
                            <ProductsItem product={product} />
                        )
                    })
                    : <Preloader />
            }

        </div>
    );

}

export default Shop;