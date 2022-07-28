import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initialState = { // since users is the only thing in our state currently
        users: []
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);
  
    const fetchUsers = async () => { // return users from Github API
      const res = await fetch(`${GITHUB_URL}/users`, {
          headers:{
              Authorization: `token ${GITHUB_TOKEN}`
          }
      });
      const data = await res.json();

      dispatch({ // dispatch update to reducer
        type: 'GET_USERS',
        payload: data
      })
    }

    return <GithubContext.Provider value={{users: state.users, fetchUsers}}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext;