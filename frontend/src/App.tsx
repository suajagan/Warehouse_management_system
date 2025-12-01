import {useState} from "react";

import type {Product} from "./Product";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import ProductDetails from "./ProductDetails.tsx";

export default function App(){
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return(
        <div className="container">
            <h1>Warehouse Management System</h1>

            <div className="layout">
                <ProductList onSelect={(p) => setSelectedProduct(p)} />
                <ProductDetails product={selectedProduct} />
                <AddProductForm/>

            </div>

        </div>
    )
}


