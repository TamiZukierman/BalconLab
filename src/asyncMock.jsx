//Array de objetos

const products = [
{
    id: "1",
    name: "KODAK COLORPLUS 200",
    price: 29000,
    category: " rollito",
    img: "/src/assets/producto1.png",
    stock: 25,
    description: "35 MM C-41 COLOR FILM"
},
{
    id: "2",
    name: "FOMAPAN 400",
    price: 18500,
    category: " rollito",
    img: "/src/assets/producto2.png",
    stock: 30,
    description: "35 MM, BYN",
},
{
    id: "3",
    name: "TOKYONIGHT 800",
    price: 30000,
    category: " rollito",
    img: "/src/assets/producto3.png",
    stock: 10,
    description: "35 MM C-41 COLOR FILM",
}

]

//funcion getproducts que retorna una promesa y esa promesa va a ser resuelta luego de un tiempo

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
            }, 500)
        })
    }

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id === productId))
        }, 500)
    })
}
