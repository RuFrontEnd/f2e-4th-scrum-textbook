import styles from "./styles.module.scss";
import type * as Types from "types";

function Button(props: Types.Components.Button.Props) {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      style={{ width: props.width, backgroundColor: props.color }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
