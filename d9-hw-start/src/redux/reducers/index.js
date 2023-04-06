const initialState = {
    favouriteCompany: {
        content: [],
    },
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return {
                ...state,
                favouriteCompany: {
                    content: [...state.favouriteCompany.content, action.payload],
                },
            }

        case 'REMOVE_FROM_LIST':
            return {
                ...state,
                favouriteCompany: {
                    content: [
                        ...state.favouriteCompany.content.slice(0, action.payload),
                        ...state.favouriteCompany.content.slice(action.payload + 1),
                    ],
                },
            }
        default:
            return state
    }
}

export default mainReducer