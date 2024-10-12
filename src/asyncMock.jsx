//Array de objetos

const products = [
{
    id: "1",
    name: "KODAK COLORPLUS 200",
    price: 29000,
    category: "rollitos",
    img: "/src/assets/producto1.png",
    stock: 25,
    description: "35 MM C-41 COLOR FILM"
},
{
    id: "2",
    name: "FOMAPAN 400",
    price: 18500,
    category: "rollitos",
    img: "/src/assets/producto2.png",
    stock: 30,
    description: "35 MM, BYN",
},
{
    id: "3",
    name: "TOKYONIGHT 800",
    price: 30000,
    category: "rollitos",
    img: "/src/assets/producto3.png",
    stock: 10,
    description: "35 MM C-41 COLOR FILM",
},
{
    id: "4",
    name: "LEICA MINI3",
    price: 450000,
    category: "camaras",
    img: "/src/assets/producto4.png",
    stock: 5,
    description: "COMPACTA LEICA MINI3 LENTE 32MM F/3.2 CON FLASH",
},
{
    id: "5",
    name: "DUBBLEFILM SHOW",
    price: 60000,
    category: "camaras",
    img: "/src/assets/producto5.png",
    stock: 5,
    description: "COMPACTA DUBBLEFILM SHOW 32MM F:8/11 1/100 CON FLASH",
},
{
    id: "6",
    name: "OLYMPUS INFINITY",
    price: 590000,
    category: "camaras",
    img: "/src/assets/producto6.png",
    stock: 5,
    description: "COMPACTA OLYMPUS INFINITY 35MM F/3.5 CON FLASH",
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

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}