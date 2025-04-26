import React from 'react'
import TabContent from './TabContent';

const TabSwitch = () => {


    const tabData = [
        { label: "Bags", content: <div>All about Bags 👜</div> },
        { label: "Watches", content: <div>Luxury Watches ⌚</div> },
        { label: "Sunglasses", content: <div>Stylish Sunglasses 🕶️</div> },
        { label: "Sports", content: <div>Sports Equipments 🏀🏏</div> },
      ];

  return (
    <>
    <div className='text-center text-4xl border-b-2 border-dashed'>Tab Switch</div>


    <TabContent tabData={tabData} />
    </>
  )
}

export default TabSwitch