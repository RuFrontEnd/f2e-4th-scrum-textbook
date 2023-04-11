import styles from "./styles.module.scss";
import Logo from "assets/icon/svg/title-2.svg";
import type * as Types from "types";
import * as Components from "components";

const BG = (props: Types.Layouts.BG.Props) => {
  return (
    <>
      <div className={styles.bg}>
        <div className="d-flex align-items-center px-17 py-10">
          <img src={Logo} className={`${styles.logo} me-12`} width={305} />
          <div className="w-100">
            <p className="mb-3">新手進度</p>
            <Components.ProgressBar completed={20} />
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default BG;
