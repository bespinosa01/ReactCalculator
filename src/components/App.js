import React from "react";
import CalcScreen from "./CalcScreen";
//import CalcButton from "./CalcButton";
import CalcKeypad from "./CalcKeypad";

import "../style.css";

export default class App extends React.Component {
	state = {
		total: 0,
		next: null,
		operation: null
	};
	handleClick = value => {
		console.log(value);
		this.setState({ total: value });
	};

	render() {
		return (
			<div className="app">
				<CalcScreen total={this.state.next || this.state.total} />

				<CalcKeypad clickHandler={this.handleClick} />
			</div>
		);
	}
}
