import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import DNLCourseCreatingTabs from './DNLCourseCreatingTabs';
import DNLCourseCreatingTabItem from './DNLCourseCreatingTabItem';
import DNLCourseCreatingContent from './DNLCourseCreatingContent';
import DNLCourseCreatingContentPane from './DNLCourseCreatingContentPane';
import DNLCourseCreatingContentInput from './DNLCourseCreatingContentInput';
import DNLCourseCreatingContentTextarea from './DNLCourseCreatingContentTextarea';
import addCourse from '../../../actions/addCourse';
import addChapter from '../../../actions/addChapter';
import addLesson from '../../../actions/addLesson';

const propNames = [
	"messagePrefix",
	"addCourseResult",
	"addChapterResult",
	"addLessonResult",
	"addTestResult",
	"courseTitle",
	"courseDesc",
	"chapterCourseId",
	"chapterTitle",
	"chapterDesc",
	"testId",
	"testKey",
	"lessonTitle",
	"lessonChapterId",
	"lessonBody",
];

class DNLCourseCreating extends Component {

	constructor(...args) {
		super(...args);
		this.resetValues = this.resetValues.bind(this);

		this.state = {
			messagePrefix: "",
			addCourseResult: "",
			addChapterResult: "",
			addLessonResult: "",
			addTestResult: "",
			courseTitle: "",
			courseDesc: "",
			chapterCourseId: "",
			chapterTitle: "",
			chapterDesc: "",
			testId: "",
			testKey: "",
			lessonTitle: "",
			lessonChapterId: "",
			lessonBody: "",
		}
	}

	onChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	resetValues() {
		propNames.forEach(value => {
			this.setState({ [value]: "" });
		});
	}

	onCourseCreateClick(e) {
		e.preventDefault();
		addCourse({
			author_id: this.props.currentUser.id,
			title: this.state.courseTitle,
			description: this.state.courseDesc
		}, data => {
			this.resetValues();
			this.setState({
				addCourseResult: data,
				messagePrefix: "Курс успешно добавлен с ID"
			});
		});
	}

	onChapterCreateClick(e) {
		e.preventDefault();
		addChapter({
			user_id: this.props.currentUser.id,
			course_id: this.state.chapterCourseId,
			title: this.state.chapterTitle,
			description: this.state.chapterDesc,
		}, data => {
			this.resetValues();
			this.setState({
				addCourseResult: data,
				messagePrefix: "Глава успешно добавлена в курс"
			});
		});

	}

	onLessonCreateClick(e) {
		e.preventDefault();
		addLesson({
			user_id: this.props.currentUser.id,
			chapter_id: this.state.lessonChapterId,
			title: this.state.lessonTitle,
			lesson_body: this.state.lessonBody,
		}, data => {
			this.resetValues();
			this.setState({
				addCourseResult: data,
				messagePrefix: "Урок успешно добавлен в курс"
			});
		});
	}

	render() {
		let message = "";

		if (this.state.addCourseResult !== "" && this.state.addCourseResult !== "error") {
			message = (
				<div className="alert alert-success" role="alert">
					{this.state.messagePrefix} <Link to={"/course:" + this.state.addCourseResult.id}>{this.state.addCourseResult.id}</Link>!
				</div>
			)
		} else if (this.state.addCourseResult === "error") {
			message = (
				<div className="alert alert-danger" role="alert">
					Ошибка при добавлении
				</div>
			)
		}

		if (this.props.currentUser !== "empty") {
			if (["admin", "tutor"].includes(this.props.currentUser.role)) {
				return (
					<div className="dhl-container-main container-fluid justify-content-center row">
						<div className="col-12 col-md-10 col-lg-8">
							<DNLCourseCreatingTabs>
								<DNLCourseCreatingTabItem active mainLabel="course" title="Курс" />
								<DNLCourseCreatingTabItem mainLabel="chapter" title="Глава" />
								<DNLCourseCreatingTabItem mainLabel="lesson" title="Урок" />
							</DNLCourseCreatingTabs>
							<DNLCourseCreatingContent>
								<DNLCourseCreatingContentPane active mainLabel="course" title="Создание/редактирование курса">
									<div className="card-body">
										<DNLCourseCreatingContentInput
											type="text"
											label="Заголовок курса"
											mainId="creatingCourseTitle"
											annotation="Сделайте заголовок как можно короче"
											inputName="courseTitle"
											onChangeAction={this.onChange.bind(this)} />
										<DNLCourseCreatingContentTextarea
											label="Описание курса"
											mainId="creatingCourseDescription"
											annotation="Опишите курс как можно подробнее"
											inputName="courseDesc"
											onChangeAction={this.onChange.bind(this)} />
										{message}
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" onClick={this.onCourseCreateClick.bind(this)}>Добавить</button>
									</div>
								</DNLCourseCreatingContentPane>
								<DNLCourseCreatingContentPane mainLabel="chapter" title="Создание/редактирование главы">
									<div className="card-body">
										<DNLCourseCreatingContentInput
											type="text"
											label="Заголовок главы"
											mainId="creatingChapterTitle"
											annotation="Сделайте заголовок как можно короче"
											inputName="chapterTitle"
											onChangeAction={this.onChange.bind(this)} />
										<DNLCourseCreatingContentTextarea
											label="Описание главы"
											mainId="creatingChapterDescription"
											annotation="Опишите главу как можно подробнее"
											inputName="chapterDesc"
											onChangeAction={this.onChange.bind(this)} />
										<DNLCourseCreatingContentInput
											type="number"
											label="ID курса"
											mainId="creatingChapterCourseId"
											annotation="Укажите ID курса, в который хотитк добавить главу"
											inputName="chapterCourseId"
											onChangeAction={this.onChange.bind(this)} />
										{message}
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" onClick={this.onChapterCreateClick.bind(this)}>Добавить</button>
									</div>
								</DNLCourseCreatingContentPane>
								<DNLCourseCreatingContentPane mainLabel="lesson" title="Создание/редактирование урока">
									<div className="card-body">
										<DNLCourseCreatingContentInput
											type="text"
											label="Заголовок урока"
											mainId="creatingLessonTitle"
											annotation="Тема урока"
											inputName="lessonTitle"
											onChangeAction={this.onChange.bind(this)} />
										<DNLCourseCreatingContentTextarea
											label="Тело урока"
											mainId="creatingLessonBody"
											annotation="Основная информация по теме урока"
											inputName="lessonBody"
											onChangeAction={this.onChange.bind(this)} />
										<DNLCourseCreatingContentInput
											type="number"
											label="ID главы"
											mainId="creatingLessonChapterId"
											annotation="Укажите ID главы вашего курса"
											inputName="lessonChapterId"
											onChangeAction={this.onChange.bind(this)} />
										{message}
									</div>
									<div className="card-footer">
										<button type="button" className="btn btn-primary" onClick={this.onLessonCreateClick.bind(this)}>Добавить</button>
									</div>
								</DNLCourseCreatingContentPane>
							</DNLCourseCreatingContent>
						</div>
					</div>
				)
			} else return <Redirect to="/" />;
		} else return <Redirect to="/" />;
	}
}

/*

<div className="container-fluid dhl-container-main justify-content-center row">
				<div className="card col-12 col-md-8 col-lg-6 p-0">
					<div className="card-header">
						<h3>Создание/редактирование курса</h3>
					</div>
					<div className="card-body">
						<div className="form-group">
							<label htmlFor="creatingCourseTitle">Заголовок курса</label>
							<input type="text" className="form-control" id="creatingCourseTitle" aria-describedby="creatingCourseTitleHelp" name="courseTitle"name="courseTitle" onChange={this.onChange.bind(this)}/>
							<small id="creatingCourseTitleHelp" className="form-text text-muted">Сделайте заголовок как можно короче</small>
						</div>
						<div className="form-group">
							<label htmlFor="creatingCourseDescription">Описание курса</label>
							<input type="text" className="form-control" id="creatingCourseDescription" aria-describedby="creatingCourseDescriptionHelp" name="courseDesc" onChange={this.onChange.bind(this)}/>
							<small id="creatingCourseDescriptionHelp" className="form-text text-muted">Опишите курс как можно подробнее</small>
						</div>
						<div className="card-footer">
							<div className="form-group">
								<label htmlFor="creatingChapterTitle">Заголовок главы</label>
								<input type="text" className="form-control" id="creatingChapterTitle" aria-describedby="creatingChapterTitleHelp" name="chapterTitle" onChange={this.onChange.bind(this)}/>
								<small id="creatingChapterTitleHelp" className="form-text text-muted">Сделайте заголовок как можно короче</small>
							</div>
							<div className="form-group">
								<label htmlFor="creatingChapterDescription">Описание главы</label>
								<input type="text" className="form-control" id="creatingChapterDescription" aria-describedby="creatingChapterDescriptionHelp" name="chapterDesc" onChange={this.onChange.bind(this)}/>
								<small id="creatingChapterDescriptionHelp" className="form-text text-muted">Опишите курс как можно подробнее</small>
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div className="form-group">
							<label htmlFor="creatingLessonTitle">Заголовок урока</label>
							<input type="text" className="form-control" id="creatingLessonTitle" aria-describedby="creatingLessonTitleHelp" name="lessonTitle" onChange={this.onChange.bind(this)}/>
							<small id="creatingLessonTitleHelp" className="form-text text-muted">Тема урока</small>
						</div>
						<div className="form-group">
							<label htmlFor="creatingChapterDescription">Тело урока</label>
							<textarea type="text" className="form-control" id="creatingChapterDescription" aria-describedby="creatingChapterDescriptionHelp" name="lessonBody" onChange={this.onChange.bind(this)}/>
							<small id="creatingChapterDescriptionHelp" className="form-text text-muted">Основная информация по теме урока</small>
						</div>
					</div>
				</div>
			</div>

*/

export default DNLCourseCreating
