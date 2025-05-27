import { AnimatedNumber } from "@components/AnimatedNumber/AnimatedNumber";
const styles = require("./Years.module.scss");
import { useScreenSize } from "@hooks/useScreenSize";

interface YearsProps {
  className?: string;
  year1: number;
  year2: number;
}

export const Years = ({ year1, year2, className }: YearsProps) => {
  const { isMobile } = useScreenSize();
  return (
    <div className={styles.root + " " + className}>
      <AnimatedNumber
        value={year1}
        variant="XL"
        color="#3877EE"
        lineheight={isMobile ? "1" : "160px"}
      />
      <AnimatedNumber
        value={year2}
        variant="XL"
        color="#ef5da8"
        lineheight={isMobile ? "1" : "160px"}
      />
    </div>
  );
};

export default Years;
