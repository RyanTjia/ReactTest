import {useState} from "react";

const Forms = () => {
	const [data, setData] = useState({"testSelect":0});

	const handleSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		for (const [name, value] of formData) {
			data[name] = value;
		}

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
					/>
				</label>
				<br/><label>Sample text area #1:
					<textarea
						name = "textbox1"
						value = {data["textbox1"]}
					/>
				</label>
				<br/><label>Sample select:
					<select name = "testSelect" value = {data["testselect"]}>
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