

import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/context/UserContext';
import './login.css'

export default function Login() {

    const [credentianls,setcredentianls] = useState({
        username:null,
        password:null
    });


    const handleChange =(e)=>{
        setcredentianls((prev)=>({...prev,[e.target.id]:e.target.value}))
    }
    const navigate = useNavigate();

    const { loading, error, dispatch } = useContext(UserContext);
    
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("http://localhost:8800/api/auth/login", credentianls);
         
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/")
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
    

    


    return (
        <div className="login">
            <div className="lContainer">
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Login
                </button>
                {error && <span style={{color:"red"}}>{error.message}</span>}
            </div>
        </div>
    );
};




