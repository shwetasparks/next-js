//calling on server side
async function userList() {
   let data = await fetch("https://dummyjson.com/users/");
   data = await data.json();
   return data.users;
}

export default async function user() {
   let users = await userList();
   console.log(users);
   return <div>
   {
    users.map((item)=>(
        <div>
            <h2>user name: {item.firstName}</h2>
        </div>

    ))
   }
   </div>
}
