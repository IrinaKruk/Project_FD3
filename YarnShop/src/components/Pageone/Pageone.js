import React from 'react';
import { Link } from "react-router-dom";
import Card from '../Card/Card';

function Pageone({ items, onSearchInput, searchValue, onAddItemToFavorite, onAddItemtoCard }) {


   return <div className='content'>
      <div>
         <h3 className='catalog'>Каталог пряжи, страница 1</h3>
         <Link to='/catalog/page/1'>
            <button className='page'>1</button>
         </Link>
         <Link to='/catalog/page/2'>
            <button className='page'>2</button>
         </Link>
         <Link to='/catalog/page/3'>
            <button className='page'>3</button>
         </Link>
         <div className='btncard search'>
            <input onChange={onSearchInput} value={searchValue} placeholder='Поиск товара' />
            <img src="./public/img/search.svg" alt="search" />
         </div>

         <div className='container__card'>
            {
               items
                  .slice(0, 20)
                  .filter((item => item.name.toLowerCase().includes(searchValue)))
                  .map((item, index) => (
                     <Card
                        key={index}
                        title={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        id={item.id}
                        onLike={(obj) => onAddItemToFavorite(obj)}
                        onPlus={(obj) => onAddItemtoCard(obj)}
                     />
                  ))
            }
         </div>
      </div>
   </div>

}

export default Pageone;