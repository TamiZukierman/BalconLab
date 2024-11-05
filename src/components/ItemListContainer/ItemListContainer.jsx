import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../config/firebase';


const ItemListContainer = ({ greeting }) => {
//estado que se encargue de almacenar los productos
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoryId = useParams().categoryId;
    

    //para obtener los productos llamamos la funcion getProducts
    useEffect(()=>{

        const productsRef = collection(db, "products");

        const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;

        setLoading(true); 

        getDocs(q)
            .then((resp) => {
            

                setProducts(
                    resp.docs.map((doc)=>{
                        return{...doc.data(), id:doc.id}
                    })
                )
            })
            .finally(() => {
                setLoading(false); 
            });
        

    },[categoryId])

    return (
        <div>
        <h2>{greeting}</h2>
        {loading ? ( 
            <Spinner /> 
        ) : (
            <ItemList products={products} />
        )}
    </div>
        );
    };

export default ItemListContainer