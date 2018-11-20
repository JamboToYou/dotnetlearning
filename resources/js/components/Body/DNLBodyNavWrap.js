import React, { Component } from 'react'

class DNLBodyNavWrap extends Component {
	render() {
		return (
			<nav id="navbar-example2" className="navbar navbar-light bg-light top">
				<a className="navbar-brand" href="#">{this.props.brand}</a>
				<ul className="nav nav-pills">
					{this.props.children}
				</ul>
			</nav>
		)
	}
}

export default DNLBodyNavWrap;