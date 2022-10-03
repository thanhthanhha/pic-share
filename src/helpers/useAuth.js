import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';


const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [isLogin, setisLogin] = useState(false);

    const location = useLocation();
    const history = useNavigate();

    useEffect(() => {
        if (error) setError(null);
 
      }, [location.pathname]);

    useEffect(() => {
        if (user) localStorage.setItem('user',user.username);
        
    },[user])

    useEffect(() => {
        let token = localStorage.getItem('token');
        async function verifyLogin() {
            setLoading(true);
            let res = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/welcome`,{
                headers: {
                    'x-access-token' : token,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                }
            })
            .then(res => {
                if (res.data.username && res.data.token) {
                    setUser({...res.data}); 
                }
                console.log(res.data.username);
                localStorage.setItem('user',res.data.username);
                setisLogin(true);
            })
            .catch((error) => {
                setError(error);
                localStorage.removeItem('token');
                setUser(null);
                setisLogin(false);
            })
            .finally(() => setLoading(false));
        }
        if (token) {
        verifyLogin();
        }
    },[location.pathname]);

    function logout() {
        localStorage.removeItem('token');
        setisLogin(false);
        setUser(null);
    }

    const signUp = async (email, username, password) => {
        setLoading(true);

        let res = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/register`, {
                "username": username,
                "email" : email,
                "password": password
        },{
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            }
        })
        .then((res) => {

            if (res.data.username && res.data.token) {
                setUser({...res.data});
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user',res.username);
                setisLogin(true);
                history("/browse");
            } else {
                throw Promise.reject('token or username not valid check network tab for request payload');
            }
                
        })
        .catch((error) => {
            let txterr = !error.message ? JSON.stringify(error) : error.message;
            setError(txterr);
            setUser(null);
            setisLogin(false);
        })
        .finally(() => setLoading(false));
    }

    const login = async (username, password) => {
        setLoading(true);

        let res = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/login`, {
                "username": username,
                "password": password
        },{
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            }
        })
        .then((res) => {
            if (res.data.username && res.data.token) {
                setUser({...res.data});
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user',res.username);
                console.log("redirect");
                setisLogin(true);
                history("/browse");
            } else {
                throw Promise.reject('token or username not valid check network tab for request payload');
            }
        })
        .catch((error) => {
            let txterr = !error.message ? JSON.stringify(error) : error.message;
            setError(txterr);
            setUser(null);
            setisLogin(false);
        })
        .finally(() => setLoading(false));
    }


    const memoedVal = useMemo(() => ({
        user,
        error,
        loading,
        isLogin,
        login,
        signUp,
        logout
    }),
    [user, loading, error, isLogin])

    return (
        <AuthContext.Provider value = {memoedVal}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext);
}
