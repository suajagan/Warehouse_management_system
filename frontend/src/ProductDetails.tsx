import type {Product} from "./Product";
import {productApi} from "./productApi";


type Props ={
    product: Product | null;
};

export default function ProductDetails({ product }: Props){

    if(!product) return <div className="card">Select a Product</div>;

    async function handleDelete(){
        if(product?.id){
            await productApi.delete(product.id);
            alert("Product deleted");
            window.location.reload();
        }
    }

    return (
        <div className="card">
            <h2> Product Details</h2>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong>€{product.price}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>

            <button onClick={handleDelete} className="danger">Delete Product</button>

        </div>
    );
}