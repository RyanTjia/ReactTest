import {useState, createContext, useContext} from "react";
const globalContext = createContext();

function GlobalState() {
	const [data, setData] = useState(1);
	console.log(data);

	return (
		<globalContext.Provider value={data}>
			<b>{data}</b>
			<Context/>
		</globalContext.Provider>
	)
};

const Context = () => {
	const globalData = useContext(globalContext);
	console.log(globalData);
	console.log(globalContext);

	return <p>{`This data is from the global context: ${globalData}`}</p>
};
export default GlobalState;