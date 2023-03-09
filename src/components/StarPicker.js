import { useState } from "react";

const StarPicker = ({ rating, readOnly, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    if (!readOnly) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    if (!readOnly && onRate) {
      onRate(index);
    }
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      className={`h-6 w-6 ${
        index + 1 <= (hoverRating || rating)
          ? "text-yellow-500"
          : "text-gray-400"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="none"
      onMouseEnter={() => handleMouseEnter(index + 1)}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handleClick(index + 1)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 1l2.928 6.115L19.856 7.35l-5.458 5.316 1.292 7.51L10 16.9l-6.69 3.276 1.292-7.51L.144 7.35l6.928-.235L10 1z"
      />
    </svg>
  ));

  return <div className="flex">{stars}</div>;
};

export default StarPicker;
