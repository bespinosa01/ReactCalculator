import React from "react";
class CalcScreen extends React.Component {
	render() {
		//		console.log(this.props);
		return <div className="calculator-screen">{this.props.input}</div>;
	}
}
export default CalcScreen;
