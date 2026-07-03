import React from "react";
import { FaEdit, FaTrash, FaExclamationTriangle } from "react-icons/fa";
import { deleteProduct } from "../services/api";
import { format } from "date-fns";
import { toast } from "react-toastify";

export default function ProductTable({
  products,
  loading,
  setProduct,
  fetchProducts,
}) {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      toast.success("Product deleted successfully");
      fetchProducts();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (!products || products.length === 0) {
    return <h2 className="text-center mt-5">No Products Found</h2>;
  }

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Minimum Stock</th>
            <th className="border p-2">Created Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">₹ {product.price}</td>
              <td className="border p-2">{product.quantity}</td>
              <td className="border p-2">{product.minStock}</td>
              <td className="border p-2">
                {format(new Date(product.createdAt), "dd/MM/yyyy")}
              </td>
              <td className="border p-2">
                {product.quantity <= product.minStock ? (
                  <span className="text-red-600 flex items-center gap-1">
                    <FaExclamationTriangle />
                    Low Stock
                  </span>
                ) : (
                  <span className="text-green-600">In Stock</span>
                )}
              </td>

              <td className="border p-2">
                <button
                  onClick={() => setProduct(product)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}