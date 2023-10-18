import { useRef, useEffect, useCallback, useState } from 'react';

export const useScrollFadeIn = (direction = 'up', duration = 1, threshold = 0.2) => {
    const element = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const handleDirection = (name) => {
        switch (name) {
          case 'up':
            return 'translate3d(0, 50%, 0)';
          case 'down':
            return 'translate3d(0, -50%, 0)';
          case 'left':
            return 'translate3d(50%, 0, 0)';
          case 'right':
            return 'translate3d(-50%, 0, 0)';
          default:
            return 'translate3d(0, 0, 0)';
        }
      };
    
  
    const handleScroll = useCallback(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (entry.boundingClientRect.y < 0 && entry.intersectionRatio < threshold) {
            setIsVisible(false);
          }
        },
        [threshold]
      );
    
      useEffect(() => {
        let observer;
    
        if (element.current) {
          observer = new IntersectionObserver(handleScroll, {
            threshold: [threshold],
            root: null,
            rootMargin: '0px',
          });
    
          observer.observe(element.current);
        }
    
        return () => observer && observer.disconnect();
      }, [handleScroll, threshold]);
    
      return {
        ref: element,
        style: {
          opacity: isVisible ? 1 : 0,
          transform: handleDirection(direction),
          transition: 'opacity 1s ease',
        },
      };
    };
    
    export default useScrollFadeIn;