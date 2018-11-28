import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DNLNavbar from './Navbar/DNLNavbar';
import DNLSidebar from './Sidebar/DNLSidebar';
import DNLBody from './Body/DNLBody';

export default class DNLMain extends Component {
	render() {
		return (
			<div className="container-fluid">
				<DNLNavbar />
				<div className="row justify-content-center position-relative">
					<DNLSidebar />
					<DNLBody />
				</div>
			</div>
		);
	}
}

if (document.getElementById('root')) {
	ReactDOM.render
	(
		<DNLMain />,
		document.getElementById('root')
	);
}
