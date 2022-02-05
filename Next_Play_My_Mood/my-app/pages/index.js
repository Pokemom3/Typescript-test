import Head from "next/head";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.css";
import footer from "../components/footer";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home: Lets Get Started</h1>
      <Link href="/mood">
        <a>See your MOOD listings for the day</a>
      </Link>
      <Footer />
    </div>
  );
}
