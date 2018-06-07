import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term:  '' }
	}
	render (){
		return(
			<div className="search-bar">
			<input 
				value={this.state.term}
				onChange={event => this.handleInputChange(event.target.value)} />
			</div>
			);
	}

	handleInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;

//functional components act as functions. Data gets inputed, then function calculates and outputs
//class components is aware of itself since it has been rendered