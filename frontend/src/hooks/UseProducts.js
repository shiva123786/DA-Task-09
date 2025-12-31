import { useEffect, useState } from "react";
import { fetchAllProducts, fetchProductsByCategory } from "../services/api";

/*
   Custom hook for fetching products with:
   • Caching
   • Filtering
   • Loading state
   • Error handling
*/

export default function useProducts(category = "all") {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cached = sessionStorage.getItem("cachedProducts");

    async function loadProducts() {
      try {
        setLoading(true);

        if (cached && category === "all") {
          setProducts(JSON.parse(cached));
        } else {
          const data =
            category === "all"
              ? await fetchAllProducts()
              : await fetchProductsByCategory(category);

          setProducts(data);
          if (category === "all")
            sessionStorage.setItem("cachedProducts", JSON.stringify(data));
        }

      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [category]);

  return { products, loading, error };
}
