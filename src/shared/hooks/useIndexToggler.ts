import { useActiveElementStore } from "@store/useActiveElementStore";

export const useIndexToggler = () => {
  const {
    activeIndex,
    maxIndex,
    isAnimationActive,
    setActiveIndex,
    setMaxIndex,
    setIsAnimationActive,
  } = useActiveElementStore();

  const setNewActiveIndex = (index: number) => {
    if (index < 0 || index > maxIndex || isAnimationActive) return;
    setActiveIndex(index);
    setIsAnimationActive(true);
  };

  const currentActiveIndex = () => {
    return activeIndex;
  };

  const currentMaxIndex = () => {
    return maxIndex;
  };

  const setPrevActiveIndex = () => {
    if (activeIndex === 0 || isAnimationActive) return;
    setNewActiveIndex(activeIndex - 1);
  };

  const setNextActiveIndex = () => {
    if (activeIndex >= maxIndex || isAnimationActive) return;
    setNewActiveIndex(activeIndex + 1);
  };

  const getIsAnimationActive = () => {
    return isAnimationActive;
  };

  const setAnimationActive = (isActive: boolean) => {
    setIsAnimationActive(isActive);
  };

  return {
    setPrevActiveIndex,
    setNextActiveIndex,
    setNewActiveIndex,
    currentActiveIndex,
    currentMaxIndex,
    setAnimationActive,
    getIsAnimationActive,
    setMaxIndex,
  };
};
