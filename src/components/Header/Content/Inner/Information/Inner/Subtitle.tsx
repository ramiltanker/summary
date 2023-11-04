import React from 'react';

type SubtitlePropsType = {
	text: string;
}

export const Subtitle: React.FC<SubtitlePropsType> = ({text}) => {
	return (
		<div className="header__subtitle">
			<h4 className="header__subtitle-text">{text}</h4>
		</div>
	);
};