import { useState } from "react";
import styles from "./styles.module.scss";
import cat_po from "assets/picture/png/cat-po.png";
import cat_box from "assets/picture/png/cat-box.png";
import plant2 from "assets/picture/png/plant-2.png";
import can from "assets/picture/png/can.png";
import * as Layouts from "layouts";
import * as Components from "components";
import * as variables from "variables";

const ProductTodoList = () => {
  const [isReady, setIsReady] = useState(true),
    [finished, setFinished] = useState(false);

  return (
    <Layouts.ProgressBG openUp>
      <div
        className={`position-relative h-100 d-flex justify-content-center ${styles.content}`}
      >
        <div
          className={`h-100 d-flex flex-column align-items-center z-index-100 ${styles.info}`}
        >
          <Components.Box
            className={`w-100 mb-8 ${styles.caption1}`}
            padding={"50px 60px 40px 60px"}
            tagColor={variables.colors.orange2}
            character={"PO："}
          >
            <p className="m-0 mb-3_5 fs-24px fw-medium">換你試看看吧!</p>
            <p className="m-0 fs-20px">
              請把需求放到產品待辦清單，並調整待辦的優先度順序。
              <br />
              我們喵喵也推薦使用 來做任務的管理呢！
            </p>
          </Components.Box>
          <div className="d-flex">
            <div>
              {isReady ? (
                <>
                  <Components.List
                    title="產品待辦清單"
                    viceTitle="Product Backlog"
                    className="mt-5"
                  >
                    <div className="d-flex">
                      <Components.Arrow
                        className="me-5"
                        height="auto"
                        topText={"高"}
                        bottomText={"低"}
                      />
                      <div className="mt-5 mb-5 d-flex flex-column">
                        <Components.Tray
                          className="mb-5"
                          width="350px"
                          height="90px"
                        />
                        <Components.Tray
                          className="mb-5"
                          width="350px"
                          height="90px"
                        />
                        <Components.Tray
                          className="mb-5"
                          width="350px"
                          height="90px"
                        />
                        <Components.Tray width="350px" height="90px" />
                      </div>
                    </div>
                  </Components.List>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
            <div
              className={`d-flex flex-column align-items-center justify-content-between mx-16 ${styles.plates}`}
            >
              {finished ? (
                <>
                  請拖拉至清單中並調整順序
                  <Components.Plate>
                    後台職缺管理功能（資訊上架、下架、顯示應徵者資料）
                  </Components.Plate>
                  <Components.Plate>前台職缺列表、應徵</Components.Plate>
                  <Components.Plate>應徵者的線上履歷編輯器</Components.Plate>
                  <Components.Plate>
                    會員系統（登入、註冊、權限管理）
                  </Components.Plate>
                </>
              ) : (
                <>
                  <img src={can} />
                  <Components.Brand
                    color="white"
                    className={`${styles.button}`}
                    onClick={() => {}}
                    width="350px"
                  >
                    恭喜你完成了! 獲得罐罐一枚!
                  </Components.Brand>
                </>
              )}
              <Components.Button
                className={`${styles.button}`}
                onClick={() => {}}
                width="350px"
              >
                我完成了!
              </Components.Button>
            </div>
          </div>
        </div>
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
      </div>
    </Layouts.ProgressBG>
  );
};

export default ProductTodoList;
