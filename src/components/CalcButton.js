import React from "react";

class CalcButton extends React.Component {
	render() {
		return (
			<button
				className={this.props.className}
				type={this.props.type}
				value={this.props.value}
			>
				{this.props.value}
			</button>
		);
	}
}
export default CalcButton;
