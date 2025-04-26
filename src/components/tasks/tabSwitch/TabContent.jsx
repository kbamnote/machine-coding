import React, { useState } from "react";

const TabContent = ({ tabData }) => {
  const [activeIndex, setActiveIndex] = useState(tabData[0]);

const handleClick = (item) =>{
setActiveIndex(item)
}

  console.log(activeIndex);

  return (
    <>

      <div className="flex justify-center space-x-14 mt-16">
        {tabData.map((item, index) => (
            <div key={index}>
                <div>
          <button className={item.label ===activeIndex.label ?'bg-black text-white shadow-lg scale-105 px-4 py-2 w-28 rounded-md font-semibold transition-all duration-300 ':''}
          onClick={()=>handleClick(item)}
          
          >{item.label}</button>
          </div>

          <div className="mt-12">
{item.label===activeIndex.label ?<div className=""> <h1 className="">{item.content}</h1></div> :<div></div>}
</div>
</div>
        ))}

        
      </div>
    </>
  );
};

export default TabContent;
