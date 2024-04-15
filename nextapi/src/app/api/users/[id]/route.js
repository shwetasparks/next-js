import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
   const data = user;
   const userData = data.filter((item) => item.id === content.params.id);
   return NextResponse.json(
      userData.length == 0
         ? { result: "no data found", success: false }
         : { result: userData, success: true },
      { status: 200 }
   );
}
