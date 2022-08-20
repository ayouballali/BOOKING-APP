import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data,setData] = useState([]);
  const [isLoading,setLoanding] = useState(false)
  const [errors,setErrors] = useState(false)
  

  useEffect(()=>{
    const fetchData = async ()=>{
    setLoanding(true)
    try {
      const res = await axios.get(url);
      
      setLoanding(false);
      setData(res.data);
     
      
    } catch (error) {
      console.log(error)
        setErrors(error);
    }
  }
  fetchData();
  },[url])

  const reFetch = async () => {
    setLoanding(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setErrors(err);
    }
    setLoanding(false);
  };
 
  return [data,isLoading,errors,reFetch]
};

export default useFetch;
