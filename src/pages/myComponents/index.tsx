import * as variables from "variables";
import * as Components from "components";

const myComponents = () => {
  return (
    <>
      <Components.Button
        color={variables.colors.green}
        width={"350px"}
        onClick={() => {}}
        disabled={true}
      >
        進入
      </Components.Button>
    </>
  );
};

export default myComponents;
