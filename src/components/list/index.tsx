import styles from "./styles.module.scss";
import listClip from "assets/picture/png/list_clip.png";
import { ReactComponent as PawPrint } from "assets/icon/svg/paw_print.svg";
import * as Types from "types";

function List(props: Types.Components.List.Props) {
  return (
    <div className={`${props.className} position-relative mt-10`}>
      <img
        src={listClip}
        className={`position-absolute top-0 start-50 translate-middle`}
      />
      <div
        className={`bg-white rounded-5 overflow-hidden border border-width-20 border-color-green-3 px-6 py-10 d-flex align-items-center flex-column ${styles.container}`}
      >
        <p className="fw-medium fs-24px text-green-4 d-flex align-items-center mb-1">
          {props.title}
          <PawPrint width={20} height={20} />
        </p>
        <p className="fw-medium fs-16px text-green-4">{props.viceTitle}</p>
        {props.children}
      </div>
    </div>
  );
}

export default List;
