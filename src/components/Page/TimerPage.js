'use client'
import React, {useEffect, useState, Component} from 'react';

export default function TimerPage() {
    const countdownDate = new Date('2023-11-10T18:00:00').getTime(); // 타이머 종료 날짜를 설정하세요.
    const time = useCountdownTimer(countdownDate);

  return (
    <>
      <div className='absolute bg-white z-50 w-full h-full justify-center flex flex-wrap font-sanserif content-center justify-around text-center lg:text-left content-around p-2'>
        <header className="header">
          <h1 className="title text-6xl lg:text-9xl md:w-full">HOMMAGE</h1>
          <div>2023 Pusan National Univ.</div>
          <div>Dept. of Design, Design and Technology
            <br></br>
            14th Graduation Show</div>
        </header>
        <div className='content-wrapper flex flex-col gap-2 justify-between'>
          <h1 className='lg:text-4xl text-3xl'>OPENING | 11.10 6pm</h1>
          <h1 className='lg:text-2xl text-xl'>11.10 - 11.12 | 10am - 6pm</h1>
          <h1 className='lg:text-2xl text-xl font-noto'>부산디자인진흥원 1층 전시실</h1>
          <div className='countdown-wrapper flex min-w-max gap-4'>
            <div className='time-section'>
              <div className='time'>{time.days}</div>
              <small className="time-text">Days</small>
            </div>
            <div className='time-section'>
              <div className='time'>:</div>
            </div>
            <div className='time-section'>
              <div className='time'>{time.hours}</div>
              <small className="time-text">Hours</small>
            </div>
            <div className='time-section'>
              <div className='time'>:</div>
            </div>
            <div className='time-section'>
              <div className='time'>{time.minutes}</div>
              <small className="time-text">Minutes</small>
            </div>
            <div className='time-section'>
              <div className='time'>:</div>
            </div>
            <div className='time-section'>
              <div className='time'>{time.seconds}</div>
              <small className="time-text">Seconds</small>
            </div>
          </div>
        </div>
        


        
      </div>
      <BouncingImage />
    </>
  );
}

export const useCountdownTimer = (countdownDate) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
        const distanceToDate = countdownDate - currentTime;

        const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        setTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return time;
};


class BouncingImage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        positionX: 0,
        positionY: 0,
        velocityX: 1,
        velocityY: 1,
      };
    }
  
    componentDidMount() {
      this.animateImage();
    }
  
    animateImage = () => {
      requestAnimationFrame(() => {
        const { positionX, positionY, velocityX, velocityY } = this.state;
        
        const newPositionX = positionX + velocityX;
        const newPositionY = positionY + velocityY;
  
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        if (newPositionX + 100 > containerWidth || newPositionX < 0) {
          this.setState({ velocityX: -velocityX });
        }
  
        if (newPositionY + 100 > containerHeight || newPositionY < 0) {
          this.setState({ velocityY: -velocityY });
        }
  
        this.setState({ positionX: newPositionX, positionY: newPositionY });
  
        this.animateImage();
      });
    };
  
    render() {
      const { positionX, positionY } = this.state;
      const bounceKeyframes = `
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-1px); /* Adjust the bounce height as needed */
        }
      }
    `;
      return (
        <div className="relative w-screen h-screen z-50 mix-blend-difference">
        <style>{bounceKeyframes}</style>
          <img
            className="absolute w-16 h-16 animate-bounce"
            src="/mainLogo_16w.svg"
            style={{ left: positionX, top: positionY}}
          />
        </div>
      );
    }
  }

