import Head from "next/head";
import Image from "next/image";
import Insta from "../public/icons/instagram.svg";
import Facebook from "../public/icons/facebook.svg";
import Photo from "../public/photo.png";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/navbar";
import style from "../styles/Contact.module.scss";
import React from "react";

export default function Contact() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <div className={style.contact}>
        <div className={style.container}>
          <div className={style.getit}>
            <h1>Get in touch</h1>
            <p>
              We’d love to chat. Let’s start by scheduling a 30-minute discovery
              call to talk about your project.
            </p>

            <p>Or if you prefer, email us at hello@artellecreative.com.</p>

            <div className={style.photo}>
              <div className={style.photoimg}>
                <Image src={Photo} alt="" />
              </div>
              <div className={style.photoname}>
                <p>
                  <span style={{ fontWeight: "600" }}>
                    Ana Shuda <br />
                  </span>
                  New business and general inquiries.
                </p>
              </div>
            </div>
            <p style={{ fontSize: "24px" }}>Follow along</p>
            <div className={style.social}>
              <a>
                <span className={style.insta}>
                  <Image src={Insta} alt="Logo" />
                </span>
              </a>
              <a>
                <span className={style.facebook}>
                  <Image src={Facebook} alt="Logo" />
                </span>
              </a>
            </div>
          </div>
          <div className={style.calendar}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
