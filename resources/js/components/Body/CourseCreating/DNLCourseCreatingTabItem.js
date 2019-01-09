import React from 'react';

const DNLCourseCreatingTabItem = ({ active, mainLabel, title }) =>
	<li className="nav-item" >
		<a className={"nav-link" + (active ? " active" : "")} id={"dnl-creating-tab-" + mainLabel} data-toggle="tab" role="tab"
			href={"#dnl-creating-" + mainLabel} aria-controls={"dnl-creating-" + mainLabel} aria-selected="true">{title}</a>
	</li>

export default DNLCourseCreatingTabItem;