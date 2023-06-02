import { useState } from "react";
import styles from "./styles.module.scss";
import cat_po_2 from "assets/picture/png/cat-po-2.png";
import team from "assets/picture/png/team.png";
import week from "assets/picture/png/week.png";
import sprint_backlog from "assets/picture/png/sprint_backlog.png";
import sprint_planning from "assets/picture/png/sprint_planning.png";
import cat_flower from "assets/picture/png/cat-flower.png";
import point_20 from "assets/icon/svg/point20.svg";
import cat_benz from "assets/picture/png/cat-benz.png";
import cat_gray from "assets/picture/png/cat-gray.png";
import * as Layouts from "layouts";
import * as Components from "components";
import * as variables from "variables";

const catSize = {
  width: 315,
  height: 367.5,
};

const SprintPlanning = () => {
  const [understood, setUnderStood] = useState(true),
    [more, setMore] = useState(false);

  return (
    <Layouts.ProgressBG openUp completed={30}>
      {!understood && !more && (
        <>
          <div className="d-flex justify-content-between">
            <div className={`${styles["outer"]} d-flex align-items-center`}>
              <img
                src={cat_po_2}
                className="object-fit-contain"
                width={catSize.width}
                height={catSize.height}
              />
            </div>
            <div className={`${styles["inner"]}`}>
              <Components.Box
                className={`mb-8 ${styles["po-words"]}`}
                padding={"50px 60px 40px 60px"}
                tagColor={variables.colors.orange2}
                character={"PO："}
              >
                <p className="m-0 fs-20px">
                  產品待辦清單好了之後，我們來召集 Scrum Master
                  和開發團隊共同召開
                  <Components.Hightlight>
                    短衝規劃會議（Sprint Planning）
                  </Components.Hightlight>
                  。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出
                  <Components.Hightlight>
                    短衝待辦清單（Sprint Backlog）
                  </Components.Hightlight>
                  ，並由開發團隊在接下來的產品開發週期裡執行。
                </p>
              </Components.Box>
              <Components.Box
                className={`d-flex justify-content-between align-items-center ${styles["po-process"]}`}
                padding={"50px 60px 40px 60px"}
              >
                <div>
                  <img src={team} width={200} height={200} />
                </div>
                <div className="w-100 d-flex flex-column justify-content-between align-items-center">
                  <img
                    className="object-fit-contain"
                    src={sprint_planning}
                    width={100}
                    height={70}
                  />
                  <Components.Arrow
                    className={`${styles["direction"]} my-5`}
                    horizontal
                    left={{ text: false, arrow: false }}
                    right={{ text: false, arrow: true }}
                    topText={"高"}
                    bottomText={"低"}
                  />
                  <p className="text-center fs-20px">
                    短衝規劃會議
                    <br />
                    （Sprint Planning）
                  </p>
                </div>
                <div>
                  <img
                    className="object-fit-contain mb-4"
                    src={sprint_backlog}
                    width={180}
                    height={120}
                  />
                  <p className="m-0 text-center fs-20px">
                    短衝待辦清單 <br />
                    （Sprint Backlog）
                  </p>
                </div>
              </Components.Box>
            </div>
            <div className={`${styles["outer"]}`} />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className={`${styles["outer"]}`} />
            <div className={`${styles["inner"]}`}>
              <div>
                <Components.Box
                  className={`mb-11 ${styles["po-words"]}`}
                  padding={"50px 60px 40px 60px"}
                  tagColor={variables.colors.orange}
                  character={"小花："}
                >
                  <p className="m-0 fs-20px">
                    嗨嗨 你是新來的前端吧！我是這次的
                    <Components.Hightlight>Scrum Master</Components.Hightlight>
                    小花，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
                    Scrum 瞭解。
                  </p>
                </Components.Box>
                <Components.Button
                  className="m-auto"
                  onClick={() => {}}
                  width="350px"
                >
                  了解
                </Components.Button>
              </div>
            </div>
            <div className={`${styles["outer"]} d-flex justify-content-end`}>
              <img
                src={cat_flower}
                className="object-fit-contain"
                width={catSize.width}
                height={catSize.height}
              />
            </div>
          </div>
        </>
      )}
      {understood && !more && (
        <>
          <div className="d-flex justify-content-between">
            <div className={`${styles["outer"]} d-flex align-items-center`}>
              <img
                src={cat_po_2}
                className="object-fit-contain"
                width={catSize.width}
                height={catSize.height}
              />
            </div>
            <div className={`${styles["inner"]}`}>
              <Components.Box
                className={`mb-8 ${styles["po-words"]}`}
                padding={"50px 60px 40px 60px"}
                tagColor={variables.colors.orange}
                character={"小花 :"}
              >
                <p className="m-0 fs-20px">
                  這兩位是賓士和灰灰，是我們開發團為的成員唷～
                  <br />
                  <br />
                  目前我們團隊一次
                  <Components.Hightlight>
                    Sprint 週期是兩週的時間
                  </Components.Hightlight>
                  ，依照我的觀察，目前團隊可以負擔的點數
                  <Components.Hightlight>
                    (Sprint Point) 大約是 20 點
                  </Components.Hightlight>
                  左右。
                </p>
              </Components.Box>
              <Components.Box
                className={`d-flex justify-content-between align-items-center ${styles["po-process"]}`}
                padding={"50px 120px 40px 120px"}
              >
                <div>
                  <img
                    className="object-fit-contain mb-4"
                    src={week}
                    width={180}
                    height={170}
                  />
                  <p className="m-0 text-center fs-20px">兩週的時間</p>
                </div>
                <div className="w-100 d-flex flex-column justify-content-between align-items-center">
                  <Components.Arrow
                    className={`${styles["direction"]}`}
                    horizontal
                    left={{ text: false, arrow: false }}
                    right={{ text: false, arrow: true }}
                    topText={"高"}
                    bottomText={"低"}
                  />
                </div>
                <div>
                  <img
                    className="object-fit-contain mb-4"
                    src={point_20}
                    width={160}
                    height={160}
                  />
                  <p className="m-0 text-center fs-20px">負擔點數 20 點</p>
                </div>
              </Components.Box>
            </div>
            <div
              className={`${styles["outer"]} d-flex justify-content-end align-items-center`}
            >
              <img
                src={cat_flower}
                className="object-fit-contain"
                width={catSize.width}
                height={catSize.height}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className={`${styles["outer"]} d-flex align-items-center`}>
              <img
                src={cat_benz}
                className="object-fit-contain"
                width={catSize.width}
                height={catSize.height}
              />
            </div>
            <div className={`${styles["inner"]}`}>
              <div>
                <Components.Box
                  className={`mb-11 ${styles["po-words"]}`}
                  padding={"50px 60px 40px 60px"}
                  tagFontColor={variables.colors.white}
                  tagColor={variables.colors.green4}
                  character={"賓士 ："}
                >
                  <p className="m-0 fs-20px">
                    欸新來的，你應該不知道點數是什麼意思吧 哈哈
                    <br />
                    我來跟你介紹一下吧～ Sprint Point
                    目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
                  </p>
                </Components.Box>
                <Components.Button
                  className="m-auto"
                  onClick={() => {}}
                  width="350px"
                >
                  了解更多
                </Components.Button>
              </div>
            </div>
            <div className={`${styles["outer"]} d-flex justify-content-end`}>
              <img
                src={cat_gray}
                className="object-fit-contain"
                width={catSize.width}
                height={catSize.height}
              />
            </div>
          </div>
        </>
      )}
      {understood && more && <></>}
    </Layouts.ProgressBG>
  );
};

export default SprintPlanning;
