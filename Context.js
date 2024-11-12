import React, { createContext, useState } from 'react';

// Membuat Context untuk keranjang dan pesanan
export const CartItems = createContext();
export const OrderContext = createContext();

// Provider untuk membungkus komponen dengan keranjang dan pesanan
export const BasketContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fungsi untuk menambahkan item ke keranjang
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Fungsi untuk membuat pesanan dari item di keranjang
  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to the cart before placing an order.');
      return;
    }

    const newOrder = {
      orderNumber: `ORD${orders.length + 1}`,
      date: new Date().toLocaleDateString(),
      status: 'In Progress',
      total: `$${cart.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2)}`, // Memastikan item.price adalah angka
      items: cart,
    };

    // Menambahkan pesanan baru ke daftar pesanan dan mengosongkan keranjang
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]); // Mengosongkan keranjang setelah pesanan dibuat
    alert('Order placed successfully!');
  };

  return (
    <CartItems.Provider value={{ cart, setCart, addToCart }}>
      <OrderContext.Provider value={{ orders, setOrders, placeOrder }}>
        {children}
      </OrderContext.Provider>
    </CartItems.Provider>
  );
};
