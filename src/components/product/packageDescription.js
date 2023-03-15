import React from "react";
import Package from "./package";

const IndexPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4">
      <Package title="One solar panel tracker" price="£100" features={[]} />
      <Package
        title="Personal package"
        price="£390"
        features={[
          "Four solar panel trackers",
          "One-year free maintenance insurance",
        ]}
      />
      <Package
        title="Personal package +"
        price="£490"
        features={[
          "Four solar panel trackers",
          "Two-year free maintenance insurance",
          "To-home installation (UK)",
        ]}
      />
    </div>
  );
};

export default IndexPage;
