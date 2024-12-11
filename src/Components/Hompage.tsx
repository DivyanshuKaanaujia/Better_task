import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'


const Hompage = () => {
    let token = localStorage.getItem("email")
    let remember = localStorage.getItem("remember");
    const navigate = useNavigate();
    useEffect(() => {
        if(remember === "false"){
            localStorage.removeItem("email");
        }
      }, []);

    function logoutHandler(){
        localStorage.removeItem("email")
        navigate('/')
    }
    if(!token){
        return <Navigate to={"/login"} />
    }
  return (
    <>
        <div>Dashboard</div>
        <button onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default Hompage