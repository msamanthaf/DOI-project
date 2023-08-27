import './App.css';
import SurveyComponent from './SurveyComponent.jsx';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '4rem 2rem 4rem 2rem',
				}}
			>
				<img
					src="doi-logo.png"
					alt="DOI Logo"
					style={{ backgroundColor: 'black' }}
				/>
				<Navbar></Navbar>
				<button>Join Now</button>
			</div>
			<div>
				<SurveyComponent></SurveyComponent>
			</div>
		</div>
	);
}

export default App;
