import React from 'react';

const DNLCourseCreatingContentInput = ({ label, mainId, annotation, inputName, onChangeAction, type }) =>
	<div className="form-group">
		<label htmlFor={mainId}>{label}</label>
		<input type={type} className="form-control" id={mainId} aria-describedby={mainId + "Help"} name={inputName} onChange={onChangeAction} />
		<small id={mainId + "Help"} className="form-text text-muted">{annotation}</small>
	</div>

export default DNLCourseCreatingContentInput;