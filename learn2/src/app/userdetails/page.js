
"use client"
import Script from "next/script";

export default function Page() {
   return (
      <div>
        <Script
        src="/location.js"
        onLoad={()=>{console.log("file loaded");}}
        
        
        />
         <h1>user getLocation</h1>


      </div>
   );
}
