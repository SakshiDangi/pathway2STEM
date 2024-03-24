import laptoplanding from '../../images/laptop-landing-2.png'

export default function User() {
  return (
    <div className='flex items-center justify-center flex-col h-[16vh]'>
        <p className='font-md text-[1.2em]'>Loved by <span className='text-purple-500'>10,000+</span> users around the world</p>
        <img src={laptoplanding} alt='USER IMAGE'
          className='bg-no-repeat bg-cover m-auto w-[full] h-[7vh] z-10 bg-center'/>
    </div>
  )
}
