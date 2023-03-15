import React from "react";

const AdditionalServices = ({ personal }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Additional Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose from our range of services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a range of additional services to ensure you have the best
            experience with your solar panel tracker.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    One-time Maintenance
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    £60 for one (not including shipping fee)
                  </p>
                </div>
              </div>
            </li>

            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    To-Home Installation
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    £150 (Only available in UK)
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {personal ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mt-4 mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-1">
              For any further questions, you can email
              <a
                href="mailto:customerservice@soturn.co.uk"
                className="text-yellow-500 font-medium ml-2"
              >
                customerservice@soturn.co.uk
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-2xl font-semibold mt-4 mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-1">
              For any organization/company interested in a personalised service,
              you can contact
              <a
                href="mailto:customerservice@soturn.co.uk"
                className="text-yellow-500 font-medium ml-2"
              >
                Business@Soturn.co.uk
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalServices;
