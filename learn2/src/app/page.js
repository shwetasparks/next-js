"use client";
import Link from "next/link";






export default function Page() {
   return (
      <div>
         <h1>Product List</h1>
         <Link href="/productList">go to product list</Link>
         <hr />
         <Link href="/products">go to products</Link>
      </div>
   );
}
