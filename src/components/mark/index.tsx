import type * as Types from "types";

function Mark(props: Types.Components.Mark.Props) {
  return (
    <div
      className={
        "ff-roboto d-inline-flex justify-content-center align-items-center rounded-circle text-white"
      }
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        backgroundColor: `${props.color}`,
      }}
    >
      {props.number}
    </div>
  );
}

export default Mark;
