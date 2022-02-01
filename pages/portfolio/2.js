import Head from "next/head";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import style from "../../styles/Portfolio.module.scss";
import Image from "next/image";
import img1 from "../../public/SP_desktop1.jpg";
import img2 from "../../public/SP_desktop2.jpg";
import img3 from "../../public/SP_desktop3.jpg";
import img4 from "../../public/SP_mobile.jpg";

import { useRouter } from "next/router";

const Post2 = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head></Head>
      <Navbar />
      <div className={style.work1_1}>
        <div className={style.name}>
          <h3>Shuda Properties</h3>
        </div>
        <div className={style.web_desc}>
          <p className={style.small}>
            How do you make a property stand out from a sea of listings? Well,
            with a custom website that skillfully showcases the property for
            potential renters and makes it easy to take care of paperwork and
            payments all in one place.
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
          The website elevated the property from similar listings and made it
          easy for the business owner to add additional properties as he
          acquired more.
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

export default Post2;
