import React, { Component } from 'react'; // need to do this even though we don't explicitly use it in this file, because it gets used after transpiling

// Old functional component - can do better with class component
// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }; // we only ever change our state like this in a constructor
    }

    // every class component MUST have a render method
    render() {
        return (
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;