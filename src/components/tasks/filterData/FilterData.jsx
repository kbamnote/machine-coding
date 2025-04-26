import React, { useState } from 'react'
import { items } from './items'

const FilterData = () => {

const category =["Bags","Watches","Sunglasses","Sports"]
const [filter,setFilter] = useState(items)
const [activeCategory,setActivecategory] =useState('')

const handleCategoryClick = (category) =>{

    setActivecategory(category)

if (category==='') {
    setFilter(items)
}else{
    const filterItems = items.filter((item)=>item.category===category)
    setFilter(filterItems)
}

}

console.log(activeCategory);


  return (
    <>
    <div className='text-4xl text-center border-b-2 border-dashed'>Filter Data</div>
<div className='text-center space-x-20 mt-14'>

{category.map((item,index)=>(

<button key={index} 
onClick={()=>handleCategoryClick(item)}


className={activeCategory.includes(item) ? 'bg-black text-white rounded-md w-22 p-2 cursor-pointer' : ''}>{item}</button>
)


)}


</div>

<div className="grid grid-cols-3 md:grid-cols-2 gap-6 p-4">

  {filter.map((item, index) => (
    <div 
      key={index} 
      className="border rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300"
    >
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      <p className="text-gray-600">{item.category}</p>
    </div>
  ))}

</div>


    </>
  )
}

export default FilterData