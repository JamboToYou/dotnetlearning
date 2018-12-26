import React, { Component } from 'react'
import DNLBodyNavWrap from './DNLBodyNavWrap';
import DNLBodyNavRefElement from './DNLBodyNavRefElement';
import DNLBodyNavDropdown from './DNLBodyNavDropdown';

class DNLBodyNav extends Component {

	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<DNLBodyNavWrap brand="Navbar">
				<DNLBodyNavRefElement refId="fat" label="fat" />
				<DNLBodyNavRefElement refId="mdo" label="mdo" />
			</DNLBodyNavWrap>
		)
	}
}

export default DNLBodyNav;