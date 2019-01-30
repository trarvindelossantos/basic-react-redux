import uuid from 'uuid';

const profileReducer = (state = {
    id: "",
    name: "",
    contact: "",
    address: "",
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
        default:
             return state
    }
    return state;
};

export default profileReducer;