import styles from "./styles.module.scss";
import * as Types from "types";

function ProgressBar(props: Types.Components.ProgressBar.Props) {
  return (
    <div className={`rounded-pill overflow-hidden ${styles.container}`}>
      <div
        style={{ width: `${props.completed}%` }}
        className="bg-orange-2 h-100p rounded-pill"
      />
    </div>
  );
}

export default ProgressBar;
