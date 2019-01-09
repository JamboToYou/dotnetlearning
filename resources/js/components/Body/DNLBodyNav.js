import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DNLBodyNavWrap from './DNLBodyNavWrap';
import DNLBodyNavRefElement from './DNLBodyNavRefElement';
import DNLBodyNavDropdown from './DNLBodyNavDropdown';

const DNLBodyNavElement = ({ title, link }) =>
	<Link to={link} className="nav-item btn btn-primary" >{title}</Link>

class DNLBodyNav extends Component {

	constructor(...args) {
		super(...args);
	}

	render() {

		let createCourse = null;
		if (this.props.currentUser !== undefined && this.props.currentUser !== "empty") {
			if (this.props.currentUser.role === "tutor" ||
			this.props.currentUser.role === "admin") {
				createCourse = <DNLBodyNavElement link="/course/create" title="Создать курс" />
			}
		}

		return (
			<DNLBodyNavWrap brand="" refs={this.props.refs}>
				{createCourse}
			</DNLBodyNavWrap>
		)
	}
}

export default DNLBodyNav;
