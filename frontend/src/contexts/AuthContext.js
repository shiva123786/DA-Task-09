import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // Load saved user on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Persist user login
  useEffect(() => {
    if (user) localStorage.setItem("authUser", JSON.stringify(user));
    else localStorage.removeItem("authUser");
  }, [user]);

  /* ===========================
      AUTH FUNCTIONS
  ============================ */

  const register = (email, password) => {
    const newUser = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("registeredUser"));
    if (saved && saved.email === email && saved.password === password) {
      setUser(saved);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
