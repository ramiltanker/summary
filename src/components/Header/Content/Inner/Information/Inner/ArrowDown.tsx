import React from 'react';
import { Link } from 'react-scroll';
import arrowDown from '../../../../../../assets/images/arrow-down.svg';

export const ArrowDown: React.FC = () => {
	return (
		<Link className="header__next" to="about" spy smooth ignoreCancelEvents offset={-100}>
			<img className="header__arrow-down" src={ arrowDown } alt="Arrow-down" />
		</Link>
	);
};
