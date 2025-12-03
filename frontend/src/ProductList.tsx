import type { Product } from "./Product.ts";
import { useEffect, useState } from "react";
import { productApi } from "./productApi.ts";

type Props = {
    onSelect: (product: Product) => void;
};

export default function ProductList({ onSelect }: Props) {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        productApi.getAll().then(setProducts).catch(console.error);
    }, []);

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
    String(p.price).includes(search) ||
        String(p.quantity).includes(search)
    );

    return (
        <div className="card">
            <h2>Products</h2>

            {/* SEARCH BAR */}
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: "10px" }}
            />

            <ul>
                {filteredProducts.map((p) => (
                    <li
                        key={p.id}
                        onClick={() => onSelect(p)}
                        className="list-item"
                    >
                        {p.name} - {p.quantity} pcs - €{p.price} - [{p.category}]
                    </li>
                ))}
            </ul>
        </div>
    );
}
