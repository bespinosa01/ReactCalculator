import React from "react";
import CalcButton from "./CalcButton";

class CalcKeypad extends React.Component {
	handleClick = value => {
		this.props.clickHandler(value);
	};

	render() {
		return (
			<div className="calculator-keys">
				<CalcButton
					type="button"
					className="operator"
					value="+"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					className="operator"
					value="-"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					className="operator"
					value="*"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					className="operator"
					value="/"
					handleClick={this.handleClick}
				/>

				<CalcButton
					type="button"
					value="7"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					value="8"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					value="9"
					handleClick={this.handleClick}
				/>

				<CalcButton
					type="button"
					value="4"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					value="5"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					value="6"
					handleClick={this.handleClick}
				/>

				<CalcButton
					type="button"
					value="1"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					value="2"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					value="3"
					handleClick={this.handleClick}
				/>

				<CalcButton
					type="button"
					value="0"
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					className="decimal"
					value="."
					handleClick={this.handleClick}
				/>
				<CalcButton
					type="button"
					className="all-clear"
					value="AC"
					handleClick={this.handleClick}
				/>

				<CalcButton
					type="button"
					className="equal-sign"
					value="="
					handleClick={this.handleClick}
				/>
			</div>
		);
	}
}
export default CalcKeypad;
