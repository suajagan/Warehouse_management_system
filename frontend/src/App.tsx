import {useState} from "react";

import type {Product} from "./Product.ts";
import ProductList from "./ProductList.tsx";
import AddProductForm from "./AddProductForm.tsx";
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


