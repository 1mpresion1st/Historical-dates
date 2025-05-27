import React from "react";
const styles = require("./SectionsToggler.module.scss");

interface SectionsTogglerProps {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev?: boolean;
  disabledNext?: boolean;
  className?: string;
}

export const SectionsToggler: React.FC<SectionsTogglerProps> = ({
  onPrev,
  onNext,
  disabledPrev = false,
  disabledNext = false,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <button
        className={`${styles.arrowButton} ${
          disabledPrev ? styles.disabled : ""
        }`}
        onClick={onPrev}
        disabled={disabledPrev}
        aria-label="Previous section"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className={`${styles.arrowButton} ${
          disabledNext ? styles.disabled : ""
        }`}
        onClick={onNext}
        disabled={disabledNext}
        aria-label="Next section"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
