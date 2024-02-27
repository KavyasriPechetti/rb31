const initialValues={
    students:[]
}

function regReducer(state=initialValues,action){
    if(action.type==='ADDSTUD'){
        return {...state,students:[...state.students,action.payload]}
        
    }


    return state
}

export default regReducer