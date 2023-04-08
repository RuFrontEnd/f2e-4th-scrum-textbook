import * as variables from "variables";
import * as Components from "components";

const myComponents = () => {
  return (
    <>
      Button
      <br />
      <Components.Button
        color={variables.colors.green}
        width={"350px"}
        onClick={() => {}}
        disabled={true}
      >
        進入
      </Components.Button>
      <div style={{ padding: "20px 0px" }} />
      Box
      <div className="w-100 bg-gray-2">
        <div className="p-10">
          <Components.Box
            width={"100%"}
            padding={"30px 70px"}
            tagColor={variables.colors.green}
            character={"PO："}
          >
            哈囉~歡迎進入「SCRUM 新手村」
            <br />
            在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
            請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～
          </Components.Box>
        </div>
      </div>
    </>
  );
};

export default myComponents;
