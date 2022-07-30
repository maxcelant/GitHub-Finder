import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubActions';

export const UserSearch = () => {
  
  const [ text, setText ] = useState('');
  const { users, clearUsers, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!text){
        setAlert('Please Enter Something', 'error');
    } else {
        const users = await searchUsers(text);
        dispatch({type: 'GET_USERS', payload: users}) // get the list of users
        setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type='text' value={text} onChange={handleChange} placeholder='Search' className="input w-full pr-40 bg-gray-200 input-lg text-black"></input>
                        <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>Go</button>
                    </div>
                </div>
            </form>
        </div>
        {users && 
            (
                <div>
                    <button onClick={clearUsers} className='btn btn-ghost btn-lg'>Clear</button>
                </div>
            )
        }
    </div>
  )
}
