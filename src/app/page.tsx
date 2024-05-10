'use client'

import Cart from "@/components/frontend/Cart";
import Features from "@/components/frontend/Features";
import Footer from "@/components/frontend/Footer";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import TrendingProduct from "@/components/frontend/TrendingProduct";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false)

  return (
    <main>
      <Navbar setShowCart={setShowCart}
      />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Features />
      <TrendingProduct />
      <Footer />
    </main>
  );
}
