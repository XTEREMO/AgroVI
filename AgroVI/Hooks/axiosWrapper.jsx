import axios from 'axios';
import { useState } from 'react';

const useAxiosWrapper = () => {


  const [ data,setData ] = useState(null);


  const fetchData=(endpoint,config)=>{
    const url = 'http://localhost:8000/'+endpoint;
    axios(url,{...config,withCredentials:true})
    .then( response=> setData({...response.data,success:true}))
    .catch(error => console.log(error))
  }


  return {data,fetchData}

  
}

export default useAxiosWrapper