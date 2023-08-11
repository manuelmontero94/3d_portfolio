import React from 'react';
import SocialIcons from './SocialIcons';
import { icons } from '../constants';
import { SectionWrapper } from '../hoc';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		// <footer className="bg-slate-200">
		// 	<div className="container mx-auto px-6 pt-10 pb-6">
		// 		<div className="flex flex-wrap">
		// 			<div className="w-full md:w-1/4 text-center md:text-left">
		// 				<h5 className="uppercase mb-6 font-bold">Links</h5>
		// 				<ul className="mb-4">
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							FAQ
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Help
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Support
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="w-full md:w-1/4 text-center md:text-left">
		// 				<h5 className="uppercase mb-6 font-bold">Legal</h5>
		// 				<ul className="mb-4">
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Terms
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Privacy
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="w-full md:w-1/4 text-center md:text-left">
		// 				<h5 className="uppercase mb-6 font-bold">Social</h5>
		// 				<ul className="mb-4">
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Facebook
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Linkedin
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Twitter
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="w-full md:w-1/4 text-center md:text-left">
		// 				<h5 className="uppercase mb-6 font-bold">Company</h5>
		// 				<ul className="mb-4">
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Official Blog
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							About Us
		// 						</a>
		// 					</li>
		// 					<li className="mt-2">
		// 						<a href="#" className="hover:underline text-gray-600 hover:text-orange-500">
		// 							Contact
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// </footer>
		<footer>
			<div className="bg-gray-900 text-white">
				<div className="md:flex md:justify-between md:items-center sm:px-12 px-4  py-7 bg-tertiary">
					<div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 font-medium">
						<span>&#169;{year} Manuel Montero. All rights reserved.</span>
						<span> Terms . Privacy Policy</span>
						<SocialIcons Icons={icons} />
					</div>
					{/* <a
						className="footer__social-link"
						href="https://www.linkedin.com/in/roberto-ramirez-ramirez/"
						target="_blank"
						rel="noopener noreferrer">
						<img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" />
					</a>
					<a className="footer__social-link" href="#" target="_blank" rel="noopener noreferrer">
						<img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" />
					</a>

					<a className="footer__social-link" href="#" target="_blank" rel="noopener noreferrer">
						<img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" />
					</a>
					<a className="footer__social-link" href="#" target="_blank" rel="noopener noreferrer">
						<img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
					</a> */}
				</div>

				{/* <span className="footer__copy">&#169;{year} Manuel Montero. All rights reserved.</span> */}
			</div>
		</footer>
	);
};

// export default Footer;
export default SectionWrapper(Footer, '');
