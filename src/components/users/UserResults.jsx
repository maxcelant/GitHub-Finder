import { useEffect, useContext } from 'react';
import { SingleUser } from './SingleUser';
import GithubContext from '../../context/github/GithubContext';

export const UserResults = () => {

    const { users } = useContext(GithubContext);

    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
                <SingleUser key={user.id} user={user}/>
            ))}
        </div>
    )
}
