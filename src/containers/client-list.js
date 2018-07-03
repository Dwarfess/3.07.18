import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Image, List} from 'semantic-ui-react';

class ClientList extends Component {
    render() {
        return (
            <div className="left floated">

                <List selection verticalAlign='middle' floated='left'>
                    {
                        this.props.clients.map((client, index) => (
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

function mapStateToProps(state){
    return {
        clients:state.clients
    }
}

export default connect(mapStateToProps)(ClientList);