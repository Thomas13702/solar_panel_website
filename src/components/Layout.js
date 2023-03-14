import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({
  title,
  keywords,
  description,
  children,
  uid,
}) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <NavBar />

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Soturn",
  description: "Make your energy smart",
  keywords: "Solar Panel Mechanisms",
};
