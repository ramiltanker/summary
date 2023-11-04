import React from "react";

interface IDecor {
  fill: string;
}

export const Decor: React.FC<IDecor> = ({ fill }) => {
  return (
    <svg className="header__decor" x="0px" y="0px" viewBox="0 186.5 1920 113.5">
      <polygon
        points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
        fill={fill}
      />
    </svg>
  );
};
