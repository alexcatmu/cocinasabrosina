import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cocina Sabrosina 👩‍🍳</title>
      </Head>

      <main className={styles.main}>
        <ResponsiveNavbar />
      </main>
    </div>
  );
}
