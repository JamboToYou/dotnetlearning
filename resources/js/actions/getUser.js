import axios from 'axios'

const getUser = () =>
	axios({method: "GET", url: "/api/user", headers: { "Accept": "application/json", "Contetnt-Type": "application/json" }});

export default getUser;