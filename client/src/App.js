import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import SurveyComponent from './pages/Survey/SurveyComponent.jsx';
import Navbar from './components/Navbar/Navbar';
import doiLogo from './assets/doi.svg';
import doiImage from './assets/people-art.png';

const navItems = [
	{ name: 'About', link: '/about' },
	{ name: 'Process', link: '/process' },
	{ name: 'Algorithm', link: '/algorithm' },
	{ name: 'FAQ', link: '/faq' },
];

function App() {
	return (
		<Router>
			<div className="bg-doi-blue h-screen w-screen">
				<div className="flex flex-row justify-between pt-16 pb-2 px-28">
					<img src={doiLogo} alt="doi Logo" style={{ maxWidth: '3%' }} />
					<Navbar navItems={navItems} />
					<button className="bg-white text-doi-blue text-base rounded-lg font-sans font-bold py-0.5 px-4">
						<Link to="/survey" className="block">
							Join Now
						</Link>
					</button>
				</div>
				<div>
					<Routes>
						<Route
							path="/about"
							element={<div>About Component or Placeholder</div>}
						/>
						<Route
							path="/process"
							element={<div>Process Component or Placeholder</div>}
						/>
						<Route
							path="/algorithm"
							element={<div>Algorithm Component or Placeholder</div>}
						/>
						<Route
							path="/faq"
							element={<div>FAQ Component or Placeholder</div>}
						/>
						<Route path="/survey" element={<SurveyComponent />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
