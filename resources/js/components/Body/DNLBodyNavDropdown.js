import React from 'react'

const DNLBodyNavDropdownElement = ({ refId, label }) => <a className="dropdown-item" href={"#" + refId}>{label}</a>;

const DNLBodyNavDropdown = ({ title, elements }) => {
	return (
		<li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
				aria-haspopup="true" aria-expanded="false">{title}</a>
			<div className="dropdown-menu">
				{elements.map((el, i) => <DNLBodyNavDropdownElement {...el} key={i} />)}
			</div>
		</li>
	)
}

export default DNLBodyNavDropdown;
