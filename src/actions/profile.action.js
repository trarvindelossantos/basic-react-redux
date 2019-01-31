export function addProfile(profile){
    return {
        type: "ADD_PROFILE",
        payload: profile
    }
}

export function setProfile(profile_id){
    return {
        type: "SET_PROFILE",
        payload: profile_id
    }
}