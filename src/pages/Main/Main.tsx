import { Typography } from "../../components/Typography/Typography";
const styles = require('./Main.module.scss');

interface MainPageProps {
  testProp: string;
}

export const MainPage = ({ testProp }: MainPageProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.backgroundBars}>
        <div className={styles.leftBar}></div>
        <div className={styles.rightBar}></div>
        <div className={styles.middleBar}></div>
        <div className={styles.crossBar}></div>
      </div>
    </div>
  );
};