

import Link from "next/link";
import {usePathname} from "next/navigation"

export default function Layout({ children }) {
   const pathName=usePathname();
  



   return (
      <div>
          {
      pathName!=="/login/loginteacher"?
   }
         <ul>
            <li>
               <Link href="/login">Login</Link>
            </li>
            <li>
               <Link href="/loginstudent">student login</Link>
            </li>
            <li>
               <Link href="/loginteacher">student login</Link>
            </li>
         </ul>
         <h3>Common Layout</h3>
         {children}
      </div>
   );
}
