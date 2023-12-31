import ReactDOM from "react-dom/client";

//Routing dependencies
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Import other files from the project
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Array from "./pages/Array";
import Forms from "./pages/Forms";
import Class from "./pages/Class";
import Effect from "./pages/Effect";
import Context from "./pages/Context";
import Reduced from "./pages/Reducer";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path = "/home" element = {<Layout/>}>
					<Route index element = {<Home/>}/>
					<Route path = "arrays" element = {<Array/>}/>
					<Route path = "forms" element = {<Forms/>}/>
					<Route path = "class" element = {<Class name = "class"/>}/>
					<Route path = "effect" element = {<Effect/>}/>
					<Route path = "context" element = {<Context/>}/>
					<Route path = "reduce" element = {<Reduced/>}/>
				</Route>
				<Route path = "*" element = {<a href = "/home">Home</a>}/>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);