import axios from 'axios';

const getCourses = (func) => {
	axios('/api/course/all')
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default getCourses;