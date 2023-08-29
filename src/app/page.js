import Image from 'next/image'

export default function Home() {
  const videoId = 'CvRreCQ5H-w';
  return (
    <>
    {/* assign : 유림 */}
    {/* 영문 폰트 적용시 다음과 같이 className을 font-archivo 추가해주면 됨! */}
    <div>
      <h1 className='font-sanserif text-6xl font-bold mt-10 ml-10'>HOMMAGE</h1> 
      <div className='flex'>
        <p className='font-sanserif ml-10 mt-3 w-2/3'> Pusan National Univ. Design & Technology<br/>14th Graduation Exhibition</p>
        <p className='font-sanserif mt-3 mr-10 w-1/3 flex justify-end'> Design Center Pusan 1F Exhibition hall <br />11.10 - 11.12 10am-6pm</p>
      </div>
      <div className="relative mt-28">
      <img src="/hommage-home.svg" alt="hommage_home" className='scale-105 -left-8 mb-32'/>
      {/*youtube*/}
      <iframe src={`https://www.youtube.com/embed/${videoId}`} className='w-full h-screen' />
      </div>
      <div className='flex'>
      <div className='bg-black  h-auto w-1/2 text-white'>
        <p className='font-sanserif mx-10 pt-10'>전시개요<br /><br /></p>
        <p className='font-sanserif mx-10 pb-10'>
        ‘나’는 살아가며 사랑하는, 존경하는 것들로 ‘나’를 채워나가고, 그들에게 경의를 담아 진심어린 애정을 표하는 일을 반복한다.<br />
        그렇게 ‘나’는 내가 사랑하는 것들의 총체가 된다. 이번 전시에서 ‘나’는 애정의 대상을 자유롭게 드러내고, 이를 다시 재구성하고 재탄생시키는 과정을 통해
        잊고 있었을지도 모르는 사랑과 존경의 대상을 다시 떠올려본다.<br />
        이번 전시가 20명의 '나'에게는 지금의 ‘나’를 이루고 있는 것들을 찾아 스스로를 되돌아보는 기회가, 관객 여러분께도 당신이 사랑하고 존경했던 대상을 다시 떠올려 보는 순간이 되길 바란다.</p>
      </div>
      <div className='bg-black  h-auto w-1/2 text-white'>
      <p className='font-sanserif mx-10 pt-10'>
        전시기간<br />
        11.10(FRI) - 11.12<br />
        opening 11.10(FRI) 19:00 <br /><br />
        전시장소<br />
        부산디자인진흥원 1F 제1전시실<br />
        (부산시 해운대구 센텀로 2039)
      </p>
      </div>
      </div>
    </div>
    </>
  )
}
