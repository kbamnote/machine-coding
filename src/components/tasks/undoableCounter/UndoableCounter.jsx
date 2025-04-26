import React, { useState } from 'react';

const UndoableCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]); // for storing history

  const maintainHistory = (action, prev, curr) => {
    const entry = { action, from: prev, to: curr };
    setHistory(prevHistory => [...prevHistory, entry]);
    console.log('Action logged:', entry);
  };

  const handleChange = (amount, label) => {
    const prev = count;
    const newCount = prev + amount;
    setCount(newCount);
    maintainHistory(label, prev, newCount);
  };

  return (
    <>
      <h1 className='text-4xl text-center border-b-2 border-dotted'>Undoable Counter</h1>

      <div className='text-center space-x-4 mt-10'>
        <button onClick={() => handleChange(1, '+1')} className='bg-black text-white w-12 h-12'>+1</button>
        <button onClick={() => handleChange(10, '+10')} className='bg-black text-white w-12 h-12'>+10</button>
        <button onClick={() => handleChange(100, '+100')} className='bg-black text-white w-12 h-12'>+100</button>

        <button onClick={() => handleChange(-1, '-1')} className='bg-black text-white w-12 h-12'>-1</button>
        <button onClick={() => handleChange(-10, '-10')} className='bg-black text-white w-12 h-12'>-10</button>
        <button onClick={() => handleChange(-100, '-100')} className='bg-black text-white w-12 h-12'>-100</button>
      </div>

      <div className='text-center text-3xl items-center mt-8'>
        <span className='bg-amber-100 p-2 px-4 border-2'>{count}</span>
      </div>

      <div className='mt-8 text-center'>
        <h2 className='text-2xl mb-2 underline'>History</h2>
        <ul className='inline-block text-left'>
          {history.map((item, index) => (
            <li key={index}>
              {item.action}: {item.from} → {item.to}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UndoableCounter;
