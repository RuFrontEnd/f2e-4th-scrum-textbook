import styles from "./styles.module.scss";
import cat_all from "assets/picture/png/cat-all.png";
import plant1 from "assets/picture/png/plant-1.png";
import plant2 from "assets/picture/png/plant-2.png";
import catAll from "assets/picture/png/cat-all.png";
import * as Layouts from "layouts";
import * as Components from "components";
import * as variables from "variables";

const Introduce = () => {
  return (
    <Layouts.ProgressBG>
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
                <p className="m-0 mb-3_5 fs-24px fw-medium">哈囉~歡迎進入「SCRUM 新手村」</p>
                <p className="m-0 fs-20px">
                  在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
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
    </Layouts.ProgressBG>
  );
};

export default Introduce;
