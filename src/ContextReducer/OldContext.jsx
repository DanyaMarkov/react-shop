import { createContext, useState } from "react";

import { shopAPI } from "../api/api";

export const ShopContext = createContext();

export const ContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState("")
    const [language, setLanguage] = useState("ru")

    //Получение всех товаров и добавление их в стейт
    async function getProductsList(language) {
        setProductsLoading(true)
        let data = await shopAPI.getProducts(language);
        setProducts(data);
        setProductsLoading(false)
    }

    //Добавляем товар в корзину по нажатию "В корзину"
    function addToBasket(item) {
        const itemIndex = order.findIndex(ordertItem => ordertItem.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name);
    }

    //Удаляем товар из корзины
    function removeFromBasket(itemID) {
        setOrder(order.filter(item => item.id !== itemID));
    }

    //изменение кол-ва товара в корзине
    function changeQuantity(itemID, move) {
        const newOrder = order.map(item => {
            if (item.id === itemID) {
                let newQuantity = 0;
                move === "increase"
                    ? newQuantity = item.quantity + 1
                    : newQuantity = item.quantity - 1
                return {
                    ...item,
                    quantity: newQuantity > 0 ? newQuantity : 0
                }
            } else {
                return item;
            }
        })
        setOrder(newOrder);
    }

    //Скрытие уведомления о добавлении товара в корзину
    function closeAlert() {
        setAlertName("");
    }

    //Вкл/выкл отображение корзины
    function handleBasketShow() {
        setBasketShow(!isBasketShow);
    }

    //Смена языка
    function handleChangeLanguage() {
        let currentLang = language === "ru" ? "en" : "ru"
        setLanguage(currentLang);
        getProductsList(currentLang);

    }

    const value = {
        alertName, closeAlert,
        products, productsLoading, getProductsList,
        order, addToBasket, removeFromBasket,
        isBasketShow, handleBasketShow,
        changeQuantity,

        language, handleChangeLanguage
    }

    return <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>

}