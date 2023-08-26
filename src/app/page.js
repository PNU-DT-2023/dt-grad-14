import Image from 'next/image'

export default function Home() {
  return (
    <>
    {/* assign : 유림 */}
    {/* 영문 폰트 적용시 다음과 같이 className을 font-archivo 추가해주면 됨! */}
    <div>
      <h1 className='font-sanserif font-bold '>HOMMAGE, I'm English!</h1> 
      메인페이지입니다. noto-sans가 기본으로 적용됩니다.
      <p className='font-sanserif'> this is English San-serif font 'Archivo'. </p>
      <p className='font-serif'> this is English serif font 'Philosopher'. </p>
    </div>
    </>
  )
}
