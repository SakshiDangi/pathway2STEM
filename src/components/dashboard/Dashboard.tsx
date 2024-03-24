import AppSumo from './AppSumo'
import ServiceCard from './ServiceCard'
import Button from '../ui/Button'

export default function Dashboard() {

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <AppSumo />
      <div >
      <h2 className='max-w-[700px] pt-4 text-center font-semibold text-black-300 text-[55px] leading-snug align-center'>
        We exist to eliminate the gender gap in tech
      </h2>
      <p className='max-w-[700px] pt-3 text-center align-center'>
        We envision a world where all people are included and empowered in developing the future of technology.
        Pathway2STEM started with an idea: There is a strong, smart and outspoken girl within all of us. We exist to make sure that girl is heard. Because when every voice, every perspective, every personality is honored and respected, we do better work and live richer lives.
      </p>
      </div>
      <div>
        <ServiceCard />
      </div>
      <div className='mt-5'>
        <Button className='mr-7'>Let's Connect</Button>
        <Button variant={'secondary'}>Contribute Here..</Button>
      </div>
    </div>
  )
}