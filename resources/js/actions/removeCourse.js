import axios from 'axios';

const removeCourse = (courseId, func) => {
	axios.delete("/api/course/" + courseId)
		.then(data =>
		{
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default removeCourse;