import React from 'react';
import ProductSearch from "./ProductSearch";
import '../../../styles/products.css'
import ProductCardList from "./ProductCardList";
const Products = () => {
    return (
        <div className='products'>
            <ProductSearch/>
            <h2 className='products_title'>Выберите модель</h2>
            <h3 className='products_second_title'>Выберите свою модель</h3>
            <ProductCardList/>
        </div>
    );
};

export default Products;