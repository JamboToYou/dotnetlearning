import axios from 'axios';

const addCourse = (course, func) => {
	axios.post("/api/course", course)
		.then(data =>
		{
			console.log(data);
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default addCourse;