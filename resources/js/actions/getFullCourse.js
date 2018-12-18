import axios from 'axios';

const getFullCourse = (courseId, func) => {
	axios("/api/course/getFull/" + courseId)
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default getFullCourse;