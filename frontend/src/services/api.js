const BASE_URL = "https://fakestoreapi.com";

/* --------------------------
   FETCH ALL PRODUCTS
-------------------------- */
export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

/* --------------------------
   FETCH SINGLE PRODUCT
-------------------------- */
export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return await res.json();
}

/* --------------------------
   FETCH BY CATEGORY
-------------------------- */
export async function fetchProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  if (!res.ok) throw new Error("Failed to fetch category products");
  return await res.json();
}

/* --------------------------
   FETCH CATEGORIES
-------------------------- */
export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return await res.json();
}
