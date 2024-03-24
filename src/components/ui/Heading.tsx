// src/components/ServiceCard.tsx
import React from 'react';

interface HeadingProps {
//   ButtonProps?: string;
  headingName: string;
  about: string;
  image?: string;
  alt?: string;
}

const Heading: React.FC<HeadingProps> = ({ headingName, about, image, alt }) => {
  return (
    <div className="gap-2 p-1">
      <div className="flex flex-col items-center justify-center">
        <p className="text-black-300 text-[2.3em] mr-2 font-semibold">{headingName}</p>
        <p className="text-md text-black-600 font-semibold">{about}</p>
        <img className='w-[100%] no-repeat' src={image} alt={alt} />
      </div>
    </div>
  );
};

export default Heading;
