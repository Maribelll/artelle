import Head from "next/head";
import Image from "next/image";
import Img1 from "../public/hand-image.jpg";
import Img2 from "../public/about.svg";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/navbar";
import style from "../styles/About.module.scss";

export default function About() {
  return (
    <>
      <Head></Head>

      <div style={{ backgroundColor: "rgba(247, 247, 250, 1)" }}>
        <Navbar />
      </div>
      <div className={style.aboutmain}>
        <div className={style.container1}>
          <div className={style.who}>
            <h2>
              We are a studio of creatives, working hard, growing and evolving
              right alongside the companies we work with.
            </h2>
          </div>
          <div className={style.aboutimg}>
            <Image src={Img1} alt="about us" />
          </div>
        </div>
      </div>
      <div className={style.nameabout}>
        <h2>It’s simple.</h2>
      </div>
      <div className={style.principles}>
        <div className={style.principimg}>
          <Image src={Img2} alt="about us" />
        </div>
        <div className={style.principtext}>
          <div className={style.blocktext}>
            <h3>1 &mdash;Problem solvers</h3>
            <p className="small">
              We approach every project as a unique set of problems to be
              solved. That’s why every website we craft is unique and fits the
              specific vision and plan of each brand.
            </p>
          </div>
          <div className={style.blocktext}>
            <h3>2 &mdash;Practicing good</h3>
            <p>
              Call it our golden rule. We do good work that helps others. Then
              our clients get out there and make the world better for all of us.
            </p>
          </div>
          <div className={style.blocktext}>
            <h3>3 &mdash;Proud, in a good way</h3>
            <p>
              We love what we do, and we cherish the journey that got us to
              where we are today. We are proud of our work and and want to do
              work that will continue making our clients and us - happy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
