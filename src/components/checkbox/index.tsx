import type * as Types from "types";

function Checkbox(props: Types.Components.Checkbox.Props) {
  return (
    <div
      className={`d-inline-flex justify-content-center align-items-center border border-1 ${
        props.checked ? "border-color-orange-3" : "border-color-green-4"
      } rounded-circle cursor-pointer`}
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      {props.checked ? (
        <div
          className={`d-inline-block rounded-circle cursor-pointer bg-orange-3`}
          style={{
            width: `${(props.width * 3) / 5}px`,
            height: `${(props.height * 3) / 5}px`,
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Checkbox;
