import { useState } from "react";

export default function PackageSelector({ packages }) {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <div>
      <h6 className="text-2xl font-medium mb-4">Packages</h6>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          value={selectedPackage.name}
          onChange={(e) => {
            const selected = packages.find((p) => p.name === e.target.value);
            setSelectedPackage(selected);
          }}
        >
          {packages.map((pkg) => (
            <option key={pkg.name} value={pkg.name}>
              {pkg.name} - £{pkg.price}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 17.207l-6.146-6.146a.999.999 0 1 1 1.414-1.414L12 14.38l4.732-4.733a.999.999 0 1 1 1.414 1.414L12 17.207z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
