"use client"
import Link from "next/link";



function Page() {
   return (
      <main>
         <h1>Login page</h1>
         <Link href="/">Home</Link>
         <br />
         <br />

         <Link href="/loginteacher">Teacher Login</Link>
         <br />
         <br />
         <Link href="/loginstudent">student Login</Link>

         <br />
      </main>
   );
}

export default Page;
