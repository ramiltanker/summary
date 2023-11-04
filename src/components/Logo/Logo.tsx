import React from 'react';

type LogoPropsType = {
	logoText: string;
}

export const Logo: React.FC<LogoPropsType> = ({logoText}) => {
	return (
		<a className="logo" href="/">
			<div className="logo__text">{logoText}</div>
		</a>
	);
};