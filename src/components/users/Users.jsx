import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {addProfile} from '../../actions/profile.action';

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
                                        <NavLink to={`/profile/${profile.id}`} className="btn btn-primary btn-sm">View</NavLink>
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

const  mapDispatchToProps = (dispatch) => {
    return {
        addProfile: (profile) => {
            dispatch(addProfile(profile));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);