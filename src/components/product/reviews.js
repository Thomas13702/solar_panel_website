import React, { useState } from "react";
import StarPicker from "@/components/StarPicker";

export default function reviews() {
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

  return (
    <div>
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
  );
}
