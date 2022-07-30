import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialState = { // since users is the only thing in our state currently
        users: [], // list of users from search
        user: {}, // single user info
        repos: [], // users repositories
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);
  
  

    const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    return <GithubContext.Provider value={{...state, dispatch, clearUsers }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;