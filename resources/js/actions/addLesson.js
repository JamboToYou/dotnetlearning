import axios from 'axios';

const addLesson = (lesson, func) => {
	axios.post("/api/lesson", lesson)
		.then(data =>
		{
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default addLesson;