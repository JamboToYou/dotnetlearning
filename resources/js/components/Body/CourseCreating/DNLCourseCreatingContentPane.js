import React from 'react';

const DNLCourseCreatingContentPane = ({ active, mainLabel, title, children }) =>
	<div className={"tab-pane fade card" + (active ? " show active" : "")} id={"dnl-creating-" + mainLabel} role="tabpanel" aria-labelledby={"dnl-creating-tab-" + mainLabel}>
		<div className="card-header">
			<h3>{title}</h3>
		</div>
		{children}
	</div>

export default DNLCourseCreatingContentPane;