import axios from 'axios';

const addChapter = (chapter, func) => {
	axios.post("/api/chapter", chapter)
		.then(data =>
		{
			console.log(data);
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default addChapter;