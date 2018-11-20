import React from 'react'

const DNLBodyNavRefElement = ({ refId, label }) => {
	return (
		<li className="nav-item">
			<a className="nav-link" href={"#" + refId}>{label}</a>
		</li>
	)
}

export default DNLBodyNavRefElement;