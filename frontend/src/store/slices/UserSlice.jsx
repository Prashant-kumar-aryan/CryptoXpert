import {createSlice} from '@reduxjs/toolkit';

const user = createSlice({
    name : 'user',
    initialState : {
        authorized : false
    },
    reducers : {
        login: state => {
            state.authorized = true
        },
        logout: state => {
            state.authorized = false
        }
    }
});

export {user};

export const {login, logout} = user.actions;
