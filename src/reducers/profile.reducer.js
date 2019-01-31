import uuid from 'uuid';


const profileReducer = (state = {
    selected_profile: null,
    isLoaded: false,
    profiles: [
        {
            id: uuid.v4(),
            name: "Jon Snow",
            contact: "09123456789",
            address: "Winterfell Castle"
        },
        {
            id: uuid.v4(),
            name: "Sansa Stark",
            contact: "09123456789",
            address: "Winterfell Castle"
        },
        {
            id: uuid.v4(),
            name: "Arya Stark",
            contact: "09123456789",
            address: "Winterfell Castle"
        }
    ]
}, action) => {
    switch (action.type) {
        case "ADD_PROFILE":
            let payload = {
                id: uuid.v4(),
                name: action.payload.name,
                contact: action.payload.contact,
                address: action.payload.address
            }
            state = {
                ...state,
                profiles: [
                    ...state.profiles,
                    payload
                ]
            }
            break;
        case "SET_PROFILE":
           state = {
               ...state,
               isLoaded:false,
               selected_profile: null
           }
            const profile = state.profiles.find( (profile) => {
                if (action.payload === profile.id) {
                    return {
                        id: profile.id,
                        name: profile.name,
                        contact: profile.contact,
                        address: profile.address
                    };
                }
                return null;
            });
            
            state = {
                ...state,
                isLoaded: true,
                selected_profile: profile
            };
            
            break;
        default:
             return state
    }
    
    return state;
};

export default profileReducer;