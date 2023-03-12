import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/404.svg" // Replace with your own image
          alt="404 Not Found"
          width={500}
          height={500}
        />
        <h1 className="text-4xl font-bold mt-8">Oops, page not found!</h1>
        <p className="text-xl mt-4">Looks like you&lsquo;re lost in space...</p>
        <Link href="/">
          <p className="text-lg font-medium text-blue-600 hover:underline mt-8">
            Click here to return to Earth
          </p>
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
