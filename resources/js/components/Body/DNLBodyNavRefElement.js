import React from 'react'

const DNLBodyNavRefElement = ({ refId, label }) => {
	return <a className="dropdown-item" href={"#" + refId}>{label}</a>
}

export default DNLBodyNavRefElement;