import axios from 'axios';

const getCourse = (id, func) => {
	axios("/api/course/get/" + id)
		.then(data =>
		{
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default getCourse;