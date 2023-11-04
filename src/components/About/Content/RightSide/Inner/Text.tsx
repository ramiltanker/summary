import React from 'react';

type TextPropsType = {
	content: string;
}

export const Text: React.FC<TextPropsType> = ({content}) => {
	return (
		<>
			<p className="about__text">
				{content}
			</p>
		</>
	);
};