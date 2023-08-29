import './App.css';
import SurveyComponent from './SurveyComponent.jsx';
import Navbar from './components/Navbar/Navbar';
import doiLogo from './assets/doi.svg';
import doiImage from './assets/people-art.png';

const navItems = [
	{ name: 'About', link: '#home' },
	{ name: 'Process', link: '#about' },
	{ name: 'Algorithm', link: '#contact' },
	{ name: 'FAQ', link: '#contact' },
];

function App() {
	return (
		<div className="bg-doi-blue h-screen w-screen">
			<div className="flex flex-row justify-between pt-16 pb-2 px-28">
				<img
					src={doiLogo}
					alt="doi Logo"
					style={{
						maxWidth: '3%',
					}}
				/>
				<Navbar navItems={navItems} />
				<button className="bg-white text-doi-blue text-base rounded-lg font-sans font-bold py-0.5 px-4">
					Join Now
				</button>
			</div>
			<div className="flex flex-row justify-items-center my-32 mx-72">
				<img src={doiImage} alt="DOI Image" className="w-1/2" />
				<div className="flex flex-col m-5">
					<div className="mt-32">
						<text className="font-bold font-mufteya text-8xl text-doi-light-blue">
							Date 🤝 Data
						</text>
					</div>
					<div className="mt-10">
						<text className="font-plex text-xl text-doi-light-blue">
							DOI (Dating Orang Indo) Project is a one-off, student-run passion
							project aiming to connect Indonesian students studying in Canada
							(*Beta release: Only in Vancouver) to meet ideal date from your
							city/university.
						</text>
					</div>
				</div>
			</div>

			{/* <div>
				<SurveyComponent></SurveyComponent>
			</div> */}
		</div>
	);
}

export default App;
