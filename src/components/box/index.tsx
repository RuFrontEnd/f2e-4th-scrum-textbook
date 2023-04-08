import styles from "./styles.module.scss";
import * as Types from "types";

function Box(props: Types.Components.Box.Props) {
  return (
    <>
      <div
        className={`${styles.container} ${props.className} box-border bg-white position-relative`}
        style={{
          width: props.width,
          padding: props.padding,
        }}
      >
        <div
          className={`${styles.char} position-absolute px-4 py-3 top-0 start-0`}
          style={{
            backgroundColor: props.tagColor,
          }}
        >
          {props.character}
        </div>
        {props.children}
      </div>
    </>
  );
}

export default Box;
