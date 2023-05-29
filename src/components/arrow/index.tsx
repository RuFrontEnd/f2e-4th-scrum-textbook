import styles from "./styles.module.scss";
import * as Types from "types";

function Arrow(props: Types.Components.Arrow.Props) {
  return (
    <div
      style={{ height: props.height }}
      className={`d-inline-flex flex-column justify-content-between ${props.className}`}
    >
      <p className="mb-0">{props.topText}</p>
      <div className={`d-inline-block ${styles["top-arrow"]}`} />
      <div className={`d-inline-block h-100 ${styles["line"]}`} />
      <div className={`d-inline-block ${styles["bottom-arrow"]}`} />
      <p className="mb-0">{props.bottomText}</p>
    </div>
  );
}

export default Arrow;
