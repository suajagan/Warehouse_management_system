import React, {useState} from "react";
import type {Product} from "./Product";
import {productApi} from "./productApi";

export default function AddProductForm(){
    const [form, setForm] = useState<Omit<Product, "id">>({
        name:"",
        description:"",
        price: 0,
        quantity:0,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: name === "price" || name === "quantity"
                ? Number(value)
                : value
        });
    }


    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        try {
            console.log("Sending:", form)
            await productApi.create(form);
            alert("Product Added");
            window.location.reload();
        }catch (err){
            console.log(err);
            alert("error adding product")
        }
    }

    return(
        <form className="card" onSubmit={handleSubmit}>
            <h2> Add Product</h2>
            <input name="name" placeholder="Name" onChange={handleChange}/>
            <input name="description" placeholder="Description" onChange={handleChange}/>
            <input name="price" type="number" placeholder="Price" onChange={handleChange}/>
            <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange}/>

            <button type="submit">Add Product</button>

        </form>
    );
}