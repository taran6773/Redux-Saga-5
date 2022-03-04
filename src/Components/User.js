import React, {useEffect}from 'react'
import CardComponent from './CardComponent'
import {useSelector,useDispatch} from 'react-redux'
import { getUsers } from '../Redux/Actions/users'

const Users=()=> {
    const dispatch=useDispatch();
    const users=useSelector(state=>state.users.users);
    const loading=useSelector(state=>state.users.loading);
    const errors=useSelector(state=>state.users.errors);



    useEffect(()=>{
        dispatch(getUsers())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  return (
    <>
        {users.loading && <p>Loading...</p>}
        {users.length>0 && users.map((user)=>(
            <CardComponent user={user} key={user.id}/>
        ))}
        {users.length===0 && !loading && <p>No User Available!</p>}
        {errors && !loading && <p>{errors}</p>}
    </>
  )
}

export default Users
