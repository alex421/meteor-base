import React from 'react';
import UserEditor from '../components/UserEditor.js';



export default class NewUser extends React.Component {
    render(){
        return(
          <div className="NewUser">
            <h4 className="page-header">New User</h4>
            <UserEditor companyID={this.props.params._idCompany}/>
          </div>

        )

    }
}
