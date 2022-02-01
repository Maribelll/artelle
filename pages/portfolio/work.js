import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import { Maximus } from "../../Components/Maximus";
import style from "../../styles/Work.module.scss";
import { Shudaproperties } from "../../Components/Shudaproperties";
import { Nomad } from "../../Components/Nomad";

export default function Work() {
  return (
    <>
      <Head></Head>
      <Navbar />

      <div className={style.mainname}>
        <h2>Everything to put your business online</h2>
        <p style={{ fontSize: "16px" }}>Featured case studies.</p>
      </div>
      <Maximus></Maximus>
      <Shudaproperties></Shudaproperties>
      <Nomad></Nomad>
      <Footer />
    </>
  );
}
