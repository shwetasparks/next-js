"use client";
import { useEffect} from "react";
import Product from "./product";


export default function Page() {
    const [product,setProduct]=useState([])
   useEffect(async () => {
      let data = await fetch("https://dummyjson.com/products/");
      data = await data.json();
      console.log(data);
      setProduct(data.products)
   }, []);
   return (
      <div>
         <h1>Product List</h1>
         {
        product.map((item)=>(
           <div>
            <h3>Name:{item.title}</h3>
            <Product/>
           </div>
            
        ))
         }
      </div>
   );
}
