import React from "react";
import {useState} from "react";

import ReactDOM from "react-dom/client";


import {myList} from "./array.js";

const myFirstElement = (
	<>
		<h1>Hello!</h1>
		<h1>This is React!</h1>
	</>
);

class ClassComponent extends React.Component {
	render() {
		return <h1>This is from a {this.props.name}</h1>;
	}
}

function FunctionComponent(props) {
	return (
		<>
			<h1>This is from a function</h1>
			<p>Name from property is {props.name}</p>
			{props.condition &&
				<p>This is used with the '&&' operator</p>
			}
		</>
	);
}

function SwitchRender(props) {
	const choice = props.choice;

	if (choice == 0) {
		return myFirstElement;
	}
	else if (choice == 1) {
		return myList;
	}
	else if (choice == 2) {
		return <ClassComponent name = "class"/>;
	}
	else if (choice == 3) {
		return <FunctionComponent name = "Bob" condition = {true}/>;
	}
}

function MyForm() {
	const [data, setData] = useState({});

	const handleChange = (event) => {
		const key = event.target.name;
		const value = event.target.value;
		setData(values => ({...values, [key]:value}));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`Text is ${data["testName"]}, text box 1 is ${data["textbox1"]}, select is ${data["testselect"]}`);

		component = <SwitchRender choice = {data["testselect"]}/>;
		root.render(component);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>Sample text:
				<input
					type = "text"
					name = "testName"
					onChange = {handleChange}
				/>
			</label>
			<br/>
			<label>Sample text area #1:
				<textarea
					name = "textbox1"
					value = {data["textbox1"]}
					onChange = {handleChange}
				/>
			</label>
			<br/>
			<label>Sample select:
				<select name = "testselect" value = {0} onChange = {handleChange}>
					<option value = {0}> Component 1 </option>
					<option value = {1}> Component 2 </option>
					<option value = {2}> Component 3 </option>
					<option value = {3}> Component 4 </option>
				</select>
			</label>
			<br/>
			<input type = "submit"/>
		</form>
	)
}

//Get the reference as to where the content should be displayed
const container = document.getElementById('root');
const container2 = document.getElementById('root2');

const root = ReactDOM.createRoot(container);
const root2 = ReactDOM.createRoot(container2);

//Get different rendering components
let component = <SwitchRender choice = {0}/>;

//Render the outcome
root.render(component);
root2.render(<MyForm/>);