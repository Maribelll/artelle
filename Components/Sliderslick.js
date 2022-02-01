import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/Slider.module.scss";
import Image from "next/image";
import Slide1 from "../public/slider/NT_desktop2.jpg";
import Link from "next/link";

var settings = {
  infinite: true,

  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Sliderslick() {
  return (
    <div>
      <h2 style={{ margin: "0px auto", textAlign: "center", width: "85%" }}>
        A few projects we worked on
      </h2>
      <p
        style={{
          fontSize: "14px",
          textDecoration: "underline",
          paddingBottom: "70px",
          textAlign: "center",
        }}
      >
        <Link href={"/work"}>See more</Link>
      </p>

      <Slider {...settings}>
        <div>
          <Image className={style.slide} src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
        <div>
          <Image src={Slide1} alt="Logo" />
        </div>
      </Slider>
    </div>
  );
}
