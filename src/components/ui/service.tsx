// src/components/ServiceCard.tsx
import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface ServiceCardProps {
  serviceName: string;
  icon?: React.ReactNode;

}

const Service: React.FC<ServiceCardProps> = ({ serviceName, icon = <FaCheck /> }) => {
  return (
    <div className="bg-white gap-2 p-1 shadow-md rounded-md">
      <div className="flex items-center">
        <div className="text-grey-300 text-lg mr-2">{icon}</div>
        <p className="text-md font-semibold">{serviceName}</p>
      </div>
    </div>
  );
};

export default Service;
