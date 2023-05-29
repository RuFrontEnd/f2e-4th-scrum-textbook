import styles from "./styles.module.scss";
import bg from "assets/picture/jpg/bg.jpg";
import type * as Types from "types";

const BG = (props: Types.Layouts.BG.Props) => {
  return (
    <>
      <div className={`position-relative h-100`}>
        <img
          src={bg}
          width={1920}
          height={1080}
          className={`position-absolute top-0 start-0 z-index-down ${styles.img}`}
        />
        <div className={`${props.openUp && "h-100"} px-14`}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default BG;
