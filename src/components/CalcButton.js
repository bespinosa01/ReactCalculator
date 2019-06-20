import React from "react";

import PropTypes from "prop-types";

class CalcButton extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		orange: PropTypes.bool,
		wide: PropTypes.bool,
		clickHandler: PropTypes.func
	};
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
