import * as Layouts from "layouts";
import styles from "./styles.module.scss";
import plant1 from "assets/picture/png/plant-1.png";
import plant2 from "assets/picture/png/plant-2.png";
import catAll from "assets/picture/png/cat-all.png";

const Introduce = () => {
  return (
    <Layouts.BG>
      {/* <div className={styles.content}>
          哈囉~歡迎進入「SCRUM 新手村」 <br />
          在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
          請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～
        </div> */}
      {/* <img src={plant1} className={styles.plant1} />
        <img src={catAll} className={styles.allCats} />
        <img src={plant2} className={styles.plant2} /> */}
    </Layouts.BG>
  );
};

export default Introduce;
