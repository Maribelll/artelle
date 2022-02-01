import Head from "next/head";
import Link from "next/link";
import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/navbar";
import posts from "../../db.json";
import style from "../../styles/Workexample.module.scss";
import Image from "next/image";
import Photo from "../../public/NT-1.jpg";
import Photo2 from "../../public/NT-2.jpg";
import Photo3 from "../../public/NT-3.jpg";
import Photo4 from "../../public/NT-4.jpg";
import Photo5 from "../../public/NT-5.jpg";
import Action from "../../Components/Action";

const Post = (props) => {
  return (
    <>
      <Head />
      <Navbar />
      <div className={style.postsall}>
        <div className={style.postscontainer}>
          <div className={style.blog}>
            <p className={style.textblue}> {props.post.title}</p>
            <h1>{props.post.name}</h1>
          </div>
          <Image src={Photo} alt="" />
          <p className={style.text}>{props.post.content}</p>

          <div className={style.blog}>
            <h2>The client</h2>
            <p>{props.post.client}</p>
            <h2>The challenge</h2>
            <p>{props.post.challenge}</p>
            <h2>The solution</h2>
            <p>{props.post.solution}</p>
          </div>
          <Image className={style.photo} src={Photo2} alt="" />
          <div className={style.blog}>
            <h2>New website</h2>
            <p>{props.post.website}</p>
          </div>
          <div className={style.photo}>
            <Image src={Photo3} alt="" />
          </div>
          <div className={style.photo}>
            <Image src={Photo4} alt="" />
          </div>
          <div className={style.photo}>
            <Image src={Photo5} alt="" />
          </div>

          <Action />
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
