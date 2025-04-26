import React, { useEffect, useState } from 'react';
import { getFood } from './ShoppingListApi';

const ShoppingList = () => {
  const [search, setSearch] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const food = async (mil) => {
    try {
      const response = await getFood(mil);
      console.log(response.data);
      setFoodData(response.data);
    } catch (error) {
      console.error('Error fetching food:', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    food(value);
  };

  const handleSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      
    }
    console.log(selectedItems);
    
  };

  
const handleRemove = (itemToRemove) => {
    const updatedList = selectedItems.filter(item => item !== itemToRemove);
    setSelectedItems(updatedList);
  };
  

  useEffect(() => {
    food('');
  }, []);

  return (
    <>
      <h1 className='text-center text-4xl border-b-2 border-dashed'>Shopping List</h1>

      <div className='flex flex-col mt-16'>
        <h1 className='text-center'>Search</h1>

        <input
          name='search'
          value={search}
          onChange={handleChange}
          className='border-2 m-4'
          type='text'
          placeholder='Search food...'
        />
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>Search Results:</h2>
        {foodData && foodData.length > 0 ? (
          foodData.map((item, index) => (
            <div
              key={index}
              className='border-b py-2 cursor-pointer hover:bg-gray-100'
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))
        ) : (
          <div>No items found.</div>
        )}
      </div>

  
{selectedItems.length > 0 && (
  <div className='p-4 mt-8 border-t'>
    <h2 className='text-xl font-semibold mb-2'>Selected Items:</h2>
    {selectedItems.map((item, index) => (
      <div key={index} className='py-1 flex justify-between items-center'>
        <span>🛒 {item}</span>
        <button
          onClick={() => handleRemove(item)}
          className='text-red-500 hover:underline ml-2'
        >
          ❌ Remove
        </button>
      </div>
    ))}
  </div>
)}

    </>
  );
};

export default ShoppingList;
