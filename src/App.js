import "./App.css";
import Generator from "./Generator";


function App() {
	return (
		<div className="App">
			<header className="App-header">
				
				
				<div className="header_box">
					<div className="about_festival">
						<h3><a href="/">Diwali Festival</a></h3>
					</div>

					<div className="logo">
					</div>

					<div className="contact">
						<h3><a href="/">Contact</a></h3>
					</div>
				</div>
					
				
				
				
				<h1>Diwali Greetings Generator</h1>
			</header>
			<main>
				<Generator />
			</main>
			
		</div>
	);
}

export default App;
