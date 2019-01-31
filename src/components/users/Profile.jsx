import React from 'react';
import {NavLink} from 'react-router-dom'

const Profile = (props) => {
    return (
        
        <div className="card">
            
            <div className="card-body">
                <h5 className="card-title">{props.profile.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Contact: {props.profile.name}</li>
                <li className="list-group-item">Address: {props.profile.address}</li>
            </ul>
            <div className="card-body">
                <NavLink to="/users" className="card-link">Back</NavLink>
            </div>
        </div>

    );
}

export default Profile;