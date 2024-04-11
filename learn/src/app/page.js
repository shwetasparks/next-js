import Link from "next/link";

function page() {
   return (
      <main>
         <h1>Basic Routing</h1>
         <br />
         <Link href="/login"> Login </Link>
         <br />
      </main>
   );
}

export default page;
