import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }

    search(event){
        this.props.search(event.target.value);
    }

    render() {
        return (
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" className="prompt" onChange={this.search}/>
                    <i aria-hidden="true" className="search icon"></i>
                </div>
            </div>
        )
    }
}

export default Search;