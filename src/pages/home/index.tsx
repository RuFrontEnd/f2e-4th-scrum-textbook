import styles from "./styles.module.scss";
import index from "assets/picture/jpg/index.jpg";
import * as Components from "components";
import * as Layouts from "layouts";
import { ReactComponent as Title } from "assets/icon/svg/title.svg";

const Home = () => {
  const onClickLearnButton = () => {};

  return (
    <Layouts.BG>123</Layouts.BG>
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
