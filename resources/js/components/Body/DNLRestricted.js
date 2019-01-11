import React from 'react';
import { Link } from 'react-router-dom';

const DNLRestricted = ({ message }) => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{message}</h1>
			<p className="lead">Выполнить операцию невозможно. Свяжитесь с админами чтобы решить этот вопрос</p>
			<hr className="my-4" />
			<Link to="/" className="btn btn-primary btn-lg">На главную</Link>
		</div>
	)
}

export default DNLRestricted
