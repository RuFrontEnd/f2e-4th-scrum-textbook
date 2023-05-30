import styles from "./styles.module.scss";
import * as Types from "types";

function Arrow(props: Types.Components.Arrow.Props) {
  return (
    <>
      {props.horizontal ? (
        <>
          <div
            style={{ width: props.distance }}
            className={`d-inline-flex justify-content-center align-items-center ${props.className}`}
          >
            {props?.left?.text && <p className="mb-0">{props.topText}</p>}
            {props?.left?.arrow && (
              <div className={`d-inline-block ${styles["left-arrow"]}`} />
            )}
            <div
              className={`d-inline-block w-100 ${styles["vertical-line"]}`}
            />
            {props?.right?.arrow && (
              <div className={`d-inline-block ${styles["right-arrow"]}`} />
            )}
            {props?.right?.text && <p className="mb-0">{props.bottomText}</p>}
          </div>
        </>
      ) : (
        <>
          <div
            style={{ height: props.distance }}
            className={`d-inline-flex flex-column justify-content-between ${props.className}`}
          >
            <p className="mb-0">{props.topText}</p>
            <div className={`d-inline-block ${styles["top-arrow"]}`} />
            <div
              className={`d-inline-block h-100 ${styles["horizental-line"]}`}
            />
            <div className={`d-inline-block ${styles["bottom-arrow"]}`} />
            <p className="mb-0">{props.bottomText}</p>
          </div>
        </>
      )}
    </>
  );
}

export default Arrow;
