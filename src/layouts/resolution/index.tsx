import styles from "./styles.module.scss";
import type * as Types from "types";

const Resolution = (props: Types.Layouts.Resolution.Props) => {
  return <div className={styles.resolution}>{props.children}</div>;
};

export default Resolution;
