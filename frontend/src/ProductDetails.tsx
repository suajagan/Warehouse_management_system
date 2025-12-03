import { useState } from "react";
import type { Product } from "./Product";
import { productApi } from "./productApi";

type Props = {
    product: Product | null;
};

export default function ProductDetails({ product }: Props) {

    const [editing, setEditing] = useState(false);

    const [editData, setEditData] = useState<Product | null>(product);

    if (product && editData?.id !== product.id) {
        setEditData(product);
    }

    async function handleDelete() {
        if (product?.id) {
            await productApi.delete(product.id);
            alert("Product deleted");
            window.location.reload();
        }
    }

    async function handleSave() {
        if (!editData || !editData.id) return;

        await productApi.update(editData.id, editData);
        alert("Product updated!");
        window.location.reload();
    }

    if (!product) return <div className="card placeholder">Select a Product</div>;

    return (
        <div className="card">
            <h2>Product Details</h2>

            {!editing && (
                <>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> €{product.price}</p>
                    <p><strong>Quantity:</strong> {product.quantity}</p>

                    <button onClick={() => setEditing(true)} className="edit">
                        Edit Product
                    </button>

                    <button onClick={handleDelete} className="danger">
                        Delete Product
                    </button>
                </>
            )}

            {editing && editData && (
                <div className="edit-form">

                    <input
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        placeholder="Name"
                    />

                    <input
                        value={editData.description}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                        placeholder="Description"
                    />

                    <input
                        value={editData.price}
                        type="number"
                        onChange={(e) => setEditData({ ...editData, price: Number(e.target.value) })}
                        placeholder="Price"
                    />

                    <input
                        value={editData.quantity}
                        type="number"
                        onChange={(e) => setEditData({ ...editData, quantity: Number(e.target.value) })}
                        placeholder="Quantity"
                    />

                    <select
                        value={editData.category}
                        onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                    >
                        <option value="">Select a Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Tools">Tools</option>
                        <option value="Books">Books</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Sports">Sports</option>
                    </select>

                    <button onClick={handleSave} className="save">
                        Save
                    </button>

                    <button onClick={() => setEditing(false)} className="cancel">
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}
