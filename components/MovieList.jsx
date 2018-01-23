import React, { PropTypes, Component } from 'react'

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		console.log(event.target.value)
		//console.log(event.target.value.replace(' ','+'));
		this.props.onSearchChange(event.target.value.replace(' ','+'));
	}
	render() {
		const appendMovies = () => {
			if(this.props.movies){
				return this.props.movies.map((movie,index) => {
					return (
						<li key={movie.imdbID}>{movie.Title}</li>
					)
				})
			} else {
				return (
					<p>Movie does not exist</p>
				)
			}
		}

		return (
			<div>
				<input type="text" onChange={this.onSearch}/>
				<h1> MovieList </h1>
				{this.props.requestPending && 				
					<h3> Request Pending </h3>
			 	}

				{!this.props.requestPending && 
					<div>			
						<ul>
							{appendMovies()}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

MovieList.propTypes = {
	onSearchChange: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	onDidMount: PropTypes.func
};

export default MovieList;