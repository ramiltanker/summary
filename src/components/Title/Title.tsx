import React from 'react';

type TitlePropsType = {
	text: string;
}

export const Title: React.FC<TitlePropsType> = ({text}) => {
	return (
		<h2 className="about__title">{ text }</h2>
	);
};