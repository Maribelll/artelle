import style from "../styles/Answers.module.scss";
import Image from "next/image";
import Answerclose from "../public/icons/answerclose.svg";
import Answeropen from "../public/icons/answeropen.svg";

export function Answers() {
  return (
    <>
      <div className={style.answersall}>
        <h2 style={{ margin: "0 0 10px 0", paddingTop: "80px" }}>
          Interested in working together?
        </h2>
        <p style={{ textAlign: "center", paddingBottom: "50px" }}>
          Learn more about our process and reach out <br /> if you think we’d be
          a good fit.
        </p>
        <div className={style.horizontalclick}>
          <input type="radio" name="vkl" id="vkl1" />
          <label htmlFor="vkl1">How do we get started?</label>
          <div style={{ maxWidth: "85%" }}>
            Edit your own website when you need to. Contact us with other
            changes. Edit your own website when you need to. Contact us with
            other changes.
          </div>
          <input type="radio" name="vkl" id="vkl2" />
          <label htmlFor="vkl2">How much do projects usually cost?</label>
          <div style={{ maxWidth: "85%" }}>
            Edit your own website when you need to. Contact us with other
            changes. Edit your own website when you need to. Contact us with
            other changes.
          </div>
          <input type="radio" name="vkl" id="vkl3" />
          <label htmlFor="vkl3">What sectors do you specialise in?</label>
          <div style={{ maxWidth: "85%" }}>
            Edit your own website when you need to. Contact us with other
            changes. Edit your own website when you need to. Contact us with
            other changes.
          </div>
          <input type="radio" name="vkl" id="vkl4" />
          <label htmlFor="vkl4">What sectors do you specialise in?</label>
          <div style={{ maxWidth: "85%" }}>
            Edit your own website when you need to. Contact us with other
            changes. Edit your own website when you need to. Contact us with
            other changes.
          </div>
          <input type="radio" name="vkl" id="vkl5" />
          <label htmlFor="vkl5">What sectors do you specialise in?</label>
          <div style={{ maxWidth: "85%" }}>
            Edit your own website when you need to. Contact us with other
            changes. Edit your own website when you need to. Contact us with
            other changes.
          </div>
          <input type="radio" name="vkl" id="vkl6" />
          <label htmlFor="vkl6">What sectors do you specialise in?</label>
          <div style={{ maxWidth: "85%" }}>
            Edit your own website when you need to. Contact us with other
            changes. Edit your own website when you need to. Contact us with
            other changes.
          </div>
        </div>
      </div>
    </>
  );
}
