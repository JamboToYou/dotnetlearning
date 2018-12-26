import React, { Component } from 'react'

class DNLSidebarWrap extends Component {
	render() {
		return (
			<div className="col-12 col-md-3 col-lg-2 collapse" id="dhl-side_navigation">
				<ul className="m-2 btn-group-vertical p-0 w-100">
					{this.props.children}
				</ul>
			</div>
		)
	}
}

export default DNLSidebarWrap
