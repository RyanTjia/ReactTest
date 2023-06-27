import {Outlet, Link} from "react-router-dom";

const Layout = () => {
	return (
		<>
			<h1>Welcome to my React App!</h1>
			<h2>This section is a layout which you'll see most of the time</h2>
			<ul>
				<li><Link to = "/home">Home</Link></li>
				<li><Link to = "/home/arrays">Arrays</Link></li>
				<li><Link to = "/home/forms">Form</Link></li>
				<li><Link to = "/home/class">Class</Link></li>
				<li><Link to = "/home/effect">Effect</Link></li>
				<li><Link to = "/home/context">Context</Link></li>
				<li><Link to = "/home/reduce">Reduced</Link></li>
			</ul>

			<Outlet/>
		</>
	)
};

export default Layout;