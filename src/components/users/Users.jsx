import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {

    render() {
        return (
            <div className="col-md-12">
                <NavLink className="btn btn-primary" to="/users/create">Create</NavLink>
                <br/><br/>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Contact No</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                         this.props.profiles.map( (profile) => {
                            return (
                                <tr key={profile.id}>
                                    <td>{profile.name}</td>
                                    <td>{profile.contact}</td>
                                    <td>{profile.address}</td>
                                    <td>
                                        <NavLink to={`/users/${profile.id}`} className="btn btn-primary btn-sm">View</NavLink>
                                    </td>
                                </tr>
                            );
                         })
                     }       
                    </tbody>
                </table>
                
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        profiles: state.profile.profiles
    }
}

export default connect(mapStateToProps)(Profile);