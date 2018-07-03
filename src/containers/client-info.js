import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Item, List } from 'semantic-ui-react';

class ClientInfo extends Component {

    render(){
        if(!this.props.client) {
            return null
        } else{
            return (
                <div className = "clientInfo">

                    <Item.Group>
                        <Item>
                            <Item.Image size='small' src={this.props.client.general.avatar} />

                            <Item.Content>
                                <Item.Header>{this.props.client.general.firstName} {this.props.client.general.lastName}</Item.Header>
                                <Item.Meta>{this.props.client.job.title}</Item.Meta>
                                <Item.Meta>({this.props.client.job.company})</Item.Meta>
                                <Item.Description>

                                </Item.Description>

                                <hr/>
                                <p><List.Icon name='mail' />{this.props.client.contact.email}</p>
                                <p> <List.Icon name='phone' />{this.props.client.contact.phone}</p>

                                <hr/>
                                <p><List.Icon name='marker' />{this.props.client.address.country}, {this.props.client.address.city}</p>
                                <p><List.Icon name='street view' />{this.props.client.address.street}, {this.props.client.address.zipCode}</p>

                            </Item.Content>

                        </Item>
                    </Item.Group>
                </div>
            )
        }}
}

function mapStateToProps(state){
    return {
        client:state.active
    }
}


export default connect(mapStateToProps)(ClientInfo);