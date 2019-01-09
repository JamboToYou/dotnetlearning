import axios from 'axios';

const getCourseToLearn = (course_id, user_id, func) => {
	axios.post('/api/course/courseToLearn', { course_id, user_id })
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default getCourseToLearn;