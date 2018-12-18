import React from 'react'
import { Link } from 'react-router-dom'

const DNLContentCoursesChapter = ({ title }) =>
	<li className="list-group-item list-group-item-active">{title}</li>;

const DNLContentCoursesArticle = ({ course, key }) => (
	<div className="card-header pb-5" data-toggle="collapse" data-target={"#" + "crs_ch_" + course.id} aria-controls={"crs_ch_" + course.id} aria-expanded="false">
		<div className="card-header-pills align-items-center">
			<img src={course.imgUrl} alt="image" className="img-thumbnail position-relative d-flex dhl-card_img float-left m-5" />
		</div>
		<div className="card-title">
			<Link to={"/course/" + course.id} className="btn btn-light justify-content-center"><h2 className="align-middle"><strong>{course.title}</strong></h2></Link>
		</div>
		<p className="card-text pb-3">{course.description}
			<button className="m-1 btn btn-outline-primary float-right">Enter in course</button>
		</p>
	</div>
);

const DNLContentCourse = ({ course }) => {
	return (
		<li id={course.id} className="dhl-card">
			<DNLContentCoursesArticle course={course}/>
			<ul className="collapse list-group" id={"crs_ch_" + course.id}>
				{course.chapters.map(ch => <DNLContentCoursesChapter key={ch.id} title={ch.title} />)}
			</ul>
		</li>
	);
}

export default DNLContentCourse;
