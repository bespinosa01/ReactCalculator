import React from "react";
import CalcButton from "./CalcButton";

class CalcKeypad extends React.Component {
	render() {
		return (
			<div className="calculator-keys">
				<CalcButton
					type="button"
					className="operator"
					value="+"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					className="operator"
					value="-"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					className="operator"
					value="*"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					className="operator"
					value="/"
					handleClick={this.props.clickHandler}
				/>

				<CalcButton
					type="button"
					value="7"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					value="8"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					value="9"
					handleClick={this.props.clickHandler}
				/>

				<CalcButton
					type="button"
					value="4"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					value="5"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					value="6"
					handleClick={this.props.clickHandler}
				/>

				<CalcButton
					type="button"
					value="1"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					value="2"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					value="3"
					handleClick={this.props.clickHandler}
				/>

				<CalcButton
					type="button"
					value="0"
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					className="decimal"
					value="."
					handleClick={this.props.clickHandler}
				/>
				<CalcButton
					type="button"
					className="all-clear"
					value="AC"
					handleClick={this.props.clickHandler}
				/>

				<CalcButton
					type="button"
					className="equal-sign"
					value="="
					handleClick={this.props.clickHandler}
				/>
			</div>
		);
	}
}
export default CalcKeypad;
