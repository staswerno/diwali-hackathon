import { useState } from "react";

const phrases = [
	"diwali greetings message 1",
	"diwali greetings message 2",
	"diwali greetings message 3",
];

export default function Generator() {
	const [msg, setMsg] = useState("");
	const [bg, setBg] = useState();

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
					<h2>Happy Diwali!</h2>
					<br />
					{msg}
				</p>
			</div>
			<button onClick={generate}>GENERATE</button>
		</>
	);
}
