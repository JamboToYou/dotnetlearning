import React from 'react'
import { Link } from 'react-router-dom'

const DNLContentCourse = ({ course }) => {
	let desc = course.description.length > 20 ? course.description.substring(0, 20) + '...' : course.description;
	return (
		<div id={course.id} className="card col-6 col-md-4 col-lg-3 p-0 dhl-card">
			<div className="card-header">
				<Link to={"/course/"+course.id} className="btn btn-link">{course.title}</Link>
			</div>
			<div className="card-body">
				<p>{desc}</p>
				<span className="badge badge-pill">{course.author}</span>
			</div>
		</div>
	);
}

export default DNLContentCourse;
