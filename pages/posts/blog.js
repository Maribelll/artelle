import Head from "next/head";
import { Navbar } from "../../Components/navbar";
import { Footer } from "../../Components/Footer";
import style from "../../styles/Blogpage.module.scss";
import Link from "next/link";
import Image from "next/image";
import Post1 from "../../public/post.png";

export default function Blog() {
  return (
    <>
      <div>
        <Head />
        <Navbar />
        <div className={style.sectionblog}>
          <div className={style.containerblog}>
            <h2>Latest stories, insights and ideas</h2>

            <div className={style.posts}>
              <div className={style.post}>
                <div className={style.blogimg}>
                  <a>
                    <Image src={Post1} alt=""></Image>
                  </a>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <span className={style.more}>Read more</span>
              </div>
              <div className={style.post}>
                <div className={style.blogimg}>
                  <a>
                    <Image src={Post1} alt=""></Image>
                  </a>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <div className={style.more}>Read more</div>
              </div>
              <div className={style.post}>
                <div className={style.blogimg}>
                  <Link href={"../posts/test"}>
                    <a>
                      <Image src={Post1} alt=""></Image>
                    </a>
                  </Link>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <span className={style.more}>Read more</span>
              </div>
              <div className={style.post}>
                <div className={style.blogimg}>
                  <Link href={"/posts/"}>
                    <a>
                      <Image src={Post1} alt=""></Image>
                    </a>
                  </Link>
                </div>
                <p className={style.postname}>
                  What is a website strategy and why you need it
                </p>
                <span className={style.more}>Read more</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
