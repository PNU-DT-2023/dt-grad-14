import React from 'react';

const WebLineAnimation = () => {
  return (
    <div className="section w-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="60%" viewBox="0 0 5000 1700" className='hidden lg:block sclae-130 w-full'>
      <style>
          {`
            .path {
                stroke-dasharray: 20000; /* 선의 전체 길이 */
                stroke-dashoffset: -20000; /* 초기값을 음수로 설정하여 선이 왼쪽에서 오른쪽으로 그려집니다 */
                -webkit-animation: dash 10s ease forwards;
                -moz-animation: dash 10s ease forwards;
                animation: dash 10s ease forwards;
              }
              
              @keyframes dash {
                from {
                  stroke-dashoffset: -20000; /* 초기값을 음수로 설정하여 선이 왼쪽에서 오른쪽으로 그려집니다 */
                }
                to {
                  stroke-dashoffset: 0; /* 0으로 설정하여 선이 앞에서부터 그려집니다 */
                }
              }
          `}
        </style>
        <path
          className="path stroke-[#e8361e]  "
          d="m5679.79,1056.13s-140.95,131.65-332.12,124.59c-254.4-9.39-439.36-501.39-601.36-325.39-79.04,85.87,137.19,404.81-118.15,527.68-135.23,65.08-520.5-237.53-575.32-903.13-49.53-601.36,350.5-598.58,381.52-151.38,31.02,447.19-208.34,703.43-385.62,709.21-244.21,7.96-289.71-389.51-451.55-364.57-161.84,24.94-213.63,343.35-376.93,367.15l-.05-.2c-105.31,22.04-145.43-83.69-151.44-94.99-6.01-11.29-26.17-55.83-55.83-55.83-24.42-1.74-40.12,57.57-36.64,59.32,19.19,6.98,34.89-12.21,40.12-29.66,15.7-61.06,13.79-130.69-5.23-179.69-19.02-49-84.02-121.52-95.95-167.48-11.93-45.96-20.93-80.25-31.4-122.12-5.23-13.96-8.72-27.91-19.19-38.38-6.98-5.23-15.7-3.49-22.68,1.74-31.4,36.64-12.21,85.48-15.7,127.35-1.74,13.96-6.98,27.91-22.68,29.66-13.96,1.74-26.17-5.23-34.89-13.96-48.85-47.1-206.93-205.77-165.81-225.75,18.05-8.77,90.8,80.95,104.75,96.65,40.12,41.87,75.02,83.74,113.4,125.61,8.72,12.21,12.67,15.17,24.42,36.64,11.75,21.47,17.45,41.87,12.21,59.32-3.49,10.47-17.45,13.96-24.42,20.93-3.49,3.49-5.23,10.47-5.23,15.7,3.49,22.68,0,47.1-6.98,68.04-8.72,20.93-29.66,34.89-38.38,55.83-10.47,20.93-6.98,45.36,0,68.04,1.74,5.23,32.74,86.63,61.06,123.86,28.32,37.24,75.02,88.97,116.89,85.48,12.21-8.72-76.86-133.27-148.29-170.97-31.4-19.19-61.06-34.89-85.48-62.8-10.47-12.21-19.19-24.42-26.17-38.38-12.21-24.42-24.42-47.1-38.38-69.78-13.96-20.93-27.91-36.64-41.87-55.83-10.47-15.7-51.36-73.5-55.6-89.98-4.24-16.48-1.94-27.56,11.04-26.88,18.63.98,116.58,112.58,161.44,153.49,5.47,4.99,14.02,12.48,19.19,10.47,11.73-4.56-3.49-24.42-10.47-33.15-40.12-38.38-115.14-123.86-116.89-125.61-27.91-34.89-59.32-64.55-76.76-104.67,0-1.74-12.21-33.15,0-43.61,6.98-5.23,15.7-5.23,22.68,0,27.91,27.91,50.59,57.57,76.76,87.23,19.19,19.19,55.83,61.06,55.83,61.06,0,0,53.55,69.5,64.55,55.83s-28.65-48.75-54.33-80.77c-25.68-32.02-64.3-67.52-93.96-105.9-22.68-27.91-41.87-54.08-64.55-80.25-5.23-5.23-12.21-10.47-19.19-8.72-31.4,6.98-10.47,47.1-12.21,71.53-1.74,10.47-12.21,13.96-15.7,22.68-1.74,5.23-1.74,13.96,0,19.19,10.47,22.68,22.68,45.36,33.15,68.04,1.74,8.72,0,19.19-10.47,24.42-10.47,5.23-8.72,19.19-8.72,29.66,3.49,24.42,12.21,47.1,27.91,68.04,26.17,40.12,50.59,78.51,68.04,122.12,8.72,22.68,10.47,47.1,19.19,69.78,8.72,22.68,22.68,41.87,38.38,59.32,52.34,55.83,102.02,89.38,115.97,169.63,3.49,24.42-7.63,64.16-40.99,86.2-33.36,22.05-130.6,22.23-248.56-55.2l.05.2c-41.55-24.44-94.59-110.4-175.12-89.56-80.53,20.84-195.25,167.36-270.52,135.42-123.25-52.29,74.41-315.07-41.86-381.81-116.27-66.75-372.54,302.69-606.94,338.82-234.4,36.14-484.45-240.22-1139.46-99.99-655.01,140.22,84.04,414.53,365.09,395.32,374.39-25.58,932.5-546.48,809.25-688.33-93.54-107.65-439.51,102.32-530.2,11.63-69.96-69.96-20.27-297.51,288.35-513.92,308.62-216.41,516.35,68.17,76.41,230.24-677.9,249.72-1031.9-90.28-1031.9-90.28"
          strokeWidth="18"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default WebLineAnimation;
