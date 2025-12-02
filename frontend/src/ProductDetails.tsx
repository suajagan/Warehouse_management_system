import { useState } from "react";
import type { Product } from "./Product";
import { productApi } from "./productApi";

type Props = {
    product: Product | null;
};

export default function ProductDetails({ product }: Props) {

    const [editing, setEditing] = useState(false);

    const [editData, setEditData] = useState<Product | null>(product);

    // update edit fields when user selects a new product
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

    if (!product) return <div className="card">Select a Product</div>;

    return (
        <div className="card">
            <h2>Product Details</h2>

            {!editing && (
                <>
                    <p><strong>Name:</strong> {product.name}</p>
                    <p><strong>Description:</strong> {product.description}</p>
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
                        onChange={(e) =>
                            setEditData({ ...editData, price: Number(e.target.value) })
                        }
                        placeholder="Price"
                    />

                    <input
                        value={editData.quantity}
                        type="number"
                        onChange={(e) =>
                            setEditData({ ...editData, quantity: Number(e.target.value) })
                        }
                        placeholder="Quantity"
                    />

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
