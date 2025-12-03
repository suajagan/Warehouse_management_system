import React, { useState } from "react";
import type { Product } from "./Product";
import { productApi } from "./productApi";

export default function AddProductForm() {

    const categories = [
        "Electronics",
        "Furniture",
        "Clothing",
        "Food",
        "Beverages",
        "Tools",
        "Books",
        "Stationery",
        "Cosmetics",
        "Sports"
    ];

    const [form, setForm] = useState<Omit<Product, "id">>({
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        category: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: name === "price" || name === "quantity"
                ? Number(value)
                : value
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await productApi.create(form);
        alert("Product Added");
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>

            <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />

            <input
                name="description"
                placeholder="Description"
                onChange={handleChange}
            />

            <input
                name="price"
                type="number"
                placeholder="Price"
                onChange={handleChange}
            />

            <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                onChange={handleChange}
            />


            <select
                name="category"
                value={form.category}
                onChange={handleChange}
            >
                <option value="">Select a Category</option>
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>

            <button type="submit">
                Add Product
            </button>

        </form>
    );
}
