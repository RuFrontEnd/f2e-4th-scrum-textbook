import styles from "./styles.module.scss";
import * as Components from "components";
import * as variables from "variables";
import type * as Types from "types";
import { createPortal } from "react-dom";

function Modal(props: Types.Components.Modal.Props) {
  return (
    <>
      {createPortal(
        <div
          className={`position-fixed top-0 start-0 vw-100 vh-100`}
          // style={{ width: props.width }}
          // onClick={props.onClick}
        >
          <div className={`position-relative w-100 h-100`}>
            <div
              className={
                "position-absolute top-0 start-0 w-100 h-100 bg-white z-index-down opacity-80"
              }
            />
            <div
              className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={`${styles.circle} rounded-circle bg-orange-1`} />
              <Components.Button
                color={variables.colors.green}
                width={"100%"}
                onClick={() => {}}
                disabled={true}
              >
                test
              </Components.Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
