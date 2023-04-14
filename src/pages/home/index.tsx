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
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* <Title className={`${styles["title-icon"]} mb-10`} width={948} height={486} /> */}
            {/* <Components.Button
              className={styles.button}
              width={"350px"}
              onClick={() => {}}
            >
              進入學習
            </Components.Button> */}
          </div>
        </div>
        <div className={`position-relative ${styles.bottom}`}>
          {/* <img
            width={1338}
            height={510}
            className={`position-absolute start-50 translate-middle ${styles["cat-all"]}`}
            src={cat_all}
          /> */}
          {/* <img
            className={`position-absolute ${styles["plant-1"]}`}
            src={plant_1}
          /> */}
          {/* <img
            className={`position-absolute ${styles["plant-2"]}`}
            src={plant_2}
          /> */}
          {/* <img
            className={`position-absolute ${styles["cat-springboard"]}`}
            src={cat_springboard}
          /> */}
          {/* <img
            className={`position-absolute ${styles["cat-basket"]}`}
            src={cat_basket}
          /> */}
        </div>
      </div>
    </Layouts.BG>
    // <Layouts.Resolution>
    //   <div className={styles.container}>
    //   <img src={index} className={styles.background} />
    //   <Title className={styles.titleIcon} />
    //   <Components.Button
    //       className={styles.learnButton}
    //       color={"#ACD271"}
    //       width={"350px"}
    //       onClick={onClickLearnButton}
    //     >
    //       <span className={styles.font}>進入學習</span>
    //     </Components.Button>
    //   </div>
    // </Layouts.Resolution>
  );
};

export default Home;
