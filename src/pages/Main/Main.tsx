import Spinner from "@components/Spinner/Spinner";
import { Typography } from "@components/Typography/Typography";
import Years from "@components/Years/Years";
import { YEARS_LABELS, SPINNER_LABELS } from "@constants/constants";
import { SectionsToggler } from "@components/SectionsToggler/SectionsToggler";
import { useIndexToggler } from "@hooks/useIndexToggler";
import EventsSwiper from "@components/EventsSwiper/EventsSwiper";
import { motion } from "framer-motion";
import Dots from "@components/Dots/Dots";
import useScreenSize from "@src/shared/hooks/useScreenSize";
import { useEffect } from "react";
const styles = require("./Main.module.scss");

export const MainPage = () => {
  const {
    currentActiveIndex,
    setPrevActiveIndex,
    setNextActiveIndex,
    currentMaxIndex,
    setNewActiveIndex,
  } = useIndexToggler();
  const { isMobile } = useScreenSize();

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.swiper.wrapperEl.style.transition = "opacity 0.5s";
  //     swiperRef.current.swiper.wrapperEl.style.opacity = "0";
  //     if (prevRef.current && nextRef.current) {
  //       prevRef.current.style.opacity = "0";
  //       nextRef.current.style.opacity = "0";
  //     }

  //     setTimeout(() => {
  //       if (swiperRef.current) {
  //         setDisplayedEvents(eventsData[currentActiveIndex()]);
  //         setSwiperKey((prev) => prev + 1);
  //       }
  //     }, 500);
  //   }
  // }, [currentActiveIndex()]);

  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, delay: 1, ease: "easeOut" }}
    >
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
        year1={YEARS_LABELS[currentActiveIndex()].year1}
        year2={YEARS_LABELS[currentActiveIndex()].year2}
      />
      <div className={styles.sectionsTogglerContainer}>
        <div className={styles.sectionsTogglerNumbers}>
          <Typography color="#42567A" variant="XS">
            0{currentActiveIndex() + 1}
          </Typography>
          <Typography color="#42567A" variant="XS">
            /
          </Typography>
          <Typography color="#42567A" variant="XS">
            0{currentMaxIndex() + 1}
          </Typography>
        </div>
        <SectionsToggler
          className={styles.sectionsToggler}
          onPrev={setPrevActiveIndex}
          onNext={setNextActiveIndex}
          disabledPrev={currentActiveIndex() === 0}
          disabledNext={currentActiveIndex() >= 5}
        />
      </div>
      <EventsSwiper className={styles.eventsSwiper} />
      {isMobile && (
        <Dots
          count={6}
          className={styles.dots}
          onClickFunc={(index) => setNewActiveIndex(index)}
        />
      )}
      {isMobile && (
        <motion.div
          key={`crossBar-${currentActiveIndex()}`}
          className={styles.mobileCrossBar}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
};
