import styles from "./styles.module.scss";
import type * as Types from "types";

function Tray(props: Types.Components.Tray.Props) {
  return (
    <div
      className={`${props.className} position-relative d-inline-block`}
      style={{ width: props.width, height: props.height }}
    >
      <svg
        className={`position-absolute top-0 start-0 w-100 h-100`}
      >
        <rect
          className={styles.rect}
          stroke-dasharray="10,10"
          stroke-opacity="1"
          x="2"
          y="2"
          rx="6"
          ry="6"
        ></rect>
      </svg>
    </div>
  );
}

export default Tray;
