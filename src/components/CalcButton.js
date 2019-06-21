import React from "react";

class CalcButton extends React.Component {
	handleClick = () => {
		console.log(this.props);
		this.props.handleClick(this.props.value);
	};
	render(props) {
		return (
			<button
				className={this.props.className}
				type={this.props.type}
				value={this.props.value}
				//onClick={() => props.handleClick(props.children)}
				onClick={this.handleClick}
			>
				{this.props.value}
			</button>
		);
	}
}

export default CalcButton;
