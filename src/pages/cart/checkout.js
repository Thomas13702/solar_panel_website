import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="bg-gray-100">
        <div className="container mx-auto pt-10 pb-20">
          <div className="md:flex">
            <div className="md:w-1/2 px-8 mb-10 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Checkout
              </h1>
              <form>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Street Address"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="Your City"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="state"
                  >
                    County
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="state"
                    type="text"
                    placeholder="Your County"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="zip"
                  >
                    Postcode
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="zip"
                    type="text"
                    placeholder="Your Postcode"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="cardNumber"
                  >
                    Card Number
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cardNumber"
                    type="text"
                    placeholder="Your Card Number"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="expDate"
                  >
                    Expiration Date
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expDate"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="mb-8">
                  <label
                    className="font-semibold text-gray-700 block mb-2"
                    htmlFor="cvv"
                  >
                    CVV
                  </label>
                  <input
                    className="w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cvv"
                    type="text"
                    placeholder="Your CVV"
                  />
                </div>
              </form>
            </div>
            <div className="md:w-1/2 px-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>
              <div className="flex items-center justify-between bg-white rounded p-6 mb-6 shadow-sm">
                <div className="flex items-center">
                  <Image
                    src="/Soturn 3.JPG"
                    alt="iPhone"
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      SoTurn
                    </h3>
                    <p className="text-gray-500"></p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-800">£100</p>
              </div>
              <div className="flex items-center justify-between bg-white rounded p-6 mb-6 shadow-sm">
                <div className="flex items-center">
                  <Image
                    src="/Soturn 3.JPG"
                    alt="MacBook"
                    width={64}
                    height={64}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Installation
                    </h3>
                    <p className="text-gray-500"></p>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-800">£150</p>
              </div>
              <div className="bg-white rounded p-6 mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-gray-800 font-medium">£350</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-gray-800 font-medium">£0</span>{" "}
                </div>
                <div className="border-t border-gray-300 mt-4 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-800 font-semibold">Total</span>
                    <span className="text-gray-800 font-semibold">£350</span>
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full">
                    <Link href="/cart/checkoutSuccess">Complete Order</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
