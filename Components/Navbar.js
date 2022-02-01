import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo-up.svg";
import Logo2 from "../public/logo-dark.svg";
import styles from "../styles/Navigation.module.scss";
import style from "../styles/Home.module.scss";

export function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <a>
            <span className={styles.logo1}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
          <a>
            <span className={styles.logo2}>
              <Image src={Logo2} alt="Logo" />
            </span>
          </a>
        </div>

        <ul className={styles.hiddenMenu}>
          <li>
            <Link href={"/portfolio/work"}>
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <div className={styles.btnMenu}>
          <span className={styles.line1}></span>
          <span className={styles.line2}></span>
          <span className={styles.line3}></span>
        </div>

        <div className={styles.menu}>
          <Link href={"/portfolio/work"}>
            <a>Work</a>
          </Link>

          <Link href={"/about"}>
            <a>About</a>
          </Link>

          <Link href={"/posts/blog"}>
            <a>Blog</a>
          </Link>

          <button className={style.dark}>
            <Link href={"/contact"}>
              <a style={{ paddingRight: "0px" }}>Get Started </a>
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
