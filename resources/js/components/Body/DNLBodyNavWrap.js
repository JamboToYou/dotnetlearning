import React, { Component } from 'react'

class DNLBodyNavWrap extends Component {
	render() {
		return (
			<nav id="dnl-body-nav" className="navbar navbar-light bg-light top">
				<a className="navbar-brand" href="#">{this.props.brand}</a>
				<ul className="nav nav-pills">
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
							aria-expanded="false">Dropdown</a>
						<div class="dropdown-menu">
							{this.props.children}
						</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default DNLBodyNavWrap;