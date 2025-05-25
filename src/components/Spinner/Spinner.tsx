import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import useActiveElementStore from '@store/useActiveElementStore';
const styles = require('./Spinner.module.scss');

interface SpinnerProps {
  className?: string;
  itemsAmount?: number;
  targetPosition?: number; // В радианах
  animationDuration?: number; // В секундах
  itemsLabels?: string[];
}

const Spinner = ({ 
  className, 
  itemsAmount = 6, 
  targetPosition = 300, 
  animationDuration = 1, 
  itemsLabels = [] 
}: SpinnerProps) => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<HTMLDivElement[]>([]);
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);
  
  const [rotation, setRotation] = useState<number>(0);
  const { activeIndex, setActiveIndex } = useActiveElementStore();

  useEffect(() => {
    if (!circleRef.current) return;

    const placePoints = () => {
      const angleIncrement = (Math.PI * 2) / itemsAmount;
      const radius = circleRef.current!.offsetWidth / 2;
      
      pointsRef.current.forEach((point, i) => {
        const angle = angleIncrement * i;
        gsap.set(point, {
          x: radius + Math.cos(angle) * radius,
          y: radius + Math.sin(angle) * radius
        });
      });
    };

    placePoints();
    handlePointClick(0);

    return () => {
      activeTweenRef.current?.kill();
      gsap.killTweensOf(circleRef.current!);
    };
  }, []);

  const handlePointClick = (index: number, e?: React.MouseEvent) => {

    if (e) {
      e.stopPropagation();
    }
    
    if (activeTweenRef.current?.isActive()) return;
  
    const circle = circleRef.current;
    if (!circle) return;
  
    setActiveIndex(index);
    const anglePerItem = 360 / itemsAmount;
    const targetAngle = (targetPosition - anglePerItem * index + 360) % 360;
    const currentAngle = rotation;
    const delta = ((targetAngle - currentAngle + 180) % 360) - 180;
  
    if (currentAngle === targetAngle) return;
  
    activeTweenRef.current = gsap.to(circle, {
      rotation: `+=${delta}`,
      duration: animationDuration,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentRotation = gsap.getProperty(circle, "rotation") as number;
        const normalizedRotation = (currentRotation + 360) % 360;
        setRotation(normalizedRotation);
      },
      onComplete: () => {
        activeTweenRef.current = null;
      }
    });
  };

  return (
    <div className={className}>
      <div ref={circleRef} className={styles.mainCircle}>
        {[...Array(itemsAmount)].map((_, i) => (
          <div
            key={i}
            ref={el => {
              if (el) {
                pointsRef.current[i] = el;
              }
            }}
            className={`${styles.point} ${activeIndex === i ? styles.active : ''}`}
            onClick={() => handlePointClick(i)}
          >
            <div 
              className={styles.pointContent}
              style={{ transform: `rotate(${-rotation}deg)` }}
            >
              <span>{i + 1}</span>
              {activeIndex === i && (
                <div className={styles.label}>
                  <span>{itemsLabels[i]}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;