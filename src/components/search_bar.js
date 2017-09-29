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
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;