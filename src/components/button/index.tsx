import styles from "./styles.module.scss";
import type * as Types from "types";

function Button(props: Types.Components.Button.Props) {
  return (
    <button
      className={`ff-roboto fw-bold ${styles.button} ${props.className} ${
        props.disabled && styles.disabled
      }`}
      style={{ width: props.width }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
