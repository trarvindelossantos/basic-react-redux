import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setProfile } from '../../actions/profile.action';
import Profile from './Profile'

class ProfileView extends Component {
    constructor(){
        super();
        this.isLoaded = false;
        this.state = {
            profile: {}
        }
    }
    
    shouldComponentUpdate(nextProps){
        if (!nextProps.selected_profile) {
            this.isLoaded = false;
            this.props.history.push('/users');
            return true;
        }
        if (this.props.selected_profile !== nextProps.selected_profile){
            this.isLoaded = true;
            console.log(`isLoaded: ${this.isLoaded}`)
            return true
        }
        return false
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.setProfile(id);
        
    }

    render() {
        return (
            <div>
                {this.isLoaded ? (<Profile profile={this.props.selected_profile} />  ) : (<h1>Loading Profile</h1>)}
                             
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return {
        selected_profile: state.profile.selected_profile,
        isLoaded: state.profile.isLoaded
    }
}

const  mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (id) => {
            dispatch(setProfile(id));
        }
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(ProfileView)