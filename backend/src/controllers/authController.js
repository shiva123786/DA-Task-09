import jwt from "jsonwebtoken";

const users = [];

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export const registerUser = (req, res) => {
  const { name, email, password, role } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Missing credentials" });

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = {
    id: Date.now(),
    name,
    email,
    password,
    role: role || "user"
  };

  users.push(user);
  res.status(201).json({ message: "Registered", token: generateToken(user) });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  res.json({ message: "Login success", token: generateToken(user) });
};

export const getProfile = (req, res) => {
  res.json(req.user);
};
