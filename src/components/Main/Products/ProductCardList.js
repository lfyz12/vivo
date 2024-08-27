import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import ButtonUI from "../../ButtonUI/ButtonUI";

const ProductCardList = () => {
    const [products, setProducts] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        console.log('Width changed:', width);
        if (width < 799) {
            setProducts([1, 2, 3, 4]);
        } else {
            setProducts([1, 2, 3, 4, 5, 6, 7, 8]);
        }
    }, [width]);

    return (
        <div className='products_list'>
            {products.map((card, index) =>
            <ProductCard key={index}/>)}
            <ButtonUI>Показать еще</ButtonUI>
        </div>
    );
};

export default ProductCardList;