import Image from "next/image";
import Layout from "../components/Layout.js";
import { useState } from "react";
import StarPicker from "../components/StarPicker";

export default function Product() {
  const product = {
    id: 1,
    name: "Apple iPhone 12",
    imageSrc: "/iphone.jpg",
    description:
      "The iPhone 12 features a 6.1-inch Super Retina XDR display, Ceramic Shield with four times better drop performance, and the A14 Bionic chip, the fastest chip ever in a smartphone.",
    price: 799.99,
    rating: 4.9,
    numReviews: 172,
    features: [
      "6.1-inch Super Retina XDR display",
      "Ceramic Shield with four times better drop performance",
      "A14 Bionic chip, the fastest chip ever in a smartphone",
      "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras",
      "Night mode, Deep Fusion, and Smart HDR 3",
      "4K Dolby Vision HDR recording",
      "Industry-leading IP68 water resistance",
      "iOS 14 with redesigned widgets on the Home screen, all-new App Library, App Clips, and more",
      "Supports MagSafe accessories for easy attachment and faster wireless charging",
    ],
  };

  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 4, comment: "Great product!" },
    { id: 2, name: "Jane Smith", rating: 5, comment: "Absolutely love it!" },
    {
      id: 3,
      name: "Bob Johnson",
      rating: 5,
      comment: "Brilliant",
    },
  ]);

  const addReview = (name, rating, comment) => {
    const id = reviews.length + 1;
    setReviews([...reviews, { id, name, rating, comment }]);
  };

  const fakeReviews = [
    {
      id: 1,
      name: "John Smith",
      comment:
        "This product is amazing! I can't believe how much it has improved my life.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "I was skeptical at first, but after using this product for a week, I'm a believer.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bob Smith",
      comment:
        "I've tried other products like this before, but none of them compare to this one.",
      rating: 5,
    },
    {
      id: 4,
      name: "Samantha Lee",
      comment:
        "This product has completely exceeded my expectations. I'm so glad I gave it a try.",
      rating: 5,
    },
    {
      id: 5,
      name: "Chris Taylor",
      comment:
        "I use this product every day and it never fails to impress me. Highly recommended!",
      rating: 5,
    },
    {
      id: 6,
      name: "Maria Rodriguez",
      comment:
        "I'm so glad I discovered this product. It's made such a difference in my daily routine.",
      rating: 5,
    },
    {
      id: 7,
      name: "Samantha Lee",
      comment:
        "I'm blown away by how well this product works. It's truly a game changer.",
      rating: 5,
    },
    {
      id: 8,
      name: "Mike Williams",
      comment:
        "I'm so glad I found this product. It's made a huge difference in my daily routine.",
      rating: 5,
    },
    {
      id: 9,
      name: "Emily Davis",
      comment:
        "I was hesitant to try this at first, but I'm so glad I did. It's exceeded all of my expectations.",
      rating: 5,
    },
    {
      id: 10,
      name: "Chris Thompson",
      comment:
        "I've been using this product for months now, and I'm still amazed at how well it works. Highly recommend!",
      rating: 5,
    },
    {
      id: 11,
      name: "Karen Rodriguez",
      comment:
        "I never knew how much I needed this product until I tried it. Now, I can't imagine my life without it.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Product Image */}
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="relative w-full h-96">
              <Image
                src="/images/product.jpg"
                alt="Product Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-2xl font-medium mb-4">Product Title</h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              semper nunc. Donec in felis augue. Ut ultricies imperdiet nulla
              vel luctus. Nulla facilisi.
            </p>
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold">$99.99</span>
              <span className="text-sm ml-2 text-gray-400">/ per unit</span>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product Features */}
        <div className="mt-8 p-6">
          <h2 className="text-lg font-medium mb-4">Product Features</h2>
          <ul className="list-disc list-inside">
            {product.features.map((feature) => (
              <li key={feature} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Product Reviews
            </h3>
            <div className="mt-5">
              {reviews.map((review) => (
                <div key={review.id} className="mb-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <StarPicker rating={review.rating} readOnly />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
              {fakeReviews.map((review) => (
                <div key={review.id} className="mb-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <StarPicker rating={review.rating} readOnly />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-5" />
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Add a Review
            </h3>
            <div className="mt-5">
              <StarPicker rating={0} onRate={addReview} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
