import React, { Component } from 'react'

class ProfileView extends Component {

    
    componentDidMount () {
        const { match: { params } } = this.props;
        console.log(params.id)
    }

    render() {
        return (
            <div>
                <h1>Viewing Profile</h1>
            </div>
        )
    }
}

export default  ProfileView