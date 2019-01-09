import React, { Component } from 'react'
import DNLBodyNavRefElement from './DNLBodyNavRefElement';

class DNLBodyNavWrap extends Component {
	render() {
		let coursesnav = (this.props.hasOwnProperty('refs') && this.props.refs !== null) &&
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
					aria-expanded="false">Навигация по курсам</a>
				<div className="dnl-body-nav-dropdown-body dropdown-menu dropdown-menu-right">
					{this.props.refs.map(ref => <DNLBodyNavRefElement key={ref.refId} refId={ref.refId} label={ref.label} />)}
				</div>
			</li>

		return (
			<nav id="dnl-body-nav" className="navbar navbar-light bg-light top">
				<a className="navbar-brand" href="#">{this.props.brand}</a>
				<ul className="nav nav-pills">
					{this.props.children}
					{coursesnav}
				</ul>
			</nav>
		)
	}
}

export default DNLBodyNavWrap;