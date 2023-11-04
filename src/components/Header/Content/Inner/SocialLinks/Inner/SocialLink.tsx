import React from 'react';

import { IconType } from '../SocialLinks';

interface ISocialLink {
	href: string;
	Icon: IconType;
}

export const SocialLink: React.FC<ISocialLink> = ({href, Icon}) => {
	return (
		<li className="header__social-item">
			<a className="header__social-link" href={href} target="_blank" rel="noreferrer">
				<Icon />
			</a>
		</li>
	);
};