import axios from 'axios'

const getUser = (userId, func) => {
	axios("/api/user/"+userId)
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		});
}

export default getUser;