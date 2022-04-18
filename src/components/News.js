
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import {Button} from"@material-ui/core"

function Product({  title, summary, media,link,published_date , country }) {
  
return (
    <div  className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {country}
     </p>

    

      
      {/* <Image src ={media} height={200} width={200} objectFit="contain" /> */}

      <img src = { media }
        className = ""
        alt = ""
       />
      <h4 className="my-3">{title}</h4>

     
      <p className="text-xs my-2 line-clamp-2">{summary}</p>

      <Button className= "left-2">
      <a href={link} className="text-blue-400 text-base">readmore....</a>
     </Button>

      {/* <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div> */}
    
    

      <ToastContainer />
    </div>
  );
}

export default Product;
