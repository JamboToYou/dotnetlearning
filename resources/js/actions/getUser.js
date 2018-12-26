import axios from 'axios'

const getUser = (func) => {
	axios("/api/user")
		.then(data => {
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		});
}

export default getUser;