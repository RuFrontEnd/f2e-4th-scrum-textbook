import type * as Types from "types";

function Plate(props: Types.Components.Plate.Props) {
  return (
    <div
      className={`position-relative d-inline-block bg-white border border-1 border-color-gray-1 rounded px-6 py-3`}
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
}

export default Plate;
