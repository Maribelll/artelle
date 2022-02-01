import style from "../styles/Blog.module.scss";
import Image from "next/image";
import Link from "next/link";
import Post1 from "../public/Rectangle 115.png";

export function Blog() {
  return (
    <>
      <div className={style.sectionblog}>
        <div className={style.containerblog}>
          <h2>Latest stories, insights and ideas</h2>
          <p style={{ textAlign: "center" }} className="small">
            Read our blog.
          </p>
          <div className={style.posts}>
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
              <div className={style.more}>Read more</div>
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
    </>
  );
}
