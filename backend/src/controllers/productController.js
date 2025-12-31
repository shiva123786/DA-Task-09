const products = [
  { id: 1, title: "Laptop", price: 55000, image: "/images/laptop.png", category: "electronics" },
  { id: 2, title: "Headphones", price: 2500, image: "/images/headphones.png", category: "electronics" },
  { id: 3, title: "Shoes", price: 1800, image: "/images/shoes.png", category: "fashion" },
  { id: 4, title: "Watch", price: 3000, image: "/images/watch.png", category: "fashion" }
];

export const getProducts = (req, res) => {
  res.json(products);
};

export const getProduct = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const createProduct = (req, res) => {
  const { title, price, image, category } = req.body;
  if (!title || !price) return res.status(400).json({ message: "Invalid product data" });

  const newProduct = { id: Date.now(), title, price, image, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  products.splice(index, 1);
  res.json({ message: "Product deleted" });
};
