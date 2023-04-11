import type * as Types from "types";
import { createPortal } from "react-dom";

function Modal(props: Types.Components.Modal.Props) {
  return (
    <>
      {props.visible ? (
        <>
          {createPortal(
            <div className={`position-fixed top-0 start-0 vw-100 vh-100`}>
              <div className={`position-relative w-100 h-100`}>
                <div
                  className={
                    "position-absolute top-0 start-0 w-100 h-100 bg-white z-index-down opacity-80"
                  }
                />
                <div
                  className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center`}
                >
                  {props.children}
                </div>
              </div>
            </div>,
            document.body
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
