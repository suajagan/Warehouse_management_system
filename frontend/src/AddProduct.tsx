import {useState} from "react";
import * as React from "react";

export default function AddProduct(){
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        const newProduct = {description};

        fetch("/api/products",
            {
                method: "POST",
                headers:{"content-type":"application/json"},
                body: JSON.stringify(newProduct)
            })
            .then(res=>res.json())
            .then(()=>{
                alert("Product added");
                window.location.href="/products";
            });
    }


    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input placeholder="name"
                   value={name}
                   onChange={event => setName(event.target.value)}
                   required
            />
            <input placeholder="Description"
                   value={description}
                   onChange={event => setDescription(event.target.value)}
                   required
            />
            <input type="number"
                placeholder="price"
                   value={price}
                   onChange={event => setPrice(Number(event.target.value))}
                   required
            />
            <input type="number"
                placeholder="quantity"
                   value={quantity}
                   onChange={event => setQuantity(Number(event.target.value))}
                   required
            />

            <button type="submit">create</button>


        </form>
    );
}