import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data,setData] = useState([]);
  const [isLoading,setLoanding] = useState()
  const [errors,setErrors] = useState()

  useEffect(()=>{
    const fetchData = async ()=>{
    setLoanding(true)
    try {
      const data = await axios.get(url);
      setData(data);
      setLoanding(false)
    } catch (error) {
      console.log(error)
        setErrors(error);
    }
  }
  fetchData();
  },[url])

  return {data,isLoading,errors}
};

export default useFetch;
