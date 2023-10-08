import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getUsers } from '../../features/usersSlice';
import { Container, Grid } from '@mui/material';
import UsersCard from './UsersCard';

const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state)=>state.users.data)
    console.log("Users: ",users);

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch])
    
    return (
        <div>
            <Container>
                <h1>Users List</h1>
                <Grid container spacing={2}>
                    {users.map((user)=>
                    <UsersCard key={user.id} user={user}/>)}
                </Grid>
            </Container>
        </div>
    );
};

export default Users;