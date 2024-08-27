import React, {useState} from 'react';

const ProductSearch = () => {
    const [searchReq, setSearchReq] = useState('')
    return (
        <div className='products_search'>
            <h2 className='products_search_title'>Поиск модели</h2>
            <input type='text' className='products_search_input' value={searchReq} onChange={e => setSearchReq(e.target.value)}/>
            <button className='products_search_btn'>Поиск</button>
        </div>
    );
};

export default ProductSearch;