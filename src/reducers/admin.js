export const adminReducer = (state={
    loggedIn:false,
    username:null
},
action)=>{
    switch(action.type){
        case "LOGOUT_SUCCESS":
            return {loggedIn:false};
        case "LOGIN_SUCCESS":
            return {loggedIn:true,username:action.payload};
        default:
            return state;
    }
}