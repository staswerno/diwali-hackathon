import { useState } from "react";

const phrases = [
	"first diwali greetings message first diwali greetings message first diwali greetings message first diwali greetings message ",
	"second diwali greetings message second diwali greetings message second diwali greetings message second diwali greetings message ",
	"third diwali greetings message third diwali greetings message third diwali greetings message third diwali greetings message ",
];

export default function Generator() {
	const [msg, setMsg] = useState("diwali greetings message 1");
	const [bg, setBg] = useState(1);

	function generate() {
		const phrase = phrases[Math.floor(Math.random() * 3)];
		const newBg = Math.floor(Math.random() * 3 + 1);
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
