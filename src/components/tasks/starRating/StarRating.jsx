import React, { useState } from "react";

const StarRating = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="text-center text-4xl border-b-2 border-dashed">
        Star Rating
      </h1>

      <div className="text-center space-x-6">
        {arr.map((item) => (
          <button key={item}
          
          onClick={() => setRating(item)}
          onMouseOver={()=> setHover(item)}
          onMouseLeave={()=> setHover(rating)}
          
          >
            <span className={`text-5xl ${item<=((rating &&hover) || hover)
              ?'text-amber-300' :'text-gray-500'
            }`}>&#9733;</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default StarRating;
