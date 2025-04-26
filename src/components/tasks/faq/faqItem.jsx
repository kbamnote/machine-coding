import React, { useState } from 'react'

const FAQitem = ({item}) => {
const[isStart,setIsStart] =useState(false)

const handleClick = () =>{
    setIsStart(true)
}

    const handleClose = () =>{
        setIsStart(false)
}

  return (
    <div>
        

{!isStart &&(
    <>
    <button onClick={handleClick}>=</button>
     {item.question}
    </>
)}
{isStart &&(
    <>
    <button onClick={handleClose}>\/</button>
     {item.question}  <br />
     {item.answer}
    </>
)}

       
       
    
    </div>
  )
}

export default FAQitem