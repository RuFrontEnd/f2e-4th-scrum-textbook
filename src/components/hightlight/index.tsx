import styles from "./styles.module.scss";
import * as Types from "types";

function Hightlight(props: Types.Components.Highlight.Props) {
  return (
    <span className={`${props.className} ${styles["word"]}`}>
      {props.children}
    </span>
  );
}

export default Hightlight;
