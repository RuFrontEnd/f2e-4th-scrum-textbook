import styles from "./styles.module.scss";
import index from "assets/picture/jpg/index.jpg";
import * as Components from "components";
import * as Layouts from "layouts";
import { ReactComponent as Title } from "assets/icon/svg/title.svg";
import cat_all from "assets/picture/png/cat-all.png";
import plant_1 from "assets/picture/png/plant-1.png";
import plant_2 from "assets/picture/png/plant-2.png";
import cat_springboard from "assets/picture/png/cat_springboard.png";
import cat_basket from "assets/picture/png/cat_basket.png";

const Home = () => {
  const onClickLearnButton = () => {};

  return (
    <Layouts.BG openUp>
      <div className={`d-flex flex-column h-100`}>
        <div
          className={`${styles.top} d-flex justify-content-center align-items-center`}
        >
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <Title
              className={`${styles["title-icon"]} mb-10 z-index-10000`}
              width={960}
              height={300}
            />
            <Components.Button
              className={`${styles.button} z-index-max`}
              width={"350px"}
              onClick={() => {}}
            >
              進入學習
            </Components.Button>
          </div>
        </div>
        <div className={`position-relative ${styles.bottom}`}>
          <img
            width={1338}
            height={510}
            className={`object-fit-contain position-absolute start-50 translate-middle z-index-10000 ${styles["cat-all"]}`}
            src={cat_all}
          />
          <div className={`position-absolute d-flex align-items-end w-50 z-index-1000`}>
            <div className="position-relative w-100">
              <div
                className={`${styles["left-appliance"]} position-absolute d-flex w-100 d-flex align-items-end`}
              >
                <img
                  width={193}
                  height={337}
                  className={`object-fit-contain me-7 ${styles["plant-1"]}`}
                  src={plant_1}
                />
                <img
                  width={350}
                  height={422}
                  className={`object-fit-contain ${styles["cat-springboard"]}`}
                  src={cat_springboard}
                />
              </div>
            </div>
          </div>

          <div
            className={`position-absolute end-0 d-flex align-items-end w-50 z-index-1000`}
          >
            <div className="position-relative w-100">
              <div
                className={`${styles["right-appliance"]} position-absolute d-flex w-100 d-flex justify-content-end align-items-end`}
              >
                <img
                  width={228}
                  height={174}
                  className={`object-fit-contain me-7 ${styles["cat-basket"]}`}
                  src={cat_basket}
                />
                <img
                  width={240}
                  height={401}
                  className={`object-fit-contain ${styles["plant-2"]}`}
                  src={plant_2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts.BG>
  );
};

export default Home;
