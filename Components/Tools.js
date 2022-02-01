import style from "../styles/Tools.module.scss";

export default function Tools() {
  return (
    <>
      <div className={style.toolall}>
        <h2
          style={{
            marginBottom: "0px",
            paddingTop: "80px",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        >
          Tools and features to elevate your brand
        </h2>
        <p style={{ textAlign: "center", marginBottom: "50px" }}>
          Everything you need to set you up for success.
        </p>
        <div className={style.tools}>
          <div className={style.tool}>
            <h4>Custom Website Design</h4>
            <p>
              Websites designed specifically for your business and built from
              scratch.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Custom Website Design</h4>
            <p>
              Websites designed specifically for your business and built from
              scratch.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Custom Website Design</h4>
            <p>
              Websites designed specifically for your business and built from
              scratch.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Custom Website Design</h4>
            <p>
              Websites designed specifically for your business and built from
              scratch.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Custom Website Design</h4>
            <p>
              Websites designed specifically for your business and built from
              scratch.
            </p>
          </div>
          <div className={style.tool}>
            <h4>Custom Website Design</h4>
            <p>
              Websites designed specifically for your business and built from
              scratch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
