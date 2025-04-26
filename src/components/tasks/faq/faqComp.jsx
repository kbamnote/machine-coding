import React from 'react';
import FAQitem from './faqItem';

const FaqComp = () => {
  const faq = [
    {
      question: "What is a countdown timer used for?",
      answer: "A countdown timer is used to measure a set amount of time and alert you when that time is over. It's helpful for tasks like workouts, cooking, study sessions, or managing breaks."
    },
    {
      question: "Can I pause and resume the countdown timer?",
      answer: "Yes, if the feature is implemented. You can pause the countdown anytime and resume it from where it left off."
    },
    {
      question: "What happens when the timer reaches zero?",
      answer: "When the timer hits zero, it usually stops automatically. Some timers may play a sound or show an alert to notify you that the time is up."
    }
  ];

  return (
   <>
   <h1 className='text-center text-4xl border-b-2 border-dotted'>FAQ questions</h1>

   {faq.map((item,index)=>(
    <div>
<FAQitem  item={item} key={index} />

    </div>
   ))}
   
   </>
  );
};

export default FaqComp;
