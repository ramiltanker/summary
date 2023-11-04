import React from "react";

interface IBurgerMenu {
  handleOpenBurgerMenu: () => void;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ handleOpenBurgerMenu }) => {
  return (
    <div className="burger-menu">
      <button className="burger-menu__button" onClick={handleOpenBurgerMenu}>
        <span />
        <span />
        <span />
      </button>
    </div>
  );
};

export default BurgerMenu;
