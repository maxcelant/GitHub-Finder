
const githubReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state, 
                users: action.payload
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
            }
        default:
            return state
    }
}

export default githubReducer;