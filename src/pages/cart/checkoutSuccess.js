import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function checkoutSuccess() {
  return (
    <Layout>
      <section className="bg-gray-100 min-h-screen py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mt-4">
                Thank You for Your Order
              </h1>
              <p className="text-gray-500 mt-2">
                Your order has been received and is being processed. We will
                send you a confirmation email shortly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg px-8 py-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Order Details
                </h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Order Number</span>
                  <span className="text-gray-800 font-semibold">#23456789</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Order Date</span>
                  <span className="text-gray-800 font-semibold">
                    March 11, 2023
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Total Amount</span>
                  <span className="text-gray-800 font-semibold">$189.00</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Shipping Address
                </h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Name</span>
                  <span className="text-gray-800 font-semibold">John Doe</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Address</span>
                  <span className="text-gray-800 font-semibold">
                    123 Main St
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">City</span>
                  <span className="text-gray-800 font-semibold">Anytown</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">State</span>
                  <span className="text-gray-800 font-semibold">CA</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Zip Code</span>
                  <span className="text-gray-800 font-semibold">12345</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Payment Method
                </h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Payment Type</span>
                  <span className="text-gray-800 font-semibold">
                    Credit Card
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Card Number</span>
                  <span className="text-gray-800 font-semibold">
                    **** **** **** 1234
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Expiration Date</span>
                  <span className="text-gray-800 font-semibold">12/25</span>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link href="/">Continue Shopping</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
