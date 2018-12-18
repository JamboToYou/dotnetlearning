import axios from 'axios';

const getShortCourses = (func) => {
	axios("/api/course/allShort")
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default getShortCourses;