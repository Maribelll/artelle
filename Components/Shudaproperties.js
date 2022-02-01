import Link from "next/link";
import Image from "next/image";
import Shudaprop from "../public/shudaprop.png";
import style from "../styles/Work.module.scss";
import styles from "../styles/Home.module.scss";

export function Shudaproperties() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"/portfolio/2"}>
            <a>
              <p>SHUDA PROPERTIES</p>
              <h3>
                Crafting an online
                <br />
                presence for a small
                <br /> town rental venture.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.imagework}>
          <Link href={"/portfolio/2"}>
            <a>
              <Image src={Shudaprop} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
