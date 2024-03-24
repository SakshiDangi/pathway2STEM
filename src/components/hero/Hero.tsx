import landing from '../../images/laptop-landing-3.png'
import video from '../../Videos/video1.mp4'
import User from './User'

export default function Hero() {
  return (
    <div className='lg:w-[90vw] h-50vh mt-5 m-auto rounded-3xl overflow-hidden bg-transparent'>
    <div
      style={{backgroundImage: `url(${landing})`}} 
      className='bg-[image:var(backgroundImage)] bg-no-repeat bg-cover z-[-10] w-[100%] h-[60vh] bg-center rounded-3xl'>
    <div>
    <video className="h-full w-full rounded-lg" loop autoPlay muted>
    <source src={video} type="video/mp4" 
      className='absolute bg-cover'/>
       {/* className='absolute bg-no-repeat bg-cover mt-[20vh] mr-[20vh] pr-5 z-30 w-[80vw] h-[80vh] bg-center md:pl-20 md:'/> */}
    </video>

    </div>
    </div>
    <div className='flex flex-col sm:mt-[15vh] lg:mt-[70vh]'>
    <User />
    </div>
    </div>
  )
}
