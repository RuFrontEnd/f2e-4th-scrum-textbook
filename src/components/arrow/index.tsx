import styles from "./styles.module.scss";
import * as Types from "types";

function Arrow(props: Types.Components.Arrow.Props) {
  return (
    <div
      style={{ height: props.height }}
      className={`d-inline-flex flex-column justify-content-between`}
    >
      <div className={`d-inline-block ${styles["top-arrow"]}`} />
      <div className={`d-inline-block h-100 ${styles["line"]}`} />
      <div className={`d-inline-block ${styles["down-arrow"]}`} />
    </div>
  );
}

export default Arrow;
