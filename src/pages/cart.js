import React from "react";
import Layout from "@/components/Layout";
import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function cart() {
  const items = [
    {
      id: 1,
      name: "SoTurn",
      price: 100,
      image: "/Soturn 3.JPG",
      quantity: 2,
    },
    {
      id: 2,
      name: "Installation",
      price: 150,
      image: "/Soturn 3.JPG",
      quantity: 1,
    },
  ];

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-8">
            Your Cart
          </h1>

          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-9">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="sm:col-span-3">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                    Order Summary
                  </h2>

                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>

                  <hr className="my-2" />

                  <div className="flex justify-between mb-2">
                    <span>Total</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>

                  <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-700 w-full sm:w-auto">
                    <Link href="/cart/checkout">Checkout</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
