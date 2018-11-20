import React, { Component } from 'react'
import DNLBodyNavWrap from './DNLBodyNavWrap';
import DNLBodyNavRefElement from './DNLBodyNavRefElement';
import DNLBodyNavDropdown from './DNLBodyNavDropdown';

class DNLBodyNav extends Component {

	constructor() {
		super();
		this.state = {
			testEls: [
				{
					refId: "one",
					label: "one"
				}, {
					refId: "two",
					label: "two"
				}, {
					refId: "three",
					label: "three"
				}, {
					refId: "four",
					label: "four"
				}
			]
		}
	}

	render() {
		return (
			<DNLBodyNavWrap brand="Navbar">
				<DNLBodyNavRefElement refId="fat" label="fat" />
				<DNLBodyNavRefElement refId="mdo" label="mdo" />
				<DNLBodyNavDropdown title="Nav" elements={this.state.testEls} />
			</DNLBodyNavWrap>
		)
	}
}

export default DNLBodyNav;