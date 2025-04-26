import React, { useState } from "react";

const Modal = () => {
  const [open, isOpen] = useState(false);
  const [data,setData] =useState(false)

  const modalOpen = () => {
    isOpen(true);
  };

  const modalClose = () => {
    isOpen(false);
  };

  const acceptOffer = () =>{
    setData(true)
    isOpen(false);
  }

  return (
    <>
      <h1 className="text-center text-4xl border-b-2 border-dashed ">Modal</h1>

      {!open && !data && (
  <div className="text-center mt-[50%]">
    <button
      onClick={modalOpen}
      className=" w-24 p-2 rounded-lg bg-teal-300 text-center cursor-pointer"
    >
      Show Offer
    </button>
  </div>
)}


      {open && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
          <div className="bg-white border-2 rounded-lg p-4 w-[300px] h-[200px] relative">
            <button 
            onClick={modalClose}
            className="absolute top-2 right-2 cursor-pointer">x</button>

            <p className="text-center mt-12">
              Click the button to accept the offer
            </p>

            <div className="text-center mt-14">
              <button 
              onClick={acceptOffer}
              className="bg-black text-amber-600 rounded-lg w-24 h-10 cursor-pointer">
                Accept offer
              </button>
            </div>
          </div>
        </div>

      
      )}

      {data ?(
        <div className="text-6xl mt-[50%] text-amber-300">Offer Accepted</div>
      ):(<></>)}



    </>
  );
};

export default Modal;
