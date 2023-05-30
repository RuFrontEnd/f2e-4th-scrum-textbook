import { useState } from "react";
import styles from "./styles.module.scss";
import cat_all from "assets/picture/png/cat-all.png";
import plant1 from "assets/picture/png/plant-1.png";
import plant2 from "assets/picture/png/plant-2.png";
import catAll from "assets/picture/png/cat-all.png";
import cat_box from "assets/picture/png/cat-box.png";
import cat_po from "assets/picture/png/cat-po.png";
import * as Layouts from "layouts";
import * as Components from "components";
import * as variables from "variables";

const Introduce = () => {
  const [isReady, setIsReady] = useState(false);

  return (
    <Layouts.ProgressBG completed={10}>
      {isReady ? (
        <>
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

          <img
            src={cat_po}
            width={363}
            height={537}
            className={`position-absolute object-fit-contain z-index-base ${styles["cat-po"]}`}
          />
          <img
            src={plant2}
            className={`position-absolute object-fit-contain z-index-base ${styles.plant2}`}
            width={198}
            height={331}
          />
          <img
            width={1338}
            height={510}
            className={`object-fit-contain w-100 h-100`}
            src={cat_box}
          />
        </>
      ) : (
        <>
          <div
            className={`d-flex flex-column align-items-center ${styles.content}`}
          >
            <div className="w-100 h-100 d-flex align-items-center justify-content-between">
              <div className={styles["plant1-container"]}>
                <img
                  src={plant1}
                  className={`${styles.plant1} w-100 h-100`}
                  width={233}
                  height={457}
                />
              </div>
              <div className={`mx-10 ${styles["cat_all-container"]}`}>
                <div
                  className={`position-relative mx-auto mb-10 ${styles["box-container"]}`}
                >
                  <Components.Box
                    padding={"70px 70px 80px 70px"}
                    tagColor={variables.colors.green}
                  >
                    <p className="m-0 mb-3_5 fs-24px fw-medium">
                      哈囉~歡迎進入「SCRUM 新手村」
                    </p>
                    <p className="m-0 fs-20px">
                      在正式加入專案開發之前，需要請你先了解 Scrum
                      的流程與精神！
                      <br />
                      請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～
                    </p>
                  </Components.Box>
                  <Components.Button
                    className={`position-absolute ${styles.button}`}
                    onClick={() => {}}
                    width="350px"
                  >
                    接受挑戰
                  </Components.Button>
                </div>
                <img
                  width={1338}
                  height={510}
                  className={`object-fit-contain ${styles["cat-all"]} w-100 h-100`}
                  src={cat_all}
                />
              </div>
              <div className={`align-self-right ${styles["plant2-container"]}`}>
                <img
                  src={plant2}
                  className={`${styles.plant2} w-100 h-100`}
                  width={198}
                  height={331}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Layouts.ProgressBG>
  );
};

export default Introduce;
