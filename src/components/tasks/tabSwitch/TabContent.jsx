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
          <button 
          onClick={()=>handleClick(item)}
          
          >{item.label}</button>
{item.label===activeIndex.label ? <h1>{item.content}</h1> :<div></div>}
</div>
        ))}

        
      </div>
    </>
  );
};

export default TabContent;
