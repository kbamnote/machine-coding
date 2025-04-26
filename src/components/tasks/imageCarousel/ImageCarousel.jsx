import React, { useEffect, useState } from "react";
import { getImages } from "./ImageApi";

const ImageCarousel = () => {
  const [image, setImage] = useState([]);
  const [idx, setIdx] = useState(0);

  const images = async () => {
    const response = await getImages();
    const list = response.data.data.children;

    const inside = list.map((item) => item.data.url_overridden_by_dest);
    const jpgImages = inside.filter((inside) => inside.includes(".jpg"));
    console.log(jpgImages);
    setImage(jpgImages);
  };

  const handleRight = () => {
    setIdx((prevIdx) => (prevIdx + 1) % image.length);
  };

  const handleLeft = () => {
    setIdx((prevIdx) => (prevIdx - 1 + image.length) % image.length);
  };
  useEffect(() => {
 
    images();

    
    const intervalId = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % image.length);
    }, 2000);

   
    return () => clearInterval(intervalId);
  }, [image.length]);

  return (
    <>
      <h1 className="text-center text-4xl border-b-2 border-dashed">
        Image Carousel
      </h1>

      {image.length>0 &&(
        <div className="mt-12">
<img className="w-98 h-80" src={image[idx]} alt="" />

<div className="text-center space-x-8 mt-8">
  <button onClick={handleLeft} className="w-12 bg-black text-white h-12">
    {"<"}
  </button>

  <button onClick={handleRight} className="w-12 bg-black text-white h-12">
    {">"}
  </button>
</div>

        </div>
      )}

      
    </>
  );
};

export default ImageCarousel;
