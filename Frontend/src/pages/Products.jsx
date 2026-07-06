import {useEffect, useState} from "react";
import ProductCart from "../components/productCart";
import { getAllProducts } from "../Services/productService";

function Products({search}){
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        getAllProducts()
          .then((response) =>{
            setProducts(response.data);
        })
        .catch((error)=>{
            console.error(error);
        });
    },[]);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="container mt-4">
            <div className="row">
                {filteredProducts.map(product =>(
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                         <ProductCart product ={product} />
                    </div>
                ))}

            </div>

        </div>
    );

}


export default Products;