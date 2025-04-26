import React, { useState } from "react";
import FormData from "./FormData.json";

const MultiStep = () => {
  const [index, setIndex] = useState(0);
  const [data,setData] =useState({
    name:'',
    email:'',
    password:'',
    date:''
  })

  const changeForm = (e) => {
    e.preventDefault();
    if (index<FormData.length-1) {
        setIndex(index + 1);
    }
  
  };

  const handleInputChange = (e) =>{

    setData({...data,[e.target.name]:e.target.value})
    
    
}

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data);
    
}

  return (
    <>
      <h1 className="text-center text-4xl border-b-2 border-dashed">
        Multi Step Form
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-32 text-center items-center">
          <h1>{FormData[index].name}</h1>
          <input
          onChange={handleInputChange}
          name={FormData[index].name}
            type={FormData[index].inputType}
            placeholder={FormData[index].placeHolderText}
            className="border-2 mt-4"
          />
           {index === FormData.length - 1 ? (
      <button
        type="submit"
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        Submit
      </button>
    ) : (
      <button
        onClick={changeForm}
        type="button"
        className="mt-4 bg-teal-400 text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        {FormData[index].buttonName}
      </button>
    )}
        </div>
      </form>
    </>
  );
};

export default MultiStep;
