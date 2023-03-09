import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="">
      <p>Copyright &copy; EVA LTD {new Date().getFullYear()}</p>
    </div>
  );
}
