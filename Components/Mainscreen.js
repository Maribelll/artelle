import Image from "next/image";
import style from "../styles/Home.module.scss";
import mainstyle from "../styles/Mainscreen.module.scss";
import Imagemain from "../public/illustartion.png";

export function Mainscreen() {
  return (
    <>
      <section className={mainstyle.sectionAll}>
        <div className={mainstyle.blockmain}>
          <div className={mainstyle.textmain}>
            <h1 className={mainstyle.header1}>
              Crafting websites
              <br /> that sell.
            </h1>
            <p>
              We are a creative studio focused <br /> on one thing—your website.
            </p>
            <button className={style.dark}>Get Started</button>
          </div>
          <div className={mainstyle.imagemain}>
            <Image src={Imagemain} alt="crafting websites" />
          </div>
        </div>
      </section>
    </>
  );
}
