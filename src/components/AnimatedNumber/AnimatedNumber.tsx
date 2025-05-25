import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Typography, TypographyProps } from '@components/Typography/Typography';
const styles = require('./AnimatedNumber.module.scss');

interface AnimatedNumberProps extends Omit<TypographyProps, 'children'> {
  value: number;
}

export const AnimatedNumber = ({ 
  value,
  variant = 'MD',
  color,
  align,
  fontWeight,
  marginBottom,
  noWrap,
  component,
  underline,
  textTransform,
  sx,
  className,
  lineheight
}: AnimatedNumberProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const previousValueRef = useRef<number>(value);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      duration: 1,
      textContent: value,
      snap: { textContent: 1 },
      onUpdate: function() {
        if (element) {
          element.textContent = Math.floor(Number(this.targets()[0].textContent)).toString();
        }
      },
      onStart: () => {
        element.textContent = previousValueRef.current.toString();
      }
    });

    previousValueRef.current = value;

    return () => {
      gsap.killTweensOf(element);
    };
  }, [value]);

  return (
    <Typography
      ref={elementRef}
      variant={variant}
      color={color}
      align={align}
      fontWeight={fontWeight}
      marginBottom={marginBottom}
      noWrap={noWrap}
      component={component}
      underline={underline}
      textTransform={textTransform}
      sx={sx}
      className={`${styles.root} ${className || ''}`}
      lineheight={lineheight} children={undefined}    />
  );
};

export default AnimatedNumber;