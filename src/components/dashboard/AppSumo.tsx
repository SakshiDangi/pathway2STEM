import appsumo from '../../images/appsumo.png'
import { RiArrowDropRightLine } from "react-icons/ri";


export default function AppSumo() {
  return (
    <div className='flex items-center justify-between border-black-200 rounded-xl gap-1 border-2 bg-gradient-to-269deg from-p1-500 from-17.08% to-p2-500 to-100% px-2 py-2 bg-yellow-500 shadow-3xl text-black-200 font-medium backdrop-blur-2xl'> 
      <img src={appsumo} className='w-8 h-8' alt='AppSumo'/>
        <span>Steal a march on </span>
        <a href='https://leetcode.com/problemset/' target='_blank'
          className='flex px-2 py-1 color-inherit bg-yellow-300 border-black-200 border-1 rounded-md'
        >      
            Sprint Interview Prep
            <RiArrowDropRightLine  className='text-2xl font-bold'/>
        </a>
    </div>
  )
}
