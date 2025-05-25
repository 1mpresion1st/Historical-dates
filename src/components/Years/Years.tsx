import { AnimatedNumber } from "@components/AnimatedNumber/AnimatedNumber";
const styles = require('./Years.module.scss');

interface YearsProps {
  className?: string;
  year1: number;
  year2: number;
}

export const Years = ({ year1, year2, className }: YearsProps) => {``
  return (
    <div className={styles.root + ' ' + className}>
      <AnimatedNumber 
        value={year1}
        variant="XL"
        color="#5d5fef"
        lineheight={'160px'}
        />
      <AnimatedNumber 
        value={year2}
        variant="XL"
        color="#ef5da8"
        lineheight={'160px'}
      />
    </div>
  );
};

export default Years;