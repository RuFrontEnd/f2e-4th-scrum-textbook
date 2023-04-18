import styles from "./styles.module.scss";
import * as Types from "types";

function ProgressBar(props: Types.Components.ProgressBar.Props) {
  return (
    <div className={`bg-white rounded-pill overflow-hidden w-100 ${styles.container}`}>
      <div
        style={{ width: `${props.completed}%` }}
        className="bg-orange-2 h-100 rounded-pill"
      />
    </div>
  );
}

export default ProgressBar;
