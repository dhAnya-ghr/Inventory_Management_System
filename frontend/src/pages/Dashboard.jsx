import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import {
  getProducts,
  getLowStockProducts,
} from "../services/api";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts();
      console.log(data);

      setProducts(data);
      setFilteredProducts(data);

      const uniqueCategories = [
        "All",
        ...new Set(data.map((p) => p.category)),
      ];

      setCategories(uniqueCategories);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    console.log("Search:", value);
console.log("Products:", products);
  setSearchTerm(value);

  if (value.trim() === "") {
    setFilteredProducts(products);
    return;
  }

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  console.log("Filtered:", filtered);

  setFilteredProducts(filtered);
};

  const handleCategory = (category) => {
    setSelectedCategory(category);

    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (item) => item.category === category
      );
    }

    if (searchTerm !== "") {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  };

  const handleLowStock = async (checked) => {
    try {
      if (checked) {
        const data = await getLowStockProducts();
        setFilteredProducts(data);
      } else {
        fetchProducts();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <SearchBar onSearch={handleSearch} />

          <div className="flex gap-4 mt-4">

            <CategoryFilter
              categories={categories}
              onSelect={handleCategory}
            />

            <label className="flex items-center gap-2">

              <input
                type="checkbox"
                onChange={(e) =>
                  handleLowStock(e.target.checked)
                }
              />

              Low Stock

            </label>

          </div>

        </div>

        <ProductForm
          product={product}
          setProduct={setProduct}
          fetchProducts={fetchProducts}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
        />

      </div>
      <h2>Products Count: {filteredProducts.length}</h2>
      <ProductTable
        products={filteredProducts}
        loading={loading}
        setProduct={setProduct}
        fetchProducts={fetchProducts}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
        />
        
    </div>
  );
}