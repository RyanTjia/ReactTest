import React from "react";

class Class extends React.Component {
	render() {
		return <h1>This is from a {this.props.name}</h1>;
	}
}

export default Class;