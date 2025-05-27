const styles = require("./Dots.module.scss");
import { useIndexToggler } from "@hooks/useIndexToggler";

interface DotsProps {
  count: number;
  onClickFunc?: (index: number) => void;
  className?: string;
}

export const Dots = ({ count, onClickFunc, className }: DotsProps) => {
  const { currentActiveIndex } = useIndexToggler();

  return (
    <div className={styles.container + " " + className}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${
            currentActiveIndex() === index ? styles.active : ""
          }`}
          onClick={() => onClickFunc && onClickFunc(index)}
        />
      ))}
    </div>
  );
};

export default Dots;
