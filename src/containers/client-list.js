import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Image, List} from 'semantic-ui-react';

import Search from './search';

class ClientList extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.state = {text:''};
    }

    search(text){
        this.setState({text:text});
    }

    render() {
        let {text} = this.state;
        return (
            <div className="left floated">
                <Search search={this.search}/>
                <List selection verticalAlign='middle' floated='left'>
                    {
                        this.props.clients.filter(forFilter(text))
                            .map((client, index) => (
                                <List.Item floated='left' key={index+1}>
                                    <Image avatar src={client.general.avatar} />
                                    <List.Content>
                                        <List.Header>{client.general.firstName} {client.general.lastName}</List.Header>
                                        {client.job.title}
                                    </List.Content>
                                </List.Item>
                            )
                        )
                    }
                </List>
            </div>
        )
    }
}

function forFilter(text){
    return (x) => x.general.firstName.toLowerCase().includes(text.toLowerCase())  || x.general.lastName.toLowerCase().includes(text.toLowerCase());
}

function mapStateToProps(state){
    return {
        clients:state.clients
    }
}

export default connect(mapStateToProps)(ClientList);