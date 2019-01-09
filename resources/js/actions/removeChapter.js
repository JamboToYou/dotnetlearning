import axios from 'axios';

const removeChapter = (chapterId, func) => {
	axios.delete("/api/chapter/" + chapterId)
		.then(data =>
		{
			func(data.data.data);
		})
		.catch(error => {
			func("error");
		})
}

export default removeChapter;