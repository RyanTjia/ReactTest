import {useReducer} from "react";

const initialData = [
	{
		id: 0,
		text: "First text"
	},
	{
		id: 1,
		text: "Second text"
	}
];

//A function not from React
//This function should be custom, but it just adds stuff to the current data
const stateLogic = (state, action) => {
	return [...state, {id: state.length, text: action}];
}

const Reduced = () => {
	const [currentState, dispatch] = useReducer(stateLogic, initialData);

	const handleSubmit = (event) => {
		event.preventDefault();

		let textData = document.querySelector('#textbox');
		dispatch(textData.value);
		textData.value = "";
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Sample text area #1:
					<br/><textarea id = "textbox"/>
				</label>
				<br/><input type = "submit"/>
			</form>

			{currentState.map((data) => (
				<p key = {data.id}>Text {data.id + 1} says -> {data.text}</p>
			))}
		</>
	);
};

export default Reduced;