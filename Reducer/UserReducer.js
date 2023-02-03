import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    users : [],
    isLoading: true,
    error: '',

  }

export const FetchUser = createAsyncThunk('GetUser',async(message)=>{
        const res = await fetch('/api/GetUsers')
        const result = await res.json();
        return result 
})

export const AddOneUser = createAsyncThunk('addUser',async(data)=>{
        const res = await fetch('/api/AddUser',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        const result = await res.json();
        return result;

})

export const EditUser = createAsyncThunk('EditUser',async(data)=>{
    const res = await fetch('api/EditUser',{
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    const result = await res.json();
    return result;

})

export const RemoveUser = createAsyncThunk('RemoveUser',async(data)=>{
    const res = await fetch('api/RemoveUser',{
        method : 'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    const result = await res.json();
    return result;

})



const UserReducer = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers :{
        [FetchUser.fulfilled] : (state, action) =>{
            state.isLoading = false
            state.users = action.payload
            if(action.payload.error){
                state.error = action.payload.error
            }
        },
        [FetchUser.pending] : (state, action) =>{
            state.isLoading = true
        },
        [AddOneUser.fulfilled] : (state,action)=>{
               

        },
        [RemoveUser.fulfilled] : (state,action)=>{
        },
        [EditUser.fulfilled] : (state,action)=>{
        }
        
    }
})


// export const {} = UserReducer.actions
export default UserReducer.reducer;
  
