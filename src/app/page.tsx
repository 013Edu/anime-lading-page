import Image from 'next/image'

import imgg from "../assets/Bookmark.svg";
import img1 from "../assets/Rectangle 34.png";
import img2 from "../assets/Rectangle 33.png";
import img3 from "../assets/Rectangle 32.png";
import img4 from "../assets/Rectangle 24 (2).png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-between p-24 max-[500px]:p-0 max-[500px]:pl-10">
      <div className='flex justify-between max-[1900px]:flex-col'>
        <div>
          <h3 className='text-yellow-500 font-bold'>#2 SPOTLIGHT</h3>
          <h1 className='text-6xl font-bold max-w-[650px]'>Bleach:<br/> Thousand-Year<br/> Blood War</h1>
          <p className='max-w-96 font-light'>
          After a brutal surprise attack by the forces of Quincy King Yhwach, the resident Reapers of the Soul Society lick their wounds and mourn their losses. Many of the surviving Soul Reaper captains train to battle without their Bankai, the ultimate technique wielded...<span className='font-bold cursor-pointer'>+ More</span>
          </p>
        <div className='flex items-center gap-10 mt-5'>
          <Image className='border-2 rounded-full p-1 cursor-pointer' src={imgg} alt="" width={40} height={40} />
          <button className='border-2 rounded-xl p-3 hover:bg-yellow-500 transition-all hover:scale-105'>
            EXPLORE ANIME
          </button>
        </div> 
        </div>
        <div className='ml-96 mt-72 max-[1900px]:ml-0'>
          <h2 className='text-2xl my-5'>featured anime</h2>
          <div>
            <div className='flex items-center gap-10 flex-wrap'>
            <Image className='cursor-pointer hover:scale-105 transition-all' src={img1} alt="" width={300} height={300} />
            <Image className='cursor-pointer hover:scale-105 transition-all' src={img2} alt="" width={300} height={300} />
            <Image className='cursor-pointer hover:scale-105 transition-all' src={img3} alt="" width={300} height={300} />
            <Image className='cursor-pointer hover:scale-105 transition-all' src={img4} alt="" width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
