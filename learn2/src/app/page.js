"use client";
import Link from "next/link";
export default function Page() {
   return (
      <div>
         <h1>Product List</h1>
         <Link href="/productList">go to product list</Link>
      </div>
   );
}
