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
			<div className="bg-doi-blue min-h-screen min-w-screen">
				<div className="flex flex-row justify-between pt-16 pb-2 px-28">
					<img src={doiLogo} alt="doi Logo" style={{ maxWidth: '3%' }} />
					<Navbar navItems={navItems} />
					<button className="bg-white text-doi-blue text-base rounded-lg font-sans font-bold py-0.5 px-4">
						<Link to="/survey" style={{ display: 'block' }}>
							Join Now
						</Link>
					</button>
				</div>
				<Routes>
					<Route
						path="/"
						element={
							<div className="flex flex-col md:flex-row justify-items-center my-4 md:my-32 mx-4 md:mx-72">
								<img
									src={doiImage}
									alt="DOI Image"
									className="w-full md:w-1/2"
								/>
								<div className="flex flex-col m-5 md:m-5">
									<div className="mt-4 md:mt-32">
										<text className="font-bold font-mufteya text-2xl md:text-8xl text-doi-light-blue">
											Date 🤝 Data
										</text>
									</div>
									<div className="mt-4 md:mt-10">
										<text className="font-plex text-sm md:text-xl text-doi-light-blue">
											DOI (Dating Orang Indo) Project is a one-off, student-run
											passion project aiming to connect Indonesian students
											studying in Canada (*Beta release: Only in Vancouver) to
											meet their ideal date from your city/university.
										</text>
									</div>
								</div>
							</div>
						}
					/>
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
		</Router>
	);
}

export default App;
