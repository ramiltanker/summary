import React from "react";

interface ISocialLinkCard {
  socialLink: string;
  icon: JSX.Element;
}

const SocialLinkCard: React.FC<ISocialLinkCard> = ({ socialLink, icon }) => {
  return (
    <li className="footer__li">
      <a className="footer__link" href={socialLink}>
        {icon}
      </a>
    </li>
  );
};

export default SocialLinkCard;
