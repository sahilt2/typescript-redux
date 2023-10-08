import React, { useEffect } from 'react';
import { getUsers } from '../../features/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';

const UserSingle = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state)=>state.users.data);
    const {userId} = useParams();

    useEffect(()=>{
        if(users.length ===0) dispatch(getUsers());
    },[dispatch,users]);

    const user = users.find((user) => user.id === Number(userId));

    // we should return a table of the users album data here
    // Remember that the user table has 3 fields of data: id,title and userId
    // we are only interested in the id and title of each album
    return (
        <div>
            <h2>User Information</h2>
            {user ? (
                <div>
                    <p>ID: {user.id}</p>
                    <p>Name: {user.name}</p>
                </div>
            ) : (
                <p>User not found.</p>
            )}

        </div>
    );
};

export default UserSingle;