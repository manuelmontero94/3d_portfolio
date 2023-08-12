import React from 'react';
import SocialIcons from './SocialIcons';
import { icons } from '../constants';
import { SectionWrapper } from '../hoc';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<div className="bg-gray-900 text-white">
				<div className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7 bg-tertiary">
					<div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 font-medium">
						<span>&#169;{year} Manuel Montero. All rights reserved.</span>
						<span> Terms . Privacy Policy</span>
						<SocialIcons Icons={icons} />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SectionWrapper(Footer, '');
