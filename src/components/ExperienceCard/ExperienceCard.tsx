import React from "react";

interface IExperienceCard {
  title: string;
  time: string;
  description: string;
}

const ExperienceCard: React.FC<IExperienceCard> = ({
  title,
  time,
  description,
}) => {
  return (
    <div className="experience__card">
      <div className="experience__box">
        <p className="experience__proffession">{title}</p>
        <p className="experience__time">{time}</p>
      </div>
      <p className="experience__description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
