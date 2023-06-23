import {useEffect, useState} from "react";

const Effect = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let timer = setTimeout(() => {
			setCount(count + 1);
		}, 1000);

		return () => clearTimeout(timer);
	});

	const resetTimer = () => {
		setCount(0);
	}

	return (
		<>
			<p>Timer:{count}</p>
			<button onClick={resetTimer}>Reset</button>
		</>
	)
};

export default Effect;