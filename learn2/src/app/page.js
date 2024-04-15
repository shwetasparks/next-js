export default function Home() {
   console.log(process.env.NODE_ENV);
   return (
      <div>
         {
            (process.env.NODE_ENV = "development" ? (
               <h1>you are on developement mode</h1>
            ) : (
               <h1>you are on production mode</h1>
            ))
         } 
         <h1>env variables Home</h1>
      </div>
   );
}

// export default function Page() {
//    return (
//       <div>
//          <h1>Product List</h1>
//          <Link href="/productList">go to product list</Link>
//          <hr />
//          <Link href="/products">go to products</Link>

//       </div>
//    );
// }
