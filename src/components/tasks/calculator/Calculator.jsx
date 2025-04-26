import React, { useState } from "react";
import { evaluate } from 'mathjs';


const Calculator = () => {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    'C'
  ];

  const [value, setValue] = useState("");


  const handleChange = (item) => {
    if (item === 'C') {
      setValue('');
    } else if (item === '=') {
      calculate();
    } else {
      setValue(prev => prev + item);
    }
  };

  const calculate = () => {
    try {
      const result = evaluate(value)
      setValue(result)
    } catch {
      setValue('Error');
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl border-b-2 border-dashed">
        Calculator
      </h1>
      <div className="text-center">
        <input readOnly className="border-2 mt-12 w-[30%]" type="text" value={value}/>
      </div>

      <div className=" grid grid-cols-3 space-y-8 text-center mt-12">
        {arr.map((item, index) => (
          <div onClick={()=>handleChange(item)} key={index}>
            <button className="bg-teal-300 text-white w-12 h-12 cursor-pointer">
              {item}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Calculator;
