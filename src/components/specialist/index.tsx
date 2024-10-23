import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const Specialist: React.FC = () => {
  const specialist = [
    "Anger Management",
    "Anxiety and Stress",
    "Childhood Abuse",
    "Depression",
    "Eating Disorders",
    "Emotional Abuse",
    "Family Conflict",
    "Grief and Trauma",
    "PTSD",
    "OCD",
    "Relationship",
    "Low Self-Esteem",
  ];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-y-6 gap-x-8 text-white">
          {specialist.map((speciality, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckIcon className="h-6 w-6 text-white" />
              <span className="whitespace-nowrap">{speciality}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialist;
