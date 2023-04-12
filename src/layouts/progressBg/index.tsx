import styles from "./styles.module.scss";
import Logo from "assets/icon/svg/title-2.svg";
import type * as Types from "types";
import * as Components from "components";
import * as Layouts from "layouts";

const ProgressBG = (props: Types.Layouts.BG.Props) => {
  return (
    <>
      <Layouts.BG>
        <div className="d-flex py-9">
          <img src={Logo} className={`${styles.logo} me-12`} width={340} />
          <div className="w-100">
            <p className="mb-3">新手進度</p>
            <Components.ProgressBar completed={20} />
          </div>
        </div>
        {props.children}
      </Layouts.BG>
    </>
  );
};

export default ProgressBG;
