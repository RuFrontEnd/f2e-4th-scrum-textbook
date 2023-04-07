import styles from "./styles.module.scss";
import * as Types from "types";

function DialogBox(props: Types.Components.DialogBox.Props) {
  return (
    <>
      <div
        className={styles.container}
        style={{
          height: "150px", // 之後改 auto
          width: props.width,
          padding: props.padding,
        }}
      >
        <div
          className={styles.char}
          style={{
            backgroundColor: props.color,
          }}
        >
          {props.character}
        </div>
        {props.children}
      </div>
    </>
  );
}

export default DialogBox;
