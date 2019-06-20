import React from "react";
import CalcButton from "./CalcButton";
import PropTypes from "prop-types";

class CalcKeypad extends React.Component {
	// handleClick = () => {
	// 	console.log(this.props.value);
	// };
	static propTypes = {
		clickHandler: PropTypes.func
	};

	handleClick = value => {
		this.props.clickHandler(value);
	};

	render() {
		return (
			<div className="calculator-keys">
				<CalcButton type="button" className="operator" value="+" />
				<CalcButton type="button" className="operator" value="-" />
				<CalcButton type="button" className="operator" value="*" />
				<CalcButton type="button" className="operator" value="/" />

				<CalcButton
					type="button"
					value="7"
					handleClick={this.handleClick}
				/>
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
				<CalcButton type="button" className="all-clear" value="AC" />

				<CalcButton type="button" className="equal-sign" value="=" />
			</div>
		);
	}
}
export default CalcKeypad;
