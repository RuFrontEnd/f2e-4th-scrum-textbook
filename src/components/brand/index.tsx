import styles from "./styles.module.scss";
import type * as Types from "types";

function Brand(props: Types.Components.Brand.Props) {
  return (
    <div
      className={`fs-20px fw-bold d-flex justify-content-center align-items-center ${
        styles.brand
      } ${props.className} ${props.disabled && styles.disabled}`}
      style={{ width: props.width }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Brand;
