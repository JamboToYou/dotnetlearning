import React from 'react';

class DNLSidebar extends React.Component {
	render() {
		return (
			<div className="col-2">
				<ul className="m-2 btn-group-vertical p-0 w-100">
					<button className="btn btn-light m-1 w-100">First</button>
					<button className="btn btn-light m-1 w-100">Second</button>
					<button className="btn btn-light m-1 w-100" type="button" data-toggle="collapse" data-target="#multiCollapseExample2"
						aria-expanded="false" aria-controls="multiCollapseExample2">
						Toggle second element
                            </button>
					<ul className="collapse p-0 m-2 w-100" id="multiCollapseExample2">
						<button className="btn btn-light m-1 w-100 m-1">Second</button>
						<button className="btn btn-light m-1 w-100 m-1">Second</button>
						<button className="btn btn-light m-1 w-100 m-1">Second</button>
					</ul>
					<button className="btn btn-light m-1 w-100">Third</button>
					<button className="btn btn-light m-1 w-100">Fourth</button>
					<button className="btn btn-light m-1 w-100">Fifth</button>
				</ul>
			</div>
		)
	}
}

export default DNLSidebar;