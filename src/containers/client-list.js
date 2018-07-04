import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

import {Image, List} from 'semantic-ui-react';

import Search from './search';
import {select} from '../actions/select';
import {httpGet} from '../actions/http-get';

class ClientList extends Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.state = {text:''};
    }

    componentWillMount(){
        console.log('componentWillMount start');
        let that = this.props;
        that.httpGet([])

        axios.get('/clients.json').then(function (response) {
            that.httpGet(response.data)
            console.log(that.httpGet(response.data));
        }).catch(function (error) {
            that.getClients(null)
            console.log(error);
        });
        
        console.log('componentWillMount end');
    }

    search(text){
        this.setState({text:text});
    }

    render() {
        let {text} = this.state;
        if (this.props.clients != null)
        return (
            <div className="left floated">
                <Search search={this.search}/>
                <List selection verticalAlign='middle' floated='left'>
                    {
                        this.props.clients.filter(forFilter(text))
                            .map((client, index) => (
                                <List.Item floated='left' key={index+1} onClick={()=>this.props.select(client)}>
                                    <Image avatar src={client.general.avatar} />
                                    <List.Content>
                                        <List.Header>{client.general.firstName} {client.general.lastName}</List.Header>
                                        {client.job.title}
                                    </List.Content>
                                </List.Item>
                            ))
                    }
                </List>
            </div>
        )
        else
            return (
                <div className="left floated">
                    Loading...
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({select:select, httpGet:httpGet}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientList);