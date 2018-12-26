import React from 'react';
import { Link } from 'react-router-dom';
import DNLSidebarWrap from './DNLSidebarWrap';

const DNLSidebarLink = ({ url, title }) =>
	<Link to={url} className="btn btn-light m-1 w-100">{title}</Link>
class DNLSidebar extends React.Component {
	render() {
		return (
			<DNLSidebarWrap>
				<DNLSidebarLink url="/course/create" title="Create course" />
				<DNLSidebarLink url="/course/create" title="Another course" />
				<DNLSidebarLink url="/course/create" title="Create course" />
				<DNLSidebarLink url="/course/create" title="Create course" />
				<DNLSidebarLink url="/course/create" title="Create course" />
				<DNLSidebarLink url="/course/create" title="Create course" />
			</DNLSidebarWrap>
		)
	}
}

export default DNLSidebar;