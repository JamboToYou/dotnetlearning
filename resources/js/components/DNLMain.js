import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import DNLNavbar from './Navbar/DNLNavbar';
import DNLSidebar from './Sidebar/DNLSidebar';
import DNLBody from './Body/DNLBody';

export default class DNLMain extends Component {
	render() {
		return (
			<div className="container-fluid p-0 pt-2">
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
		<BrowserRouter>
			<DNLMain />
		</BrowserRouter>,
		document.getElementById('root')
		);
}
