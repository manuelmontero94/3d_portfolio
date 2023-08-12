import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Toaster />
			</div>
			<BrowserRouter>
				<div className="relative z-0 bg-primary">
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Works />
					<Feedbacks />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
