import React, { useEffect, useState } from 'react'
import { searchResultApi } from './DebouncingApi'

const Debouncing = () => {

const [input,setInput] =useState('')
const [data,setData] =useState([])

const handleChange = (e) =>{
   setInput(e.target.value) 
}

console.log(input);

const getResult = async() =>{
    const response = await searchResultApi(input)
    console.log(response.data);
    setData(response.data)
    setInput('')
    
}



useEffect(()=>{

const handler = setTimeout(()=>{

    if (input) {
        getResult()  
    }
},500)

return()=>clearTimeout(handler)


},[input])


  return (
    <>
    <div className='text-center text-4xl border-b-2 border-dashed'>Debouncing</div>

<div className='text-center mt-20'> 
    
    <input type="text" 
    className='border-2'
    value={input}
    onChange={handleChange}
    
    />
    
{data.map((item,index)=>(
    <ul key={index}><li>{item}</li></ul>
))}

    
    
    </div>

   </>
  )
}

export default Debouncing