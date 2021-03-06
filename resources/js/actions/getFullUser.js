import axios from 'axios';

const getFullUser = (id, func) => {
	axios("/api/user/full/" + id)
		.then(data =>
		{
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default getFullUser;