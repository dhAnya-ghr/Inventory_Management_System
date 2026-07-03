import React, { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../services/api";

export default function ProductForm({
  product,
  setProduct,
  fetchProducts,
  isProcessing,
  setIsProcessing,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: product.quantity,
        minStock: product.minStock,
      });
    } else {
      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        minStock: "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.quantity ||
      !formData.minStock
    ) {
      alert("Please fill all fields");
      return;
    }

    setIsProcessing(true);

    try {
      if (product) {
        await updateProduct(product._id, formData);
      } else {
        await addProduct(formData);
      }

      await fetchProducts();

      setProduct(null);

      setFormData({
        name: "",
        category: "",
        price: "",
        quantity: "",
        minStock: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-5">
      <h2 className="text-xl font-bold mb-4">
        {product ? "Update Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="minStock"
          placeholder="Minimum Stock"
          value={formData.minStock}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-2">

          <button
            type="submit"
            disabled={isProcessing}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {product ? "Update Product" : "Add Product"}
          </button>

          {product && (
            <button
              type="button"
              onClick={() => setProduct(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}

        </div>
      </form>
    </div>
  );
}