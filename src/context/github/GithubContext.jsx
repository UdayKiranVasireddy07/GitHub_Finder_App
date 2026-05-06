import {createContext,useReducer} from 'react';
import githubReducer from './GithubReducer';
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({children}) => {
    const initialState = {users:[],user:{},repos:[],loading:false};
    const [state,dispatch] = useReducer(githubReducer,initialState);

    const fetchUsers = async (text) => {
        setLoading();
        const param = new URLSearchParams({q:text});
        const response = await fetch(`${GITHUB_URL}/search/users?${param}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}`, },
        });
        const { items } = await response.json();
        dispatch({ type: 'GET_USERS', payload: items });
    }
     const getUser = async (login) => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}`, },
        });
        if(response.status === 404){
            window.location = '/not-found';
        }else{
            const user = await response.json();
            dispatch({ type: 'GET_USER', payload: user });
        }
    }
const GetRepos = async (login) => {
  setLoading();
  const param = new URLSearchParams({ sort: 'created', per_page: 10 });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${param}`, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
  });

  const repos = await response.json(); 
  dispatch({ type: 'GET_REPOS', payload: repos });
};

     
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });
    const setLoading = () => dispatch({ type: 'SET_LOADING' });
    return <GithubContext.Provider value={{users: state.users, loading: state.loading,user:state.user,repos:state.repos, fetchUsers, clearUsers, getUser, GetRepos}}>
        {children}
    </GithubContext.Provider>
};

export default GithubContext;