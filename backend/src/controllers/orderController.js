const orders = [];

export const createOrder = (req, res) => {
  const { items, totalPrice, address } = req.body;

  if (!items || !totalPrice || !address)
    return res.status(400).json({ message: "Missing order data" });

  const newOrder = {
    id: Date.now(),
    user: req.user.email,
    items,
    totalPrice,
    address,
    status: "Pending",
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  res.status(201).json({ message: "Order placed", order: newOrder });
};

export const getMyOrders = (req, res) => {
  const myOrders = orders.filter(o => o.user === req.user.email);
  res.json(myOrders);
};

export const getAllOrders = (req, res) => {
  res.json(orders);
};

export const updateOrderStatus = (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.id == req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  order.status = status;
  res.json({ message: "Order updated", order });
};
