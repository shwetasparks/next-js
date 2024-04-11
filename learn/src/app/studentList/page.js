
import Link from "next/link";
export default function StudentList(){


    return (
       <div>
          <h1>student list</h1>
          <ul>
             <li>
                <Link href="/studentList/id">shweta</Link>
             </li>
             <li>
                <Link href="/studentList/id1">div</Link>
             </li>
             <li>
                <Link href="/studentList/id2">divyanshu</Link>
             </li>
             <li>
                <Link href="/studentList/id3">tarun</Link>
             </li>
          </ul>
       </div>
    );
}