

async function getUser() {
   let data = await fetch(`http://localhost:3000/api/users/${id} `); //return promise
   data = await data.json();
   return data;
}

export default async function page(params) {
   let user = await getUser(params.userid);
   console.log(user);
   return (
      <div>
         <h2>user details</h2>
      </div>
   );
}
