import Service from '../ui/service';
import { BiCheck } from 'react-icons/bi';
import './animate.css'

export default function ServiceCard() {
    const services = [
        { name: 'Developing new Skills', icon: <BiCheck /> },
        { name: 'Connect with new Community', icon: <BiCheck /> },
        { name: 'Finding a Mentor', icon: <BiCheck /> },
        { name: 'Job opportunity', icon: <BiCheck /> },
        { name: 'Career Advice', icon: <BiCheck /> },
      ];
  return (
    <div className="flex flex-row justify-center items-center pt-4 gap-4 max-w-[100%] animate-slide">
      {services.map((service, index) => (
        <Service key={index} serviceName={service.name} icon={service.icon} />
      ))}    
    </div>
  )
  
}
