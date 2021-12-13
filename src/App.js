import "./App.css";
import Generator from "./Generator";
import "./Firework.css";
import DiwaliInformation from './DiwaliInformation';


function App() {
  return (
    <div className="App">
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>

        <header className="App-header">
          <div className="header_box">
            <div className="about_festival">
              <h3>
                <a href="/">Diwali Festival</a>
              </h3>
            </div>

            <div className="logo"></div>

            <div className="contact">
              <h3>
                <a href="/">Contact</a>
              </h3>
            </div>
          </div>

          <h1>Diwali Greetings Generator</h1>
        </header>
        <main>
          <Generator />

		  <DiwaliInformation />
        </main>

		<footer>
			<h4>@Group 6 WBS Hackathon Project</h4>
			
		</footer>
      </div>
    </div>
  );
}

export default App;
