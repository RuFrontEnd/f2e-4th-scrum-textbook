import styles from "./styles.module.scss";
import Logo from "assets/icon/svg/title-2.svg";
import type * as Types from "types";
import * as Components from "components";
import * as Layouts from "layouts";

const ProgressBG = (props: Types.Layouts.ProgressBg.Props) => {
  return (
    <>
      <Layouts.BG openUp={props.openUp}>
        <div className="d-flex py-9">
          <img src={Logo} className={`${styles.logo} me-12`} width={340} />
          <div className="w-100">
            <p className="mb-3">新手進度</p>
            <Components.ProgressBar completed={props.completed} />
          </div>
        </div>
        <div className={`${props.openUp && styles.openUp}`}>
          {props.children}
        </div>
      </Layouts.BG>
    </>
  );
};

export default ProgressBG;
