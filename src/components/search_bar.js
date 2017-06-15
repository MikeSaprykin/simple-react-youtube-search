import React, { Component } from 'react';

export class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' }
    }

    render() {

        const { term } = this.state;

        return (
            <div className="search-bar">
                <input
                    value={term}
                    onChange={this.onInputChange.bind(this)}/>
            </div>
        );
    };

    onInputChange({ target }) {
        const { value } = target;
        this.setState({ term: value});
        this.props.onSearchTermChange(value);
    }
}
