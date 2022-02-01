import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import posts from "../../db.json";
import style from "../../styles/Post.module.scss";
import style2 from "../../styles/Blog.module.scss";
import Image from "next/image";
import Photo from "../../public/photo.png";
import Postimg from "../../public/post/Postimg.png";
import { Blog } from "../../Components/Blog";

const Post = (props) => {
  return (
    <>
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.headerauthor}>
            <h1>{props.post.title}</h1>
            <div className={style.photo}>
              <div className={style.photoimg}>
                <Image src={Photo} alt="" />
              </div>
              <div className={style.photoname}>
                <p>
                  <span style={{ fontWeight: "600" }}>
                    {props.post.author}
                    <br />
                  </span>
                  {props.post.data}
                </p>
              </div>
            </div>
          </div>
          <Image src={Postimg} alt="" />
          <p className={style.text}>{props.post.content}</p>
        </div>
        <div className={style.blog}>
          <Blog />
        </div>
      </div>

      <Footer />
    </>
  );
};

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id],
  };
};

export default Post;
