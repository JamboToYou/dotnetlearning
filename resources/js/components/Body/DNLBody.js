import React from 'react';
import { Route, Switch } from 'react-router-dom'
import DNLBodyNav from './DNLBodyNav';

class DNLBody extends React.Component {
	render() {
		return (
			<div className="col content">
				<DNLBodyNav />
				<Switch>
					<Route path="/" render={() => (
						<DNLContentCourses />
					)}/>
				</Switch>
			</div>
		)
	}
}

export default DNLBody;