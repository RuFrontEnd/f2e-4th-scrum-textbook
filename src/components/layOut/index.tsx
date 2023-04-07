import styles from "./styles.module.scss";
import BG from "assets/picture/jpg/bg.jpg";
import Logo from "assets/icon/svg/title-2.svg";
import type * as Types from "types";
import * as Components from "components";

const LayOut = (props: Types.Components.LayOut.Props) => {
  return (
    <>
      <div className={styles.container}>
        <img src={BG} className={styles.bg} />
        <div className={styles.navbar}>
          <img src={Logo} className={styles.logo} />
          <Components.ProgressBar completed={155} />
        </div>
        {props.children}
      </div>
    </>
  );
};

export default LayOut;
