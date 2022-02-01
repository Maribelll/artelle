import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import style from "../../styles/Portfolio.module.scss";
import Image from "next/image";
import img1 from "../../public/MM_desktop1.jpg";
import img2 from "../../public/MM_desktop2.jpg";
import img3 from "../../public/MM_desktop3.jpg";
import img4 from "../../public/MM_phone.jpg";

import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head></Head>
      <Navbar />
      <div className={style.work1_1}>
        <div className={style.name}>
          <h3>Maximus Microgreens</h3>
        </div>
        <div className={style.web_desc}>
          <p className={style.small}>
            We were tasked with creating a website and a branding identity for
            this local company. The goal was to introduce and explain the
            benefits of microgreens and increase sales as a result.
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
          The solution became a vibrant branding identity and fully responsive
          website that educated and inspired potential customers with great
          recipes and research on the benefits of microgreens.
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

export default Post;
