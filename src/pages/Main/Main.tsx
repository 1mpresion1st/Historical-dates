import Spinner from "@components/Spinner/Spinner";
import { Typography } from "@components/Typography/Typography";
import Years from "@components/Years/Years";
import { YEARS_LABELS, SPINNER_LABELS } from "@constants/constants";
import { useActiveElementStore } from "@store/useActiveElementStore";
const styles = require('./Main.module.scss');

export const MainPage = () => {
  const { activeIndex } = useActiveElementStore();
  return (
    <div className={styles.root}>
      <div className={styles.backgroundBars}>
        <div className={styles.leftBar}></div>
        <div className={styles.rightBar}></div>
        <div className={styles.middleBar}></div>
        <div className={styles.crossBar}></div>
      </div>

      <Typography
        className={styles.title}
        color="#42567A"
        variant="LG"
        fontWeight={700}
        lineheight={1.2}
      >
        Исторические даты
      </Typography>

      <Spinner
        className={styles.spinner} 
        itemsAmount={6}
        targetPosition={300}
        animationDuration={1}
        itemsLabels={SPINNER_LABELS}
      />

      <Years
        className={styles.years}
        year1={YEARS_LABELS[activeIndex].year1}
        year2={YEARS_LABELS[activeIndex].year2}
      />
    </div>
  );
};