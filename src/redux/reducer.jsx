/* Redux store  */
export default function reducer(state = {
    user: {
        email: '',
        isAdmin: ''
    }
}, action) {
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                user: action.payload
            };
        case "LOGOUT":
            return {
                ...state,
                user: {
                    email: '',
                    isAdmin: ''
                }
            };
        default:
            return state;
    }
}