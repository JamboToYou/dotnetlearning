import React from 'react'
import { Link } from 'react-router-dom'

const DNLContentCourse = ({ course }) => {
	let desc = course.description.length > 200 ? course.description.substring(0, 200) + '...' : course.description;
	return (
		<div id={course.id} className="col-6">
			<div className="card dnl-card m-2">
				<div className="card-header">
					<Link to={"/course:" + course.id} className="btn btn-link">{course.title}</Link>
				</div>
				<div className="card-body">
					<p>{desc}</p>
				</div>
				<div className="card-footer">
					<Link to={"/user/"+course.author_id} className="btn btn-sm btn-primary rounded-top">{course.author.first_name}</Link>
				</div>
			</div>
		</div>
	);
}

export default DNLContentCourse;
