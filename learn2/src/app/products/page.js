
async function productList(){
    let data = await fetch("https://dummyjson.com/products");
    data= await data.json()
    return data.products

}


export default async function Page(){
    let products=await productList();
    console.log(products)
    return (
        <div>
            <h1>products</h1>
            products.map((item)=>(
                <div><h3>name:{item.title}</h3></div>
            ))

        </div>
    )
}