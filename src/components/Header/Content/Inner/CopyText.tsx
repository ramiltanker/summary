import React from 'react';

interface ICopyText {
	text: string;
}

export const CopyText: React.FC<ICopyText> = ({text}) => {
	return (
		<div className="header__copy">
			<p className="header__copy-text">{text}</p>
		</div>
	);
};