import * as Components from "components";
import styles from "./styles.module.scss";
import index from "assets/picture/jpg/index.jpg";
import { ReactComponent as Title } from "assets/icon/svg/title.svg";

const Home = () => {
  const onClickLearnButton = () => {};

  return (
    <>
      <div className={styles.container}>
        <img src={index} className={styles.background} />
        <Title className={styles.titleIcon} />
        <Components.Button
          className={styles.learnButton}
          color={"#ACD271"}
          width={"350px"}
          onClick={onClickLearnButton}
        >
          <span className={styles.font}>進入學習</span>
        </Components.Button>
      </div>
    </>
  );
};

export default Home;
