import Link from "next/link";
import Image from "next/image";
import Microgreen from "../public/microgreen.png";
import style from "../styles/Work.module.scss";
import styles from "../styles/Home.module.scss";

export function Maximus() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"/portfolio/1"}>
            <a>
              <p>MAXIMUS MICROGREENS</p>
              <h3>
                Helping a brand <br /> promote healthy living.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.imagework}>
          <Link href={"/portfolio/1"}>
            <a>
              <Image src={Microgreen} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
