import React, { Component } from 'react';
import { } from 'react-router-dom';
import getFullCourse from '../../actions/getFullCourse';

class DNLCourseLearning extends Component {

	constructor(...args) {
		super(...args);
		this.state = {
			course: null,
			currentLesson: 0
		}
	}

	componentDidMount() {
		getFullCourse(this.props.match.params.courseId, data => {
			this.setState({
				course: data,
				currentLesson: course.chapters.find(chapter =>
					chapter.lessons.find(lesson => lesson.status === "p") !== null).lessons.find(lesson =>
						lesson.status === "p")
			})
		})
	}

	test(e) {
		console.log(e);
	}

	render() {
		return (
			<div className="dhl-content-main container pt-2 row">
				<ul id="1" className="col-2 list-group">
					<li className="list-group-item active">something</li>
					<li className="list-group-item">something</li>
					<li className="list-group-item">something</li>
					<li className="list-group-item">something</li>
					<li className="list-group-item">something</li>
					<li className="list-group-item">something</li>
					<li className="list-group-item">something</li>
				</ul>
				<div className="card col">
					<div className="card-header">
						heading
							</div>
					<div className="card-body">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet impedit nemo laboriosam quidem corrupti veniam
						unde laborum, nihil debitis! Voluptate ullam facere libero dolores amet dolorem enim ea soluta veritatis saepe?
						Doloribus amet, architecto eos beatae veniam ab exercitationem similique quasi aliquid mollitia possimus porro
						consequuntur labore. Architecto, nihil dolorem quis deserunt rerum tempore beatae, facilis eius, eveniet id
						harum
						reprehenderit! Veritatis commodi deserunt nostrum dolore labore, alias similique veniam autem sed molestiae
						molestias accusamus. Repellat itaque, dicta placeat, cupiditate in iure quasi quidem deserunt ea aliquid
						suscipit, omnis enim eveniet laborum quam. Expedita recusandae animi eveniet quasi at perspiciatis molestiae
						facere aut repellat praesentium cupiditate, ducimus, ad deserunt error totam impedit, corrupti nostrum sapiente
						tenetur vero assumenda harum aliquid? Iste quos reprehenderit quae dolores neque omnis ut doloremque eaque,
						error
						voluptatem dolor, quia saepe vel soluta veniam. Exercitationem repellat minima provident ducimus necessitatibus
						cumque velit nam quod ullam. Similique voluptatem cumque doloribus, dolorum placeat nostrum temporibus!
						Repellendus impedit modi, tempore illum unde, ex quae dolorem velit harum eos sapiente alias quis quidem
						placeat
						reprehenderit laborum dolor officia? Deserunt, recusandae enim neque eveniet sint quisquam error nihil tempore!
						Id natus nulla deleniti, laborum sit quibusdam quae doloremque numquam officia rerum, ipsa eius reprehenderit
						ea
						temporibus necessitatibus veniam! Ratione odit, necessitatibus aspernatur ipsa ut asperiores, similique quis
						harum, fugit quaerat alias consequuntur quos quibusdam laudantium sapiente fuga eaque suscipit? Tempore porro
						labore ipsam inventore! Consequatur, placeat velit voluptatibus praesentium a voluptatem molestias ipsam amet
						accusantium animi ducimus assumenda. Dicta incidunt error mollitia consectetur quidem voluptatem omnis rerum
						quaerat rem ipsum nihil commodi aliquid dolores tempore ad officia aut, perferendis fugiat iste, eligendi nam
						architecto debitis eius? Accusamus labore maiores dicta saepe quasi eveniet repudiandae exercitationem quia
						quis
						assumenda, eius iusto? Inventore placeat pariatur fugiat deleniti distinctio repellat voluptate sequi ducimus
						mollitia.
							</div>
					<div className="card-footer">
					</div>
				</div>
				<div className="col-1">
					<form action="#" method="post">
						<div class="input-group">
							<div class="input-group-prepend">
								<div class="input-group-text">
									<input type="radio" value="option1" checked={true} onChange={this.test.bind(this)} aria-label="Radio button for following text input" />
								</div>
							</div>
							<input type="text" class="form-control" aria-label="Text input with radio button" />
						</div>
						<input type="radio" value="qwer" name="1" id="1" onChange={this.test.bind(this)} />
						<input type="radio" name="1" id="2" />
						<input type="radio" name="1" id="3" />
					</form>
				</div>
			</div>
		)
	}
}

export default DNLCourseLearning
