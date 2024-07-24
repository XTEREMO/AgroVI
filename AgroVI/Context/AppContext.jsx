/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext,useReducer,useEffect } from "react";
import useAxiosWrapper from "../Hooks/axiosWrapper";




const initialAppState = {
    loginStatus:false,
    email:null,
};


export const AppContext = createContext(initialAppState);


const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_STATUS":
        return { ...state, loginStatus: action.value };
      case "EMAIL":
        return { ...state, email: action.value };
      default:
        return state;
    }
  };


  
const AppContextProvider = ({ children })=>{
    const [ appState,dispatch ] = useReducer(reducer,initialAppState);
    const {data,fetchData} = useAxiosWrapper();

    useEffect( ()=> {
        fetchData('status',{
          method:"GET",
        })
    },[])

    useEffect( ()=>{
        dispatch({type:'LOGIN_STATUS',value:data?.loginStatus});
        dispatch({type:'EMAIL',value:data?.email})
    },[data] )

    return(
        <AppContext.Provider value={{appState,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;