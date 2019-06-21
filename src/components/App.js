import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

import CalcScreen from "./CalcScreen";
import CalcKeypad from "./CalcKeypad";

import "../style.css";

export default class App extends React.Component {
	state = {
		total: 0,
		next: ""
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

			case "=":
			case "enter": {
				let total = eval(this.state.next).toString();
				this.setState({ total: total, next: "" });

				console.log(this.state);
				break;
			}
			case "AC":
			case "backspace": {
				this.setState({ next: "", total: 0 });
				break;
			}

			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9": {
				if (this.state.total !== 0) {
					this.setState({ total: 0 });
				}
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
				<KeyboardEventHandler
					handleKeys={["all"]}
					onKeyEvent={(key, e) => this.handleClick(key)}
				/>

				<div className="app">
					<CalcScreen input={this.state.next || this.state.total} />

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
