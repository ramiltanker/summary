import React, { useContext } from "react";

import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";

import { LanguageContext } from "../../../providers/LanguageContext";

import aboutInfo from "../../../constants/about-us-info";

type ContentPropsType = {
  abs: (data: any) => void;
};

export const Content: React.FC<ContentPropsType> = ({ abs }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {aboutInfo.map(({ id, name, age, phone, email, text, photo }) => {
        return (
          <div className="about__inner" key={id}>
            <LeftSide photo={photo} />
            <RightSide
              name={name[language]}
              age={age[language]}
              phone={phone[language]}
              email={email}
              text={text[language]}
              abs={() => abs({ name, age, phone, email })}
            />
          </div>
        );
      })}
    </>
  );
};
