import logo from '../../images/logo.png'

export default function Logo() {
  return (
    <div className='flex items-center justify-between gap-2'>
        <img src={logo} className='w-16 mt-2'/>
        <h1 className='font-semibold text-[1.2em] text-blue-900'>Pathway<span className='font-bold text-[1.4em] text-black-300'>2</span><span className='font-semibold text-purple-800'>STEM</span></h1>
    </div>
  )
}
