import { CiCircleCheck } from "react-icons/ci";
import landing from '../../images/img.jpg';


export default function () {
  // const [service, setService] = useState('');
  const services = [
    { name: 'Entrepreneurs funded and mentored, our startup pitch competition.', icon: <CiCircleCheck  /> },
    { name: 'participants in our Hackathon series, solving local and global problems.', icon: <CiCircleCheck  /> },
    { name: 'participants in our coding, design and startup bootcamps.', icon: <CiCircleCheck   /> },
    { name: 'Be a member of Pathway2STEM', icon: <CiCircleCheck  /> },
  ];
  return (
    <div className="flex flex-wrap lg:mx-[9em] sm:mt-[5em] mx-[5em] my-[11em] lg:flex-row sm:flex-col md:flex-col gap-y-1">
      <div className="lg:w-1/2 md:w-full sm:w-full ml-auto h-[50vh]">
        <h2 className="font-semibold text-[1.2em]">We are a nonprofit organization that provides affordable programs for adult women and non-binary individuals to learn web and software developing in a judgement free environment.</h2>
        <p className="font-small my-[1.2em]">Pathway2STEM members benefit from first access to news and resources, as well as exclusive event invitations and job postings. Get ahead in your career with insights and articles sent directly to your inbox every fortnight.</p>
        <div>
        {services.map((service) => (
        <div className="flex gap-2 text-[1.1em] mt-2 text-green-500 font-semibold">{service.icon}{service.name}</div>
        ))} 
        </div>
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full mr-auto h-[50vh]">
        <img 
          className="w-[100%] h-[50vh]"
          src={landing} alt="product detail" />
      </div>
    </div>
  )
}
