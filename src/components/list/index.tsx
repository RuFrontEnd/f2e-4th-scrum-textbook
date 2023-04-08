import styles from "./styles.module.scss";
import * as Types from "types";

function List(props: Types.Components.List.Props) {
  return (
    <div
      className={`rounded-pill overflow-hidden border border-width-20 border-color-green-3 p-12 d-flex align-items-center flex-column ${styles.container}`}
    >
      <p>產品待辦清單</p>
      <p>Product Backlog</p>
      {/* <div
        style={{ width: `${props.completed}%` }}
        className="bg-orange-2 h-100 rounded-pill"
      /> */}
    </div>
  );
}

export default List;
