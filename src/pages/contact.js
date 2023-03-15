import React, { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="mx-auto max-w-3xl bg-white shadow-md rounded-md overflow-hidden">
          <div className="px-6 py-8 md:p-10">
            <div className="mb-8 text-2xl font-semibold text-gray-700">
              Contact Us
            </div>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 focus:border-yellow-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 focus:border-yellow-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-yellow-200 focus:border-yellow-500"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  className="inline-block px-6 py-2 leading-none border rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-200 focus:border-yellow-500"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
