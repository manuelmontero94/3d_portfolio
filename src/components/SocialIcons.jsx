import React from 'react';

const SocialIcons = ({ Icons }) => {
	return (
		<div className="text-black-200">
			{Icons.map((icon, index) => (
				<span
					key={icon.name}
					onClick={() => window.open(icon.link, '_blank')}
					className="p-2 cursor-pointer inline-flex items-center rounded-full bg-red-600 mx-1.5 text-xl hover:text-slate-100 hover:bg-red-500 duration-400">
					<ion-icon name={icon.name}></ion-icon>
				</span>
			))}
		</div>
	);
};

export default SocialIcons;
