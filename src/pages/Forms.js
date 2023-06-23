import {useState} from "react";

const Forms = () => {
	const [data, setData] = useState({"testSelect":0});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setData(previousData => ({...previousData, [name]:value}));
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		document.getElementById('result').innerHTML = `Sample Text is ${data["testName"]},
		Sample Textbox is ${data["textbox1"]},
		Sample Select is ${data["testSelect"]}`;
	}

	return (
		<>
			<h1 id = "result"></h1>
			<form onSubmit={handleSubmit}>
				<label>Sample text:
					<input
						type = "text"
						name = "testName"
						onChange = {handleChange}
					/>
				</label>
				<br/><label>Sample text area #1:
					<textarea
						name = "textbox1"
						value = {data["textbox1"]}
						onChange = {handleChange}
					/>
				</label>
				<br/><label>Sample select:
					<select name = "testSelect" value = {data["testselect"]} onChange = {handleChange}>
						<option value = {0}> Component 1 </option>
						<option value = {1}> Component 2 </option>
						<option value = {2}> Component 3 </option>
						<option value = {3}> Component 4 </option>
					</select>
				</label>
				<br/><input type = "submit"/>
			</form>
		</>
	)
};

export default Forms;