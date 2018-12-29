import React, { Component } from 'react'
import DNLBodyNavWrap from './DNLBodyNavWrap';
import DNLBodyNavRefElement from './DNLBodyNavRefElement';
import DNLBodyNavDropdown from './DNLBodyNavDropdown';

class DNLBodyNav extends Component {

	constructor(...args) {
		super(...args);
	}

	render() {
		return this.props.refs != null && (
			<DNLBodyNavWrap brand="Navbar">
				{this.props.refs.map(ref => <DNLBodyNavRefElement refId={ref.refId} label={ref.label} />)}
			</DNLBodyNavWrap>
		)
	}
}

export default DNLBodyNav;
