"use client"

import {useRouter} from 'next/navigation'
import Link from "next/link";

function page() {
   const router=useRouter();

   const navigate=(name)=>{
      router.push(name);
   }


   return (
      <main>
         <h1>Basic Routing</h1>
         <br />
         <Link href="/login"> Login </Link>
         <br />
         <br />

         <button onClick={()=>navigate("/login")}> Login Page</button>
         <br />
         <button onClick={()=>navigate("/about/aboutstudent")}>About student</button>
         
         <br />
      </main>
   );
}

export default page;
