import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      term: ''
    };
  }
  
  render() {
    return(
      <div className='search-bar'>
        <input 
          name='term' 
          onChange={(event) => this.onInputChange(event.target.value)}
          value={this.state.term} 
        />
      </div>
    );
  }
  
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChanged(term);
  }
}

export default SearchBar;