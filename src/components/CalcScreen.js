import React from "react";
class CalcScreen extends React.Component {
	render() {
		return <div className="calculator-screen">{this.props.total}</div>;
	}
}
export default CalcScreen;
