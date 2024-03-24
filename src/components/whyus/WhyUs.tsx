import Heading from '../ui/Heading';
import Button from '../ui/Button';
import img from '../../images/laptop-landing-8.png';

export default function WhyUs() {
    const services = [
        { name: 'Built for the user',
          image: img,
          about: 'Afforai is where exceptional customer focus meets exceptional technology.'},
      ];
  return (
    <div className="flex flex-col justify-center items-center pt-4 gap-4 max-w-[100%]">
      <Button variant={'basecolor'}>Why choose us?</Button>
      {services.map((heading) => (
        <Heading 
          headingName={heading.name}
          about={heading.about} 
          image={heading.image}
        />
      ))}    
    </div>
  )
}