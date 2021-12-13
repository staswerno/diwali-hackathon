import { useState } from "react";

const phrases = [
	"Wishing the goodness of this festive season dwells within you and stays throughout the year.",
	"Hoping this Diwali turns out to be an extra special one for you and your dear ones and may success be always with you.",
	"May the beauty of the festival of lights fill your home with happiness and my the new year bring joy, peace, and prosperity in your life.",
	"May the festival of joy become more beautiful for you and family. All your new ventures get success and progress.",
];

export default function Generator() {
	const [msg, setMsg] = useState(
		"May the festival of joy become more beautiful for you and family. All your new ventures get success and progress."
	);
	const [bg, setBg] = useState(1);

	function generate() {
		const phrase = phrases[Math.floor(Math.random() * 4)];
		const newBg = Math.floor(Math.random() * 6 + 1);
		setMsg(phrase);
		setBg(newBg);
	}
	console.log(bg);
	return (
		<>
			<div className={`bgGlobal bgChooser${bg}`}>
				<p>
					<h1 class="glow">Happy Diwali</h1>
					<h3 class="glow">Festival of Lights</h3>
					<br />
					<br />
					<br />
					{msg}
				</p>
			</div>
			<button onClick={generate}>Click to Generate Diwali Greeting</button>
		</>
	);
}
