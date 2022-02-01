import Link from "next/link";
import Image from "next/image";
import Nomadtechy from "../public/nomad.png";
import style from "../styles/Work.module.scss";
import styles from "../styles/Home.module.scss";

export function Nomad() {
  return (
    <>
      <div className={style.work}>
        <div className={style.textwork}>
          <Link href={"../portfolio/nomad"}>
            <a>
              <p>NOMAD TECHY</p>
              <h3>
                Building a website that
                <br /> attracts IT clients.
              </h3>
              <button className={styles.dark}>See More</button>
            </a>
          </Link>
        </div>
        <div className={style.imagework}>
          <Link href={"../portfolio/nomad"}>
            <a>
              <Image src={Nomadtechy} alt="Our work" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
