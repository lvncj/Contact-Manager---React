
const INITIAL_STATE = {
    name: '',
    phone: '',
    email: '',
}
// TODO
const contactReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.key]: action.data
            };
        case 'SET_CONTACT':
            return {
                ...state,
                ...action.data,
            };
    
        default:
            return state;
    }
}

export {
    INITIAL_STATE,
    contactReducer
}

