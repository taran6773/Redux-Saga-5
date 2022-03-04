import {call, put, takeEvery} from 'redux-saga/effects'
// import axios from 'axios';

const apiUrl='https://jsonplaceholder.typicode.com/users';
// const apiUrl='https://jsonplaceholder.typicode.com/todos';

async function getApi(){
    return fetch(apiUrl,{
        method: 'get',
        headers: {
        'Content-Type': 'application/json'
      }
    }).then(response=>response.json())
      .catch((error)=>{throw error})
    // return axios.get(apiUrl).then((response)=>response.json).catch((error)=>{throw error})
}

function* fetchUsers(action){
    try {
        const users= yield call(getApi);
        yield put({type:'GET_USERS_SUCCESS', users:users});
    } catch (error) {
        yield put({type:'GET_USERS_FAILED', message:error.message});
    }
}

function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED',fetchUsers);
}

export default userSaga;