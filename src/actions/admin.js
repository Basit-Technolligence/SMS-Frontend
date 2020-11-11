import axios from "axios";
export const login = (login) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("//127.0.0.1:5000/login", login);
      if(response.data === 'LOGIN_SUCCESS'){
      dispatch({type: "LOGIN_SUCCESS",payload:login.username});
    }else{
        alert('Invalid username or password')
    }
    } catch (e) {
      console.log("login error occur", e);
    }
  };
};

export const logout = ()=>{
    return async (dispatch)=>{
        try{
            console.log('yess')
         dispatch({type:'LOGOUT_SUCCESS'})
        }catch(e){
            console.log('logout error ',e)
        }
    }
}
export const authentication = ()=>{
    return async (dispatch)=>{
        try{
            const response = await axios.get('//127.0.0.1:5000/authentication');
            if(response.data != 'Not logged in')
                dispatch({type:"AUTHENTICATION",payload:response.data})
        }catch(e){
            console.log('Error occur ',e)
        }
    }
}

export const addLogin = (login)=>{
    return async (dispatch)=>{
        try{
            const response = await axios.post('//127.0.0.1:5000/addLogin',login);
            if(response.data === "DATA_ADDED"){
                alert('Login Added Successfully')
                dispatch({type :"DATA_ADDED"})
            }else if(response.data === "USERNAME_EXIST"){
                alert('Username already exist')
            }
        }catch(e){
            console.log('Error occur ',e)
        }
    }
}