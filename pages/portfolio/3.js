import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import style from "../../styles/Portfolio.module.scss";
import Image from "next/image";
import img1 from "../../public/NT_desktop1.jpg";
import img2 from "../../public/NT_desktop2.jpg";
import img3 from "../../public/NT_desktop3.jpg";
import img4 from "../../public/NT_mobile.jpg";

import { useRouter } from "next/router";

const Post3 = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head></Head>
      <Navbar />
      <div className={style.work1_1}>
        <div className={style.name}>
          <h3>NomadTechy</h3>
        </div>
        <div className={style.web_desc}>
          <p className={style.small}>
            NomadTechy is an IT managed service provider that was looking to
            organize their extensive list of services in a non-complicated way
            to provide value to potential clients and increase contact form
            submissions.
          </p>
        </div>
      </div>
      <div className={style.full_img}>
        <Image src={img1} alt="" />
      </div>
      <div className={style.full_img}>
        <Image src={img2} alt="" />
      </div>

      <div className={style.work1_2_desc}>
        <p>
          Our goal was to set NomadTechy apart from competition with transparent
          packages and overall approachability.
        </p>
      </div>
      <div className={style.full_img}>
        <Image src={img3} alt="" />
      </div>
      <div className={style.full_img}>
        <Image src={img4} alt="" />
      </div>

      <Footer></Footer>
    </>
  );
};

export default Post3;
