import { useState } from "react"
import { useLoaderData } from "react-router-dom";

export function loader({request}){
    return new URL(request.url).searchParams.get("message");
}

export default function Login(){
    const [userInfo, setUserInfo] = useState({email: "", password: ""})
    const message = useLoaderData();

    function handleChange(event){
        const [name, value] = event.target;
        setUserInfo((prevInfo) => ({...prevInfo, [name]: value}))
    }
    console.log(userInfo)

    

    return(
        <div className="login">
            <h1>Sign in to your account</h1>
            {
                message && <h2 className="red">{message}</h2>
            }
            <input name="email" type="email" onChange={handleChange} value={userInfo.email} />
            <input name="password" type="password" onChange={handleChange} value={userInfo.password} />
            <button>Login</button>
        </div>
    )
}