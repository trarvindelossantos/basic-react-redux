import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProfile } from '../../actions/profile.action';


class ProfileCreate extends Component {


    handleChange = (e) => {
        this.setState({ 
            [e.target.name]:[e.target.value] 
        });
        
    }

    saveUser = (e) => {
        e.preventDefault();
        this.props.addProfile(this.state);
        this.props.history.push('/users');
    }

    render() {
        return (
            <form onSubmit={this.saveUser}>
                <h1>Create New Profile</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control"  name="name" onChange={ this.handleChange } />
                        </div>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Contact No.</label>
                            <input type="text" className="form-control"  name="contact" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control"  name="address" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
                &nbsp; 
                <NavLink className="btn btn-secondary" to="/users">Cancel</NavLink>
            </form>

        
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

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileCreate);