import React from 'react'
import { Link } from 'react-router-dom'

const DNLContentCourse = ({ course }) => {
	let desc = course.description.length > 20 ? course.description.substring(0, 20) + '...' : course.description;
	console.log(course);
	return (
		<div id={course.id} className="col-6 col-md-4 col-lg-3">
			<div className="card dnl-card m-2">
				<div className="card-header">
					<Link to={"/course/" + course.id} className="btn btn-link">{course.title}</Link>
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
