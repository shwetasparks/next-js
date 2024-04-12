"use client"

export default function Product({price}){
    console.log(price);
    return (
        <div>
            <button onClick={()=>alert(price)}>Click me</button>
        </div>
    )
}