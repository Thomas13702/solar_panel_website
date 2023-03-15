import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 md:py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="text-gray-400 text-sm leading-loose">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/product">Products</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="text-gray-400 text-sm leading-loose">
              <li>
                <Link href="/">SoTurn</Link>
              </li>
              <li>
                <Link href="/work">Work With Us</Link>
              </li>
              <li>
                <Link href="/contact">Maintenance</Link>
              </li>
              <li>
                <Link href="/contact">Installation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="text-gray-400 text-sm leading-loose">
              <li>1234 Main Street</li>
              <li>City, State 12345</li>
              <li>Phone: 555-555-5555</li>
              <li>Email: info@company.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex text-gray-400 text-sm">
              <li>
                <a href="#" className="mr-4 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SoTurn. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy and Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
