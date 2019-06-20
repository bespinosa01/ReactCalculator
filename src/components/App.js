import React from "react";
import CalcButton from "./CalcButton";
import CalcScreen from "./CalcScreen";
import "../style.css";

export default class App extends React.Component {
	state = {
		total: null,
		operation: null
	};

	render() {
		return (
			<div className="app">
				<CalcScreen />
				<div className="calculator-keys">
					<CalcButton type="button" className="operator" value="+" />
					<CalcButton type="button" className="operator" value="-" />
					<CalcButton type="button" className="operator" value="*" />
					<CalcButton type="button" className="operator" value="/" />

					<CalcButton type="button" value="7" />
					<CalcButton type="button" value="8" />
					<CalcButton type="button" value="9" />

					<CalcButton type="button" value="4" />
					<CalcButton type="button" value="5" />
					<CalcButton type="button" value="6" />

					<CalcButton type="button" value="1" />
					<CalcButton type="button" value="2" />
					<CalcButton type="button" value="3" />

					<CalcButton type="button" value="0" />
					<CalcButton type="button" className="decimal" value="." />
					<CalcButton
						type="button"
						className="all-clear"
						value="AC"
					/>

					<CalcButton
						type="button"
						className="equal-sign"
						value="="
					/>
				</div>
			</div>
		);
	}
}
