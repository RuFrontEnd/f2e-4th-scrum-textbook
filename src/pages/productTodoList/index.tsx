import styles from "./styles.module.scss";
import cat_po from "assets/picture/png/cat-po.png";
import cat_box from "assets/picture/png/cat-box.png";
import plant2 from "assets/picture/png/plant-2.png";
import catAll from "assets/picture/png/cat-all.png";
import * as Layouts from "layouts";
import * as Components from "components";
import * as variables from "variables";

const ProductTodoList = () => {
  return (
    <Layouts.ProgressBG openUp>
      <div
        className={`position-relative h-100 d-flex justify-content-center ${styles.content}`}
      >
        <div
          className={`h-100 d-flex flex-column align-items-center ms-50 z-index-100 ${styles.info}`}
        >
          <Components.Box
            className={`w-100 mb-8 ${styles.caption1}`}
            padding={"50px 60px 40px 60px"}
            tagColor={variables.colors.orange2}
            character={"PO："}
          >
            <p className="m-0 mb-3_5 fs-24px fw-medium">我是喵喵村的 PO。</p>
            <p className="m-0 fs-20px">
              PO 也就是產品負責人（Product
              Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
              Backlog）唷！
            </p>
          </Components.Box>
          <Components.Box
            className={`w-100 mb-8 ${styles.caption2}`}
            padding={"50px 60px 40px 60px"}
          >
            <p className="m-0 fs-20px">
              剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
              <br />
              既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
            </p>
          </Components.Box>
          <Components.Button
            className={`${styles.button}`}
            onClick={() => {}}
            width="350px"
          >
            準備好了!
          </Components.Button>
        </div>
        <img
          src={cat_po}
          width={363}
          height={537}
          className={`position-absolute object-fit-contain z-index-base ${styles["cat-po"]}`}
        />
        <img
          src={cat_box}
          width={870}
          height={341}
          className={`position-absolute object-fit-contain z-index-10 ${styles["cat-box"]}`}
        />
        <img
          src={plant2}
          className={`position-absolute object-fit-contain z-index-base ${styles.plant2}`}
          width={198}
          height={331}
        />
      </div>
    </Layouts.ProgressBG>
  );
};

export default ProductTodoList;
