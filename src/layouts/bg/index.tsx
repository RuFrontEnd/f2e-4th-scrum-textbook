import styles from "./styles.module.scss";
import Logo from "assets/icon/svg/title-2.svg";
import bg from "assets/picture/jpg/bg.jpg";
import type * as Types from "types";
import * as Components from "components";

const BG = (props: Types.Layouts.BG.Props) => {
  return (
    <>
      <div className={`position-relative ${styles.bg}`}>
        <img
          src={bg}
          width={1366}
          height={768}
          className={`position-absolute top-0 start-0 z-index-down ${styles.img}`}
        />
        <div className="px-14">
          {/* <div className="d-flex">
            <img src={Logo} className={`${styles.logo} me-12`} width={340} />
            <div className="w-100">
              <p className="mb-3">新手進度</p>
              <Components.ProgressBar completed={20} />
            </div>
          </div> */}
          {props.children}
        </div>
      </div>
    </>
  );
};

export default BG;
