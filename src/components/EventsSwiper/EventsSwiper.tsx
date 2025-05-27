import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { eventsData } from "@src/shared/constants/constants";
import { Typography } from "../Typography/Typography";
import { useIndexToggler } from "@hooks/useIndexToggler";
import useScreenSize from "@src/shared/hooks/useScreenSize";
const styles = require("./EventsSwiper.module.scss");

interface EventsSwiperProps {
  className?: string;
}

const EventsSwiper = ({ className }: EventsSwiperProps) => {
  const { isMobile } = useScreenSize();
  const { currentActiveIndex } = useIndexToggler();
  const [swiperKey, setSwiperKey] = useState(0);
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [displayedEvents, setDisplayedEvents] = useState<any[]>([]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.wrapperEl.style.transition =
        "opacity 0.5s ease-out";
      swiperRef.current.swiper.wrapperEl.style.opacity = "0";
      if (prevRef.current && nextRef.current) {
        prevRef.current.style.opacity = "0";
        nextRef.current.style.opacity = "0";
      }

      setTimeout(() => {
        if (swiperRef.current) {
          setDisplayedEvents(eventsData[currentActiveIndex()]);
          setSwiperKey((prev) => prev + 1);
        }
      }, 500);
    }
  }, [currentActiveIndex()]);

  return (
    <div className={styles.root + " " + className}>
      <Swiper
        key={swiperKey}
        ref={swiperRef}
        className={styles.swiper}
        modules={[Navigation, FreeMode]}
        direction={"horizontal"}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        spaceBetween={isMobile ? 0 : 80}
        slidesPerView={1.5}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
        freeMode={true}
      >
        {displayedEvents.map((event, index) => (
          <SwiperSlide key={`${currentActiveIndex}-${index}`}>
            <div className={styles.card}>
              <Typography
                className={styles.year}
                variant="MD"
                color="#3877EE"
                fontWeight={400}
                fontFamily='"Bebas Neue", sans-serif'
                addMarginBottom
              >
                {event.year}
              </Typography>
              <Typography
                variant="SM"
                lineheight={isMobile ? "145%" : "30px"}
                color="#42567A"
                fontWeight={400}
              >
                {event.description}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {displayedEvents.length > 0 && !isMobile && (
        <div
          key={`index1-${swiperKey}`}
          ref={prevRef}
          className={`${styles.arrow} ${styles.prev}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}
      {displayedEvents.length > 0 && !isMobile && (
        <div
          key={`index2-${swiperKey}`}
          ref={nextRef}
          className={`${styles.arrow} ${styles.next}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default EventsSwiper;
