import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {


  const [ categories, setCategories ] = useState([ 'MGS' ]);

  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) }
        />
        {
          categories.map( category => (
            <GifGrid key={category} category={category} />
          ))
        }
    </>
  )
}
