import axios from 'axios';

const addUserProgress = (userProgress, func) => {
	axios.post("/api/userProgress", userProgress)
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		});
}

export default addUserProgress;