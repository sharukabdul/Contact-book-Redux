export default function reducer(state= {}, action) {
    switch(action.type) {
        case 'USER_INFO': {
            return {...state, userDetails: action.payload}
        }
        case 'ADD_USER': {
            const arrLength = state.userDetails.length;
            const lastIndex = state.userDetails[arrLength - 1]['id']
            return {...state, userDetails: [...state.userDetails, {...action.payload, id: lastIndex+1}]}
        }
        case 'EDIT_NAME': {
            const { data } = action.payload;
            const object = state.userDetails.map(item => {
                if(item.id == data.id) {
                    return data;
                }
                return item;
            });
            return {...state, userDetails: object}
        }
        case 'DELETE_NAME': {
            const id = action.payload;
            return {...state, userDetails: [...state.userDetails.filter(item => {
                return item.id != id
            })]}
        }
        case 'DELETE_ALL': {
            const index = action.payload;
            return {...state, userDetails: [...state.userDetails.filter(item => {
                return item.index !== index
            })]}
        }
        default: {
            return state
        }
    }
}