import type {Product} from "./Product.ts";
import {useEffect, useState} from "react";
import {productApi} from "./productApi.ts";

type Props ={
    onSelect: (product : Product) => void;
};

export default function ProductList({ onSelect }: Props){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        productApi.getAll().then(setProducts).catch(console.error);
    }, []);

    return (
        <div className="card">
            <h2>Products</h2>
            <ul>
                {products.map((p)=>(
                    <li
                        key={p.id}
                      onClick={() => onSelect(p)}
                      className="list-item"
                    >
                        {p.name} - {p.quantity} pcs -€{p.price}
                    </li>
                ))}
            </ul>

        </div>
    );
}