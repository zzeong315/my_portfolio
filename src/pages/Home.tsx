import React from 'react'

const Home = () => {
  return (
    //grid로 변경하기
    <div className='bg-lightDark text-darkText grid grid-cols-2 h-[90vh]'>
      <div className='ml-20 mt-40 justify-self-center'>
        <h1 className='text-4xl'>Hello</h1>
        <h1 className='text-4xl mb-3'>I'm JeongEun Lim</h1>
        <p className='text-2xl'>Front-End engineer</p>
        <p className='text-l'>#HTML #CSS #JavaScript #TypeScript</p>
        <p className='text-l'>#React #Next.js #Git #Github</p>
        <p className='text-l'>한글테스트...</p>
      </div>
      <div>
        <div className='w-72 h-72 rounded-full bg-myPink ml-20 hover:bg-myGreen'></div>
        <div className='w-52 h-52 rounded-full bg-myOrange'></div>
      </div>
    </div>
  )
}

export default Home;