import styles from "./styles.module.scss";
import listClip from "assets/picture/png/list_clip.png";
import { ReactComponent as PawPrint } from "assets/icon/svg/paw_print.svg";
import * as Types from "types";

function List(props: Types.Components.List.Props) {
  return (
    <div className="position-relative">
      <img
        src={listClip}
        className={`position-absolute top-0 start-50 translate-middle`}
      />
      <div
        className={`rounded-pill overflow-hidden border border-width-20 border-color-green-3 p-12 d-flex align-items-center flex-column ${styles.container}`}
      >
        <p className="ff-noto-TC fw-medium fs-24px text-green-4 d-flex align-items-center mb-1">
          產品待辦清單
          <PawPrint width={20} height={20} />
        </p>
        <p className="ff-roboto fs-16px text-green-4">Product Backlog</p>
  
      </div>
    </div>
  );
}

export default List;
