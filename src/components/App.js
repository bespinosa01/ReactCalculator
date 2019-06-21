import React from "react";
import CalcScreen from "./CalcScreen";
//import CalcButton from "./CalcButton";
import CalcKeypad from "./CalcKeypad";

import "../style.css";

export default class App extends React.Component {
	state = {
		total: 0,
		next: "",
		operation: null
	};
	handleClick = value => {
		switch (value) {
			case "+":
			case "-":
			case "/":
			case "*":
				if (this.state.total) {
					console.log("Current Total : ", this.state.total + value);
					let newNext = this.state.total;
					this.setState({ next: newNext + value });

					console.log(this.state);
					break;
				}
				this.setState({
					...this.state,
					next: (this.state.next += value)
				});

				console.log(this.state);

				break;

			case "=": {
				let total = eval(this.state.next).toString();
				this.setState({ total: total, next: "" });

				console.log(this.state);
				break;
			}
			case "AC": {
				this.setState({ next: "", total: 0 });
				break;
			}

			default: {
				this.setState({
					...this.state,
					next: (this.state.next += value)
				});

				console.log(this.state);
			}
		}
	};

	render() {
		return (
			<div id="wrapper">
				<div className="app">
					<CalcScreen
						input={this.state.next || this.state.total || "0"}
					/>

					<CalcKeypad clickHandler={this.handleClick} />
				</div>

				<div id="footer">
					{" "}
					<p className="love">Made with ❤️ in Chicago</p>
				</div>
			</div>
		);
	}
}
